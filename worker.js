/* BRM STREAM PROXY - Cloudflare Worker (hardened)
 * - Timeouts for upstream fetches
 * - Restrictive CORS: only allow configured origins, add Vary: Origin
 * - Strict YouTube ID validation (11 chars)
 * - Robust error handling and JSON responses
 * - Cache /yt-videoids with Cache API (6h)
 *
 * Maintainer: Rubén (DEVBU93) — do NOT store secrets in source. Use wrangler secret put YOUTUBE_API_KEY
 */

const STREAM_BASE = 'http://uk3freenew.listen2myradio.com:14387';
const STREAM_URL  = STREAM_BASE + '/;';
const STATION     = 'BUBATRONIK_BRM - Frecuencia Sant Salvador';

// Whitelist of allowed origins for CORS (production should contain only real domains)
const ALLOWED_ORIGINS = [
  'https://brm.worldmos.world',
  'https://worldmos.world',
  'https://aguaflow.worldmos.world',
  'https://devbu.worldmos.world',
  'https://devbu93.github.io'
  // localhost entries intentionally omitted for production. Add them only in development.
];

function getCorsHeaders(origin) {
  if (!origin) return { 'Vary': 'Origin' };
  if (!ALLOWED_ORIGINS.includes(origin)) {
    // Do not expose CORS to unauthorized origins
    return { 'Vary': 'Origin' };
  }
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
    'Access-Control-Allow-Headers': 'Range, Content-Type, Icy-MetaData',
    'Access-Control-Expose-Headers': 'Content-Type, Content-Length, icy-name, icy-genre, icy-br, icy-metaint',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

async function fetchWithTimeout(url, options = {}, ms = 8000) {
  const ctrl = new AbortController();
  const tid = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { ...options, signal: ctrl.signal });
    clearTimeout(tid);
    return res;
  } catch (e) {
    clearTimeout(tid);
    throw e;
  }
}

function fixEncoding(str) {
  try {
    const bytes = new Uint8Array(str.split('').map(c => c.charCodeAt(0) & 0xff));
    return new TextDecoder('utf-8').decode(bytes);
  } catch (_) { return str; }
}

// YouTube videoId validation: canonical ID length is 11 characters
function isYouTubeId(s) {
  if (typeof s !== 'string') return false;
  return /^[A-Za-z0-9_-]{11}$/.test(s.trim());
}

function cleanSong(raw) {
  let s = fixEncoding(raw).trim();
  if (s.startsWith('- ')) s = s.slice(2).trim();
  s = s.replace(/\s*Current Song\s*$/i, '').trim();
  return s;
}

function parse7html(text) {
  const stripped = text.replace(/<[^>]+>/g, '').trim();
  const parts = stripped.split(',');
  if (parts.length < 7) return null;
  const songRaw = parts.slice(6).join(',').trim();
  const song = cleanSong(songRaw);
  const streamStatus = parseInt(parts[1], 10);
  let artist = '', title = song;
  const dash = song.indexOf(' - ');
  if (dash > -1) {
    artist = song.substring(0, dash).trim();
    title  = song.substring(dash + 3).trim();
  }
  return {
    live: streamStatus === 1,
    currentListeners: parseInt(parts[0], 10) || 0,
    peakListeners:    parseInt(parts[2], 10) || 0,
    maxListeners:     parseInt(parts[3], 10) || 0,
    uniqueListeners:  parseInt(parts[4], 10) || 0,
    bitrate:          parseInt(parts[5], 10) || 0,
    song, artist, title,
  };
}

function parsePlayed(html) {
  const rows = [];
  const trRe = /<tr[^>]*>([\s\S]*?)<\/tr>/gi;
  let trM;
  while ((trM = trRe.exec(html)) !== null) {
    const inner = trM[1];
    const tds = [];
    const tdRe = /<td[^>]*>([\s\S]*?)<\/td>/gi;
    let tdM;
    while ((tdM = tdRe.exec(inner)) !== null) {
      const val = tdM[1]
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ')
        .trim();
      tds.push(val);
    }
    if (tds.length >= 2) {
      const time = tds[0];
      const rawSong = tds[1];
      if (time && /\d{1,2}:\d{2}/.test(time) && rawSong) {
        const songClean = cleanSong(rawSong);
        if (isYouTubeId(songClean)) continue;
        let artist = '', title = songClean;
        const dash = songClean.indexOf(' - ');
        if (dash > -1) {
          artist = songClean.substring(0, dash).trim();
          title  = songClean.substring(dash + 3).trim();
        }
        rows.push({ time, song: songClean, artist, title });
      }
    }
  }
  return rows;
}

export default {
  async fetch(request, env, ctx) {
    const origin = request.headers.get('Origin') || '';
    const url    = new URL(request.url);
    const hdrs   = {
      'User-Agent': 'Mozilla/5.0 (compatible; BRM-Radio/2026)',
      'Accept':     'text/plain,text/html,*/*'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: getCorsHeaders(origin) });
    }
    // /drive-audio/:fileId — same-origin proxy para audio público de Drive.
    // El navegador bloquea Drive directo en <audio crossorigin>; el Worker
    // sigue la redirección y devuelve el WAV con rangos y CORS controlados.
    if (url.pathname.startsWith('/drive-audio/')) {
      const fileId = url.pathname.slice('/drive-audio/'.length).trim();
      if (!/^[A-Za-z0-9_-]{20,80}$/.test(fileId)) {
        return new Response(JSON.stringify({ error: 'Invalid Drive file ID' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json', ...getCorsHeaders(origin) }
        });
      }
      try {
        const upHeaders = new Headers({
          'User-Agent': 'Mozilla/5.0 BRM-Drive-Audio/2026',
          'Accept': 'audio/*,application/octet-stream;q=0.9,*/*;q=0.1'
        });
        const range = request.headers.get('Range');
        if (range) upHeaders.set('Range', range);
        const driveUrl = 'https://drive.usercontent.google.com/download?id=' + encodeURIComponent(fileId) + '&export=download';
        const upstream = await fetchWithTimeout(driveUrl, { method: request.method, headers: upHeaders, redirect: 'follow' }, 15000);
        const type = upstream.headers.get('content-type') || '';
        if (!upstream.ok || type.includes('text/html')) {
          return new Response(JSON.stringify({ error: 'Drive audio unavailable', status: upstream.status }), {
            status: 502,
            headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...getCorsHeaders(origin) }
          });
        }
        const responseHeaders = new Headers();
        ['content-type', 'content-length', 'content-range', 'accept-ranges', 'etag', 'last-modified']
          .forEach(name => { const value = upstream.headers.get(name); if (value) responseHeaders.set(name, value); });
        if (!responseHeaders.get('content-type')) responseHeaders.set('content-type', 'audio/wav');
        responseHeaders.set('Cache-Control', 'public, max-age=3600');
        responseHeaders.set('X-BRM-Audio-Source', 'Google-Drive');
        Object.entries(getCorsHeaders(origin)).forEach(([key, value]) => responseHeaders.set(key, value));
        return new Response(request.method === 'HEAD' ? null : upstream.body, {
          status: upstream.status,
          headers: responseHeaders
        });
      } catch (err) {
        return new Response(JSON.stringify({ error: 'Drive proxy error', message: String(err) }), {
          status: 502,
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...getCorsHeaders(origin) }
        });
      }
    }

    // /status
    if (url.pathname === '/status') {
      try {
        const res = await fetchWithTimeout(STREAM_BASE + '/7.html', { headers: hdrs }, 5000);
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = parse7html(await res.text());
        if (!data) throw new Error('parse failed');
        return new Response(JSON.stringify({
          status:        data.live ? 'online' : 'offline',
          live:          data.live,
          song:          data.song,
          artist:        data.artist,
          title:         data.title,
          listeners:     data.currentListeners,
          peakListeners: data.peakListeners,
          bitrate:       data.bitrate,
          station:       STATION,
          ts:            new Date().toISOString(),
        }), {
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', ...getCorsHeaders(origin) }
        });
      } catch (err) {
        return new Response(JSON.stringify({ status: 'offline', live: false, error: String(err), ts: new Date().toISOString() }), {
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', ...getCorsHeaders(origin) }
        });
      }
    }

    // /yt-videoids — use YouTube Data API v3, cached 6h
    if (url.pathname === '/yt-videoids') {
      const PLAYLIST_ID = 'PLc5KM2_2P5GEwM0HdkRvfKds575jjhylu';
      const cache = caches.default;
      const cacheKey = new Request(url.toString(), request);
      const cached = await cache.match(cacheKey);
      if (cached) return cached;

      if (!env.YOUTUBE_API_KEY) {
        const resp = new Response(JSON.stringify({ ok: false, error: 'YOUTUBE_API_KEY not configured (wrangler secret put YOUTUBE_API_KEY)' }), { status: 200, headers: { 'Content-Type': 'application/json', ...getCorsHeaders(origin) } });
        return resp;
      }

      try {
        const items = [];
        let pageToken = '';
        let pages = 0;
        do {
          const apiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems'
            + '?part=snippet,contentDetails&maxResults=50&playlistId=' + PLAYLIST_ID
            + '&key=' + env.YOUTUBE_API_KEY
            + (pageToken ? '&pageToken=' + encodeURIComponent(pageToken) : '');
          const res = await fetchWithTimeout(apiUrl, { headers: { 'Accept': 'application/json' } }, 8000);
          if (!res.ok) throw new Error('YouTube API HTTP ' + res.status);
          const data = await res.json();
          (data.items || []).forEach(it => {
            const videoId = it.contentDetails?.videoId;
            if (!videoId) return; // missing (deleted/private)
            items.push({ position: it.snippet?.position, videoId, title: it.snippet?.title || '' });
          });
          pageToken = data.nextPageToken || '';
          pages++;
        } while (pageToken && pages < 30);

        const resp = new Response(JSON.stringify({ ok: true, playlistId: PLAYLIST_ID, count: items.length, items, ts: new Date().toISOString() }), {
          headers: { 'Content-Type': 'application/json', 'Cache-Control': 'public, max-age=21600', ...getCorsHeaders(origin) }
        });
        ctx.waitUntil(cache.put(cacheKey, resp.clone()));
        return resp;
      } catch (err) {
        return new Response(JSON.stringify({ ok: false, error: String(err) }), { status: 200, headers: { 'Content-Type': 'application/json', ...getCorsHeaders(origin) } });
      }
    }

    // /nowplaying
    if (url.pathname === '/nowplaying') {
      try {
        const [r7, rp] = await Promise.allSettled([
          fetchWithTimeout(STREAM_BASE + '/7.html', { headers: hdrs }, 5000),
          fetchWithTimeout(STREAM_BASE + '/played.html', { headers: hdrs }, 5000),
        ]);
        const t7   = (r7.status === 'fulfilled' && r7.value.ok) ? await r7.value.text() : '0,0,0,0,0,0,';
        const html = (rp.status === 'fulfilled' && rp.value.ok) ? await rp.value.text() : '';
        const stat    = parse7html(t7) || { live: false, song: '', artist: '', title: '', currentListeners: 0, bitrate: 0 };
        const history = parsePlayed(html);
        const _raw  = history[0] || { song: stat.song, artist: stat.artist, title: stat.title };
        const _real = history.find(h => !isYouTubeId(h.song));
        const cur   = (isYouTubeId(_raw.song) && _real)
          ? _real
          : isYouTubeId(_raw.song)
            ? { song: 'BUBATRONIK_BRM EN VIVO', artist: STATION, title: 'Live Mix Open Format' }
            : _raw;
        return new Response(JSON.stringify({
          live:    stat.live,
          current: { song: cur.song || stat.song, artist: cur.artist || stat.artist, title: cur.title || stat.title },
          listeners: stat.currentListeners,
          bitrate:   stat.bitrate,
          history:   history.slice(0, 10),
          ts:        new Date().toISOString(),
        }), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', ...getCorsHeaders(origin) } });
      } catch (err) {
        return new Response(JSON.stringify({ live: false, current: { song: '', artist: '', title: '' }, listeners: 0, error: String(err) }), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', ...getCorsHeaders(origin) } });
      }
    }

    // /health (legacy)
    if (url.pathname === '/health') {
      let listeners = null;
      try {
        const res = await fetchWithTimeout(STREAM_BASE + '/7.html', { headers: hdrs }, 3000);
        if (res.ok) {
          const d = parse7html(await res.text());
          if (d) listeners = d.currentListeners;
        }
      } catch(_) {}
      return new Response(JSON.stringify({ status: 'ok', station: STATION, proxy: STREAM_URL, listeners, ts: new Date().toISOString() }), { headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-cache', ...getCorsHeaders(origin) } });
    }

    // Default: proxy del stream de audio (con timeout)
    try {
      const up_h = new Headers();
      up_h.set('User-Agent', 'Mozilla/5.0 BRM-Proxy/2026');
      up_h.set('Icy-MetaData', '1');
      const range = request.headers.get('Range');
      if (range) up_h.set('Range', range);
      const upstream = await fetchWithTimeout(STREAM_URL, { method: 'GET', headers: up_h }, 10000);
      if (!upstream.ok) {
        return new Response(JSON.stringify({ error: 'Stream not available', status: upstream.status }), { status: 502, headers: { 'Content-Type': 'application/json', ...getCorsHeaders(origin) } });
      }
      const rh = new Headers();
      ['content-type','icy-name','icy-genre','icy-url','icy-br','icy-sr','icy-metaint','icy-pub','icy-description','transfer-encoding','content-length']
        .forEach(h => { const v = upstream.headers.get(h); if (v) rh.set(h, v); });
      if (!rh.get('content-type')) rh.set('content-type', 'audio/mpeg');
      rh.set('Cache-Control', 'no-cache, no-store, must-revalidate');
      rh.set('Pragma', 'no-cache');
      rh.set('Expires', '0');
      rh.set('X-BRM-Proxy', 'Lob@-Pulpo/2026');
      rh.set('X-Station', STATION);
      Object.entries(getCorsHeaders(origin)).forEach(([k, v]) => rh.set(k, v));
      return new Response(upstream.body, { status: upstream.status, headers: rh });
    } catch (err) {
      return new Response(JSON.stringify({ error: 'Proxy error', message: String(err) }), { status: 500, headers: { 'Content-Type': 'application/json', ...getCorsHeaders(origin) } });
    }
  },
};
