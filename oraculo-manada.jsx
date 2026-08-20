import { useState } from 'react';
import { Sparkles, Radio, Loader2, Search, RotateCcw } from 'lucide-react';

const CATALOG = `Carlos Vecino — Tema especial BRM Radio — Carlos Vecino
Xican — Nueva Tierra — Xican
Pop Smoke ft. Khaligraph Jones — SHWATY — Pop Smoke
ZHU — One Minute To Midnight — ZHU
G-HUN — BABA YAGA — G-HUN
In Da Club — Old Soul Version (1950s) — 50 Cent Cover
BOVSKI, PET3RPUNX — SCARS — BOVSKI & Co.
EMMY — Dancing All Alone (BOVSKI Remix) — EMMY
WILD — Desconocido
Vive Hoy — Pop Emocional — Pop Emocional AI
Marwán & Nach — 5 Gramos de Resentimiento — Marwán · Nach
BLAKE ft. Al2 El Aldeano — GOD SCHOOL — BLAKE · Al2
Madre — Soul Emocional — Soul AI
Antoine Clamaran — Gold — Antoine Clamaran
Avicii — For A Better Day — Avicii
Fritz & Paul Kalkbrenner — Sky and Sand — Fritz & Paul K
Robin Schulz — Sugar ft. Francesco Yates — Robin Schulz
DJs From Mars — Avicii Tribute Megamashup — DJs From Mars
KASE.O — SALUD Y LIBERTAD ft. FOYONE — KASE.O · FOYONE
SHO-HAI — TE PONE BIEN con KASE.O — SHO-HAI · KASE.O
Fito & Fitipaldis — Quiero gritar — Fito & Fitipaldis
Billy Gibbons — La Grange — Billy Gibbons
Eiffel 65 — Blue (Da Ba Dee) — Eiffel 65
Culture Beat — Mr. Vain — Culture Beat
Snap! — Rhythm is a Dancer — Snap!
Rnbstylerz — Like Wooh Wooh (Remix) — Rnbstylerz
Solitario — Barra libre de barras — Solitario
Mägo de Oz — Hasta Que El Cuerpo Aguante — Mägo de Oz
El Vals del Obrero — Anónimo
Paseo — Desconocido
Fito & Fitipaldis — La casa por el tejado — Fito & Fitipaldis
Matador — Los Fabulosos Cadillacs — Los Fabulosos Cadillacs
Hablaron de mí — Woundsmusic — Woundsmusic
Lo Aprendí de Tu Frío — Soul — Soul AI
PAPÁ — Loba Negra — Loba Negra
NO ES PARA MENTES PEQUEÑAS — BLUES — Blues Oscuro AI
TOTEKING — Ni de Ellos ni de Ellas — TOTEKING
KASE.O & CAPAZ — Pan caliente — KASE.O · CAPAZ
SFDK — Esclavos (Neo Soul Cover) — SFDK
Macaco — Atreverse a Vivir — Macaco
Vengaboys — Boom Boom Boom!! (Hardstyle) — Vengaboys
TRIFUNOX — TIKI TIKI (TOP CAR MIX) — TRIFUNOX
Reel 2 Real — I Like To Move It (REMIX) — Reel 2 Real
KULTØ — Darbuka Pulse (Drum Tribal) — KULTØ
Wu Tang Clan — Protect Ya Neck / C.R.E.A.M. — Wu Tang Clan
Black Pumas — Colors (Live Abbey Road) — Black Pumas
FKJ & Masego — Tadow — FKJ · Masego
Delinquent Habits — CALIFORNIA — Delinquent Habits
Kendrick Lamar — HUMBLE. — Kendrick Lamar
J Dilla — Donuts (Medley) — J Dilla
Massive Attack — Teardrop — Massive Attack
Portishead — Glory Box — Portishead
Bonobo — Kong — Bonobo
Moderat — Bad Kingdom — Moderat
Trentemøller — Miss You — Trentemøller
Aphex Twin — Avril 14th — Aphex Twin
Four Tet — Angel Echoes — Four Tet
DJ Shadow — Midnight in a Perfect World — DJ Shadow
MF DOOM — Madvillainy Medley — Madvillain
The Roots — You Got Me — The Roots
Erykah Badu — On & On — Erykah Badu
Lauryn Hill — Ex-Factor — Lauryn Hill
Outkast — Rosa Parks — Outkast
Amy Winehouse — Back to Black — Amy Winehouse
Sharon Jones — 100 Days 100 Nights — Sharon Jones
Charles Bradley — Changes — Charles Bradley
Leon Bridges — Coming Home — Leon Bridges
Gary Clark Jr. — Bright Lights — Gary Clark Jr.
Jack White — Ball and Biscuit — Jack White
Alabama Shakes — Hold On — Alabama Shakes
Rodrigo y Gabriela — Tamacun — Rodrigo y Gabriela
Orishas — A Lo Cubano — Orishas
Buena Vista Social Club — Chan Chan — Buena Vista Social Club
Ibrahim Maalouf — Illusions — Ibrahim Maalouf
Aya Nakamura — Djadja — Aya Nakamura
Burna Boy — Last Last — Burna Boy
Wizkid — Ojuelegba — Wizkid
Afrobeats Compilation BRM Mix Vol.1 — BRM Selección
Disclosure — Latch ft. Sam Smith — Disclosure
Bicep — Glue — Bicep
Peggy Gou — (It Goes Like) Nanana — Peggy Gou
Jamie xx — Gosh — Jamie xx
Joy Orbison — Hyph Mngo — Joy Orbison
Solomun — Velo — Solomun
Tale Of Us — Numb — Tale Of Us
Charlotte de Witte — Doppler — Charlotte de Witte
Amelie Lens — Forever — Amelie Lens
SPFDJ — 1210 — SPFDJ
Objekt — Ganzfeld — Objekt
Surgeon — Magneze — Surgeon
Jeff Mills — The Bells — Jeff Mills
Underground Resistance — Seawolf — Underground Resistance
Plastikman — Spastik — Plastikman
Richie Hawtin — Contakt (Live) — Richie Hawtin
Ben Klock — Subzero — Ben Klock
Marcel Dettmann — Track 8 — Marcel Dettmann
Drake - God's Plan — Drake
Future - Life Is Good (Official Music Video) ft. Drake — Future
YG - Go Loko ft. Tyga, Jon Z — YG
Soul King Brook 💀 YonkoBe - Soul King [AMV] — YonkoBe
YOHOHOHO – Brook Tribute | A Song For The Ones Who Never Came Home | One Piece — JoyB
Maria Becerra, Becky G, Myke Towers & Quevedo - Tu Piel (Music Video) Prod. By Juotropx — Juotropx
FARIANA x Ñengo Flow - Gangsta Love & Bellakiti (Video Oficial) — FARIANA
DADDY YANKEE || BZRP Music Sessions #0/66 — Bizarrap y Daddy Yankee
GONZY - INSTINTO ANIMAL (Visualizer) — Gonzy
KEAN DYSSO & KristaFoxx - FANCY (VIP) — KEAN DYSSO
AGUSTITO REMIX - ORIGINAL ELIAS con ANTONIO CARMONA, MONCHO CHAVEA, LOS YAKIS Y LUCAS CARMONA — Original Elias
Nicky Jam || BZRP Music Sessions #41/66 — Bizarrap
KAROL G - Tu Perfume (Video Oficial) — Luis Albert
PESO PLUMA || BZRP Music Sessions #55/66 — Bizarrap
Farruko, Bad Bunny - La Cartera (Official Video) — Farruko
DON OMAR - SOY YO 👑 (El Regreso del Rey) — Aureowyrmlatin
BAD BUNNY ft. Chuwi - WELTiTA (Video Oficial) | DeBÍ TiRAR MáS FOToS — Bad Bunny
Tego Calderón - La Receta (Official Video) — Tego Calderón
Farruko, Victor Cardenas, Dj Adoni - El Incomprendido (Official Video) — Farruko
Daddy Yankee, Becky G - ME ENTERÉ (ft. God Music) — God Music
Don Omar, Residente - DON OMAR❌ RESIDENTE | FLOW HP 🦍 ( Official Video ) — Don Omar
Ryan Castro - que te vaya bien (Video Oficial) — Ryan Castro
Santa fe klan x peso pluma x bad bunny - corazon de oro | Reggaeton | Trap corridos 2026 — fuego perreo y 5 más
Imran Khan - Satisfya (Official Music Video) — imrankhanworld
Lil Uzi Vert, Quavo & Travis Scott - Go Off (from The Fate of the Furious: The Album) [MUSIC VIDEO] — LIL UZI VERT
Wiz Khalifa - Work Hard Play Hard [Music Video] — Wiz Khalifa
REINA (KRIMINAL) - Kapo (Video Oficial) — Kapo
TMNT: Shell Shock Music Video — FacePalmer
QUEVEDO - CaSiTa De MuÑeCaS 👑🇮🇨 (De Canarias Pal Mundo) — Aureowyrmlatin
Avicii's 2012 Coachella set-and the iconic LED giant head that he played atop. Photography by Rukes. — Avicii
Weed Makes Her Horny, Tequila Makes Her Mean — Cathouse Kings - Topic
Sigma - JUNGLE ft. Stefflon Don & Yung Saber (Lyric Video) — Sigma HQ
Kill Bill – Psycho Album Mix - Gorillaz Inspired AI Remix | Trip-Hop, Alt Hip-Hop — Deadwire
Sage The Gemini - Reverse (James Hype Remix) [Official Audio] — Sage the Gemini
Sage The Gemini - Buss It feat. Chris Brown (Official Audio) — Sage the Gemini
Sage the Gemini - Big Numbers [Official Audio] — Sage the Gemini
Sage the Gemini - Now & Later [Official Music Video] — Sage the Gemini
Sage The Gemini - Pilot [Official Music Video] — Sage the Gemini
Sage The Gemini - Come Get It [Official Audio] — Sage the Gemini
Tego Calderón, Ñengo Flow - Códigos De La Calle (Official Music Video) — Desde El Caserio TV y Punto Urbano
FYAHBWOY ❌ OTO BEATS - VOLVÍ — FYAHBWOY OFFICIAL y OTO Beats
Reality x Farruko - Por Si Muero Mañana REMIX (Official Video) — Reality y Farruko
John Gibbons - P.Y.T. (Pretty Young Thing) Music Video — The Vibe Guide
Sigala x Digital Farm Animals - Only One (Official Lyric Video) — Sigala
EN LA SANGRE 🩸- LANGUI ❌ GITANO ANTON = LA EXCEPCION Feat Irie Angel (Video Oficial)Prod LaDakostyle — Langui
😂 AL PAN, PAN Y AL VINO, VINO 🍷 | La Rumba Flamenca Más Divertida del Año | Canción de Humor 2026 — OLÉ ESPAÑA
Cimafunk, Monsieur Périné - Catalina (Official Music Video) — Cimafunk
Camilo, Mau y Ricky - Rolex — Camilo
ldley -Mi cachito de cielo videoclip oficial — LdLey Oficial
Flamenco Urbano | mírala que guapa viene — Mia study music | Techno Flamenco Urbano
Me Importa Una Mierda — Miguel.ReyesMusic
Spice, Sean Paul & Shaggy - CRATE (Official Lyric Video) — Skyline Lyric Co.
NO AGUANTO EL TANGA 😂 | La Rumba Flamenca Más Graciosa del Mercadillo — OLÉ ESPAÑA
Guaynaa, India Martinez - El Payo (Official Video) — Guaynaa
Cierra Ramirez - Bad Boys (Official Video) — Cierra Ramirez
Sixto Rein - El Milagro — SixtoRein
Si me vuelves a elegir 🔥 Flamenco urbano — Mia study music | Techno Flamenco Urbano
Daddy Yankee - El Sacudón (Official Music Video) — Cervantes Sounds y MORAD GMR
Sinny & 7vvch - Petrunko (Numb: Slowed Remix) — Sinny
FISHER x KITA ALEXANDER - ATMOSPHERE [LYRIC VIDEO] — FISHER
Disco Lines & Maesic feat. Mason & Princess Superstar - Push It — Disco Lines
Nurkalyi X - 911 Sayber — VDJ Smile Club
Riton x Nightcrawlers - Friday ft. Mufasa & Hypeman (Dopamine Re-edit) [Official Video] — RitonTime
MK - Dior (London Popup Recap) ft. Chrystal — MK (Marc Kinchen)
Daddy Yankee – Tsunami (Official Music Video) — La Vibra Latina
Iggy Azalea ft. Tyga, 2 Chainz - Twerk The Room (Music Video) — 9inetySix
Daddy Yankee – Rompe La Noche (Official Video) — JustinB Music y Apache music fans
EMINEM - A** Like That (TERMIK Remix) — HELLFXRMANCE
la sesión del verano. — ENYGMA
Rudimental & Major Lazer - Let Me Live (feat. Anne-Marie & Mr. Eazi) (Dance Video) — Major Lazer Official
Notion - Hooked (Official Lyric Video) — Spinnin' Records
James Hype B2B Tita Lau live @ Cafe Mambo, Ibiza 2026, Sunset Ibiza Classics Mix — James Hype y Tita Lau
Max Manie - Sunday (KlangTherapeuten Remix) — TheSoundYouNeed
Milky Chance - Down By The River (FlicFlac Edit) — TheSoundYouNeed
Vance Joy - Riptide (FlicFlac Edit) — TheSoundYouNeed
Androma - Gunjule — TheSoundYouNeed
Macklemore - Wings (feat. Ryan Lewis) (Subtitulado español) — The Medizine
FALSALARMA - FULL TIME con TOSKO — Boa Música Urbana
Jax Jones - Instruction ft. Demi Lovato, Stefflon Don — Jax Jones
SJUR - What Do I Do — The Vibe Guide
Shiaoko - Buena Vibra (Videoclip Oficial) — SHIAOKO
ESPECTACULAR INTRO 6º ANIVERSARIO MAKINEROS 90's 2020 — Makineros 90's
TANXUGUEIRAS & RAYDEN - Averno (Videoclip Oficial) — Tanxugueiras
Bad Bunny feat WAD DJ - Café Con Ron (Superbowl Édition) — Cédric DARMAYAN (WAD DJ)
Xema Fuentes, Arzadous, Carla Frigo - Mr. SAXOBEAT (Vídeo Oficial) — Xema Fuentes
Estopa, Yungberto - Bossanova (Yungberto Remix) — Estopa
Yo soy Español, Español, Español — Ave Fénix
David Bisbal x Jayxme x Monjez - Ave Maria (TECHNO) — Jayxme
BEÉLE - NO TIENE SENTIDO (LI4M REMIX) [FREE DOWNLOAD] #beele #techno #technoremix — LI4M
Like A Bunny — Release - Topic
Ladilla Rusa - Macaulay Culkin (VIDEOCLIP) — Ladilla Rusa
Parkineos - Saeta del Santo Ruido [VIDEO OFICIAL] — Parkineos
CACHÉ - MIAU (VIDEOCLIP OFICIAL)#puravidanene — CACHÉ y 2 más
El Columpio Asesino - Toro (I HATE MODELS speed up revival edit of André VII remix) — Mushroom Pillow
BOOM BOOM SHAKE THIS FLOOR (Club Mix) — Hyper State - Topic
Forget me — No Reasons
KASE.O - RINGUI DINGUI feat. SFDK (ANDRÉS CAMPO REMIX) — KaseO TV Oficial
Arde Bogotá - Los Perros (Andres Campo & K-Style Remix) — Arde Bogotá
Daddy Yankee - Imbatible (Official Music Video) — Ritmo Celestial
NADIE ME PARÓ 🔥 Flamenco Urbano 2026 — ZUIR
🎵 España | Canción de la Copa Mundial 2026 🎵 La Roja Se Siente — GLORIA BLANCA
Ryan Castro, SOG, Selección Colombia - EL RITMO QUE NOS UNE (LETRA) — TED SAD
Kiko Rivera & Lucía De La Puerta - Divas (Videoclip Oficial) — Kiko Rivera Oficial
¡ESPAÑA ESTÁ EN LA FINAL DEL MUNDIAL! "La Roja No Cae" Eurobloke (Video Lyrics) #mundial #españa — EuroBloke
Beret, Estopa - Diablo (Videoclip Oficial) — BERET
Lucia De La Puerta x Jayxme - Si no te cuida (TECHNO REMIX) — Lucia De La Puerta
Lucia De La Puerta, Jayxme - Aire (Techno Remix) — Lucia De La Puerta
Alan Walker - Car Music Mix 2020 [Bass Boosted] [EDM Remix] [Fast & Furious - Need For Speed- CREW] — WolveriNE 1983
🏁 Battle Drift 🏁 | Car Music Mix 2020 (Bass Boosted) | Best EDM, BOUNCE, ELECTRO HOUSE — EDM ILY
David Guetta - Titanium (The Stickmen Project Remix) — The Stickmen Project
James Hype - Cascadas (con Sam Harper y Bobby Harvey) (RAMBA ZAMBA BIGROOM REMIX) — Ramba Zamba
Deorro - Five Hours (Static Video) [LE7ELS] — PRMD Music
Tomorrowland 2026 🔥 Martin Garrix, David Guetta, Tiësto, Timmy Trumpet, Armin van Buuren, W&W — Mainstage Nation
NATHY PELUSO - EROTIKA (Video Oficial) — NATHY PELUSO
Wolfskald - We'll Be Dancing Under the Moon (Official Epic Music Video) — Wolfskald
SOUNDYXI – Just Do It (Club Banger | Music) (Visualizer) — SOUNDYXI
LMFAO - Sorry For Party Rocking — LMFAOVEVO
BLAKE - LENGUA DE SERPIENTE [VIDEOCLIP OFICIAL] — BLAKE
Ñengo Flow & Tego Calderón - Los de Siempre (Official Music Video) — Desde El Caserio TV
HALO - Quevedo ft. La Pantera (Official Video) — Quevedo
daddy yankee - IMPARABLE (video oficial) — Latino Music Station
MR. MOONDIAL - Quevedo ft. Pitbull (Visualizer) | BUENAS NOCHES — Quevedo
Aventura, Bad Bunny - Volví (Video Oficial) — Romeo Santos
Daddy Yankee - El Sacudón (Official Music Video) — Ritmo Celestial y HYBE label Fans(하이브 팬들)
SOFI TUKKER - Barthelona (Official Music Video) — SOFI TUKKER
Shotta & El Jincho & Gordo Master - Vasilon — Shotta
Ptazeta, Farina - Trakatá — PtaZeta
ISRAEL B, C. TANGANA, LOWLIGHT - TRANQUILISIMO — ISRAEL B
Chucky73 || BZRP Music Sessions #43/66 — Bizarrap
DON PATRICIO - Y A MÍ QUÉ? (Vídeo Oficial) — Don Patricio
GONZY - FRIKI (Official Video) — Gonzy
KAZE - GUAPA CABREÁ FT PTAZETA — KAZE
Avicii - Hey Brother (Avicii By Avicii) — Avicii
Avicii - SOS (Fan Memories Video) ft. Aloe Blacc — Avicii
Dubai's Hottest Party Vibes / Tori levett @Boatriders @technoandchill — BOATRIDERS y Tori Levett
Bakermat - Joy (with Ann Nesby) (Official Lyric Video) — Bakermat
TOBEHONEST & WELKER BR - Too Bright (Extended Mix) — Myth of NYX
Noire - Live @ Radio Intense Tarragona 15.03.2021 / Tech-House DJ Mix — Radio Intense
RELAJADITA | Main Floor - Gotec Club | 1H 1/2 | BOUNCE SET — Relajadita
Rascal Flatts - Life Is A Highway (Jesse Bloch Bootleg) [Official Cars Song] 👑 Rex Sounds — Rex Sounds
El Coleto y La Coletica - Angelito Ramire — Angelito Ramire
R3hab - Samurai (Go Hard) [Original Mix] — Spinnin' Records
Wet — No Reasons
Chasing Abbey, HARLEE - Take Me To The Water (Official Music Video) — Spinnin' Records
KSHMR & MEMBA - Bass Down Low (feat. DEV) [Trap Version] [Official Audio] — KSHMR y 2 más
Sick Individuals - Prime (Official Music Video) — Spinnin' Records
Loud Luxury & Natalie Jane - UH OH! (Official Lyric Video) — Loud Luxury y Natalie Jane
DMNDS & Fallen Roses - Calabria | Extended Remix — Extended Music
Robin Schulz x Sigala feat. Zoe Wees - AM to PM — Robin Schulz y 2 más
Supafly, Luvstruck, Shayan - Stronger Than Before (Official Music Video) — Spinnin' Records y 3 más
Oliver Heldens - Lady (Hear Me Tonight) [Official Music Video] — Oliver Heldens y Heldeep Records
Loreen Tattoo Remix (Styles AFRO House) Remix-2026 🔥🔥🔥 — AFRO FIRE
TOMORROWLAND FESTIVAL 🎧 Vintage, Steve Aoki, Porter Robinson, Fisher, Calvin Harris, Alesso, R3HAB — Las Vegas ElectroVibe y Frozen Atmosphere
Kris Kross Amsterdam, Luísa Sonza, Willy William - My Oh My [Lyrics Video] — Cloud 9 Music y 2 más
Natalie La Rose - NOT NICE Ft Benjamin Fayah, SHAYE (Official Video) — Natalie La Rose y 2 más
🔥 Shenseea ft. Shaggy – Go Down Dehh (The Shaggy Show) | Reggae Music 2026 | 4K Lyrics Video 🔥 — Roma Unversed
Jax Jones - Breathe ft. Ina Wroldsen — Jax Jones
KristaFoxx - Young & Rich — KristaFoxx
Tujamo x Azteck x INNA - Freak (Official Music video) — Smash The House
Sean Paul x INNA - Let It Talk To Me — Sean Paul
FREYVRA x Sirexa – Born in the North | Dark Viking Trap Freestyle Anthem (Official Music Video) — F R E Y V R A y Sirexa
Gabry Ponte - Easy On My Heart (Official Visualizer) — Gabry Ponte
TOPIC x Becky G - Sorry Papi (Official Music Video) — Topic y Becky G
Rave Like A Pirate: Epic Shanty Meets Techno — Oblivion Music
Sam Feldt, MC4D, VIZE, Aloe Blacc - Hey Son (MC4D Visualizer) — MC4D
The Woolpackers - Hillbilly Rock, Hillbilly Roll (Ripper Remix) — Ripper Unleashed
The Gambler (MDB Dance Cover) Bounce Bootleg🔥 — MDB
TIPSY 🍻 | The Wildest Irish Pub Anthem You'll Ever Hear (Sing-Along Chaos) — Neon Theory
Shaboozey - A Bar Song (YUSSI Remix) (Free Download) — RELEVANT DNB
Tiësto - The Business (Official Music Video) — Tiësto
Life Is A Highway (DJ Casey Remix) — DJ CASEY
Armin van Buuren feat. Sharon den Adel - In And Out Of Love (Miss Cyanna Remix) | Trance 2026 — Miss Cyanna
Tiësto - In My Memory (DJ Vegas Remix) — DJ Vegas
Zetazen - Y te acuerdas — Zetazen
Tinie Tempah - Girls Like ft. Zara Larsson (Official Video) — TINIE TEMPAH
Play Hard x No Broke Boys – David Guetta ft. Ne-Yo & Akon x Disco Lines & Tinashe (DEVANK MASHUP) — Devank°
Tinashe & Disco Lines - No Broke Boys (Live from LIV Beach Las Vegas) — Tinashe
Shakira, Burna Boy - Dai Dai (Official Video) — Shakira y 2 más
Saweetie - Best Friend (feat. Doja Cat) [Official Music Video] — Official Saweetie
3 Are Legend (Dimitri Vegas, Steve Aoki & Like Mike ) | Tomorrowland 2022 - WE3 — Tomorrowland
La primavera trompetera — losdelinqüentestv
Low x Rock That Body (DJ CASEY Remix) — DJ CASEY
Megamix 1999 — JordiCule Deverdad
RockFM - Álex Clavero El FrancotiraRock y los pingüinos moteros — RockFM
Jamás es tarde — Los Ecos de Cyrano - Topic
La voluntad callada — Los Ecos de Cyrano - Topic
MI DEMONIO ERES TU - Black Winter Rock – Cuando el Infierno Aprendió Mi Nombre. — Black Winter Rock
LA TABERNA TEMPLARIA 🍺✝️ | Himno Medieval Épico — Forjado en Fuego
AIM WIND X – Run「AMV 4K」 — AIM WIND X y 2 más
¡Moriré de pie! — Invierno Crónico
Una Copa Con El Diablo // Dark Country en Español — SAN VENGANZA
NO ME SUBESTIMES... APRENDÍ A RESISTIR | Dark Country en Español — Acordes de la Noche
"Lobo y Pastor – Folk Metal Épico que Te Hará Sentir el Poder del Buen Pastor 🔥" — ALTAR DE ACERO OFICIAL
Ángel Errante — No cayó, no se fue… sigue caminando | Black Winter Rock. — Black Winter Rock
MUJERES DIVINAS - VICENTE FERNÁNDEZ | Cover Tributo Rock — MI CANAL MUSICAL - TRIBUTO ROCK
La llorona [Tributo Rock] Metal Cover - Sempiternia — Sempiternia Rock
ME TENGO MIEDO A MÍ 😈🔥 | COMPA DIABLO MUSIC — Compa Diablo Music
No Reces Por Mí | Dark Country en Español — Alma Rey
ROSALÍA × SHAKIRÁ — ACERO ⚔️ (Video Oficial AI) — Seraph Rhythm y 3 más
SOMOS NIETAS DE LAS BRUJAS | Poder femenino Brutal y Soberano | Dark Trap Ritual — Potens
FELICIA, Edward Maya, Vika Jigulina - Me Without U (Official Music Video) — FELICIA
Gabry Ponte, Steve Aoki, KEL - He's A Pirate (Save Me) [Official Visualizer] — Steve Aoki
The Universe Needs You — Sapajou - Topic
Arráncame las ganas - Duina del Mar — Duina Del Mar
Beéle - quédate (Letra) — Echolam
David Guetta & Sia - Beautiful People (Official Video) — David Guetta
R3HAB, INNA, Sash! – Rock My Body (Official Music Video) — Spinnin' Records y R3HAB
Dj Goja - Mi Chico 🔥 (Official Video) — Dj Goja
Greeicy - Quiero + (Official Video) — Greeicy
Jovani x Chris Crone - I'll Fly With You (L'Amour Toujours) [Official Video] — Jovani
Michael Jackson – Smooth Criminal (Techno Remix) — Warehouse District Techno
DJ Snake, Peso Pluma - Teka (Official Music Video) — DJ Snake
Topic x Becky G - Sorry Papi (Letra/Lyrics) — SoyLatino
NOMAN MIX - Timer (Original Mix) — NOMAN MIX y Mind Mix
Bonnie Tyler - Total Eclipse of the Heart | Symphonic Metal Cover ⚔️ — Irene Belserion
DARK ARIA • EPIC VERSION / Remix | SOLO LEVELING — Akuro Soren
Fenrir — Norscan Warlord
Domsgard - Fenrir | When Ragnarök Comes | Fenrir's War Hymn — Domsgard
Jim Yosef, Level 8, Scarlett - Curse (Official Lyric Video) — Jim Yosef
VALHALLA RISING ⚔️🔥 Official Viking Battle Anthem (Cinematic Trap x Nordic Orchestral) — Draugr Frostvein
Oops!... I Did It Again | Epic Dark Gothic Orchestral Cover — Obsidian Symphony
Barbie Girl - AQUA | Epic Dark Gothic Orchestral Cover — Moon Lunar Cinematic
El sinpensar - Tech Dembow 🔥 | Tech House x Dembow — El SinPensar Official
Piggy Watt (Boom Boom Boom) — Piggy Watt
Baila Bruja, baila - Lunabia (Marcia Morales Montesinos) — Lunabia
LE RECÉ A DIOS, RESPONDIÓ EL DIABLO 💔😈 | VagoNocturno (Audio Oficial) — VagoNocturno
New Beat Order, KROMA & Seeko - Bad Boy | HARDSTYLE REMIX | VIRAL TIKTOK | HARD TECHNO — NEW BEAT ORDER
Welcome To Draven — Ferrvx
Ka Ma Ta (Hard Techno) — SitonicSA
Un Beso Y Una Flor (DJ Capde Remix) - Techno viral TikTok — DJ Capde
GTFU (Get The Fiddle Up) — Ferrvx
No me vengas con cuento💥Techno Flamenco #Miastudymusic — Mia study music | Techno Flamenco Urbano
Xema Fuentes, Try It, Eva Hevia - DEJA QUE MUEVA, MUEVA, MUEVA (Visualizer) — Xema Fuentes y 2 más
La Zowi - ORGASM (Adrián Mills & Selecta REMIX) — Selecta
La Gitana (Hard Techno Remix) — Ferrvx
La Loba (Hard Techno Remix) — Ferrvx
infernal melody... NekoSmile — NekoSmile
LEONIDAS - LA BOHÈME — Leonidas
TECHNO MIX HARD ⚡️EDM➕️RAVE💣 2026 💥Popular Songs💥 Car & Gym Music — Yoyo WR 🎵
Butch U - Like Me — Butch U Official
KladX - Taste Me (Deep House Car Mix) — KLADX MUSIC
Steve Void - Leave Her Johnny (Sea Shanty | Lyric Video) [Dance Fruits Release] — Dance Fruits
Dance dance dance with my hands. Bloody Mary (Melodic Techno) — F4ST
A TU VERA - Aaron Sevilla, Javi Torres, Alba Dreid & Ruben Hernández Trumpet — Aaron Sevilla
Shaku Shaku Club — DRAMzN - Topic
INNA - Morenito — INNA
Magalenha - SMYLZ (TECH HOUSE REMIX) — SMYLZ
THYPONYX - Kiss My Thighs (Axel F) — THYPONYX
FanEOne - Bre Petrunko (Car Video) — Starix
Permanent Imprint — F.R.K.
Alejandro Molinari - Vision (Badwolf Remix) — Alejandro Molinari
Deep Violin Vibes — Moonflower (Original Mix) — Deep Violin Vibes y 2 más
Flesh and Wire — Peter Axon
Dj Aligator - Ice Ice Baby (Visualizer) — Smash The House
HERZLIMIT - ONE FIRE | Ritual Tribal Techno 2026 — HERZLIMIT
NORUA. - JUNGLE KING (CAR MIX) — NORUA.
LEONIDAS - FREQUENCY — Leonidas
TECHNO ● Voices In My Head x Insomnia (Stephani B Mashup) — Psycodelize Music
LEONIDAS - WHITE RABBIT — Leonidas
LEONIDAS - SATISFACTION — Leonidas
LEONIDAS - NO AMERICANO — Leonidas
Tujamo - Booty Bounce (Official Music Video) — Spinnin' Records
Chocolate Puma feat. Colonel Red-Back Home (Noise Walkers Remix) — Best of Remix Official
QUINTINO x TIMMY TRUMPET x DA TWEKAZZ - EPIC (700K Mix Part2) — PARTY ROCKZZ
TIMMY TRUMPET x BENNY BANASSI x DIMATIK - LONG RANGER (HARDSTYLE MIX) HD HQ — PARTY ROCKZZ
Central Cee & Doja Cat - Talk Too Much (Audio) | (Type) — 808 Records
7 VIDAS - Parkineos & Amygdala [VIDEOCLIP OFICIAL] — Parkineos y Amygdala
LOCOPLAYA - RICOTTA (VIDEO) — Locoplaya
DIEGOTE - LA CURIOSIDAD - Prod. PMP — Diegote
HARD GZ & REALITY - FELIZ CON POCO (PROD. NEURO) — HARD GZ
Sean Paul x Shenseea - "DUTTY WINE" | Modern Dancehall Pop Instrumental 2026 — ALGORIDDIM
BAD BUNNY - Noche en Silencio (feat. DRAKE) [Music Video] — MUSICA DE LIBERTAD
Kapo, Romeo Santos - TE QUEDA BONITO (Video Oficial) | Lyric 2026 — Central Music y Revo Music
sangiovanni, Aitana - mariposas — sangiovanni
OXEN - Amore Mio (Original Mix) — OXEN
NATHY PELUSO, Rawayana - MALPORTADA (Video Oficial) — NATHY PELUSO
Paul Kalkbrenner - Live at Tomorrowland 2022 — Paul Kalkbrenner
Spektral @ Aqüeducte de les Ferreres / Pont del Diable (Tarragona) #technoset #djset #Spektral — SPEKTRAL Music
dj spektral @ techno set aquaducte de les ferreres, pont del diable, tarragona, spain ~2021_clip — sht antonov
Shine Agian - Rahul Bhoi (Official lyrical Video) | FIFA World Cup 2026 — Uvalic Viktor
NO BATIDÃO - REMIX 4 VERSION🔥 — Cover Vibe
HUNTR/X - HOW IT'S DONE (from the "K-POP Demon Hunters" movie) - [ lyric / sub español ] — Julsitaa_
"Golden" Official Lyric Video | KPop Demon Hunters | Sony Animation — Sony Pictures Animation
Jennifer Lopez - Ain't Your Mama (Official Video) — Jennifer Lopez
Cardi B, Bad Bunny & J Balvin - I Like It [Official Music Video] — Cardi B
Justin Quiles, ChimbalaHD ZionLennox - Loco (Video Oficial) — Justin Quiles
Thalia, NATTI NATASHA - No Me Acuerdo (Official Video) — Thalia
Ryan Castro - Mujeriego 💋 (Vídeo Oficial) — Ryan Castro
Jennifer Lopez - El Anillo (Official Video) — Jennifer Lopez
LAS BRATZ (remix) - Aissa, Saiko, JC Reyes ft El bobe, Juseph, Nickzzy — A I S S A
Maikel Delacalle - 'O No 'Or Nah' (Spanish Remix) (Official Music Video) — MAIKEL DELACALLE
BAD BUNNY - NO ME QUIERO CASAR (Visualizer) | nadie sabe lo que va a pasar mañana — Bad Bunny
BAD BUNNY x DRAKE - MÍA (Video Oficial) — Bad Bunny
Lirico En La Casa - El Motorcito (Video Oficial) — Lirico En La Casa
Karetta el Gucci, Omar Montes, RVFV & Chimbala - Fake Capo Remix (Video Oficial) — OMAR MONTES
Sean Paul, J Balvin - Contra La Pared — Sean Paul
Natti Natasha ❌ Ozuna - Criminal [Official Video] — NATTI NATASHA
RAKATA #TIKTOK - Original Elias x Moncho Chavea x Yotuel x C de cama — Original Elias
Junior Caldera¨PA LOS CHISMOSOS¨ JohnTheis MestizaOfficial. NeblinnaOfficial JP21oficial — Junior Caldera
La nueva escuela ft Omar Montes La rubia remix 2 (Lyric Video) — OMAR MONTES
LOMIIEL - HAY LUPITA ( VIDEO OFICIAL 4K ) — Lomiiel
Bad Bunny - Tití Me Preguntó (Video Oficial) | Un Verano Sin Ti — Bad Bunny
RAPSUKLEI & HAZHE feat GREEN VALLEY - VEN — Rapsusklei y 2 más
Timmy Trumpet x Scooter – For Those About To Rave (Official Video) — Scooter
Cameron Whitcomb - Kingdom of Fear (Official Music Video) — Cameron Whitcomb
Flo Rida - Good Feeling [Official Video] — Flo Rida
MACKLEMORE & RYAN LEWIS - CAN'T HOLD US FEAT. RAY DALTON (OFFICIAL MUSIC VIDEO) — Macklemore
Eminem feat. Avril Lavigne - Heavy — SadSphere
Rupatrupa - Luna Roja — Rupatrupa
Mr.Kilombo ft. Muerdo - "Tiempo al tiempo" — Mr.Kilombo
La Sra. Tomasa - El Colectivo ft Ahyvin Bruno, Sr. Wilson, Desiree Diouf & Marcio I Live Sessions #5 — La Sra. Tomasa
SHARIF & LA SRA. TOMASA - CANTO PARA MI PUEBLO (Videoclip oficial) — SHARIF
Shotta - Sonrisas y Lágrimas — Shotta
ONE-LINE DirtyVejares KijoteRah CaironDhee Prod.by Wuilldafriqq DjRopo. — CaironDhee // InfektaMusic.
Timmy Trumpet x KSHMR x Mildenhaus - Ininna Tora [Official Audio] — KSHMR
GREEN VALLEY ft. FYAHBWOY - ESTAMOS READY (Videoclip oficial) — greenvalleyband
Sara de las Chuches x Omar Montes x RVFV - COMO VENGO (REMIX) (Video Oficial) — Sara de las Chuches
Gabry Ponte x LUM!X x Prezioso - Thunder (Dance Video) — Spinnin' Records
Dollar Selmouni, Kaze, Kvinz - Deja que eso fluya — DOLLAR SELMOUNI
Tosko - Soñar (Videoclip) — Tosko Oficial
FYAHBWOY "MI MENSAJE" - PROD HEAVY ROOTS - VIDEO OFICIAL HD (2013) — FYAHBWOY OFFICIAL
KINGTANA - CHULERÍA DEL 15 — KINGTANA
XXL — Blasfem
Young Gipsy ❌ El Langui - Un melón🍈 (Video Ofical) prod by Smarty — young gipsy y Langui
KINGTANA - CLASE G — KINGTANA
NADAL 015 - GAME MASTER (PROD. BLASFEM) — NADAL 015
KASE.O I Mucho Toy con Al2 El Aldeano I Prod. Harto Rodriguez (Video Oficial) — KaseO TV Oficial
Lola Indigo, Manuel Turizo - 1000COSAS (Official Video) — Lola Indigo
Becky G - EPA (Official Video) — Becky G
RVFV FT. OMAR MONTES, DAVILES DE NOVELDA - PRENDÍO REMIX (VIDEO OFICIAL) — RVFV
GÁLDAR & AL GOLPITO - Quevedo ft. Tonny Tun Tun, Nueva Línea (Official Video) | EL BAIFO — Quevedo
Open Till L8 - More Than Friends (Official Music Video) — Open Till L8
Gravagerz - We R Who We R (OFFICIAL LYRICS VIDEO) — Gravagerz
No More Sorries — Kid Kobe
Ian Asher & Olly Alexander (Years & Years) - Desire (Official Audio) — Ian Asher
Marnik x Naeleck - Boyz in Paris (with VINAI) (Official Video) — MARNIK
SFDK - presenta a ACCION SANCHEZ en FLOW DEL 15 con CAPAZ — Boa Música Urbana
GRECAS - Bad Voy (Escrito en la M-30) — GRECAS
VIDA GRIMEY 2 - SWAN FYAHBWOY, MORENO, DARMO, CHULITO CAMACHO, IVAN NIETO,CARMONA — GRIMEY MUSIC
-VIDA GRIMEY- Swan Fyahbwoy, Chulito Camacho, Darmo, Ivan Nieto, Carmona, Moreno — GRIMEY MUSIC
COSTA - Feat. NATOS Y WAOR - DEMONIOS Y BARES DE VIEJOS (OFFICIAL MUSIC VIDEO) — GRIMEY MUSIC
AYAX - EL CIRCO (PROD BLASFEM) | VIDEOCLIP — AYAX Y PROK
Ryan Castro, SOG - EL RITMO QUE NOS UNE (Letra/Lyrics) — jostland.
DIEGOTE - TU SILUETA (Vídeo Oficial) — Diegote
C. Tangana, NATHY PELUSO - Ateo (Video Oficial) — C. Tangana
Gnarls Barkley - Crazy (Official Video) [4K Remaster] — Gnarls Barkley Official
Imagine Dragons - Believer (Official Music Video) — ImagineDragons
Meghan Trainor - All About That Bass (Official Video) — Meghan Trainor
Clean Bandit - Rockabye (feat. Sean Paul & Anne-Marie) [Official Video] — Clean Bandit
Rihanna, Kanye West, Paul McCartney - FourFiveSeconds — Rihanna
Ed Sheeran & Justin Bieber - I Don't Care [Official Music Video] — Ed Sheeran
Bruno Mars - Gorilla (Official Music Video) — Bruno Mars
Mike Morato & kMx - Mambo HP (Mashup) — Mike Morato
Manu Chao – Me Gustas Tú (Letra) — Stay Retro
Alejandro Sanz, Shakira - Bésame (Video Oficial) — Alejandro Sanz
KAROL G, Peso Pluma - QLONA (Official Video) | Jet 41 — Jet 41
Trueno, Randy, Bizarrap - JUNGLE (Video Oficial) — Trueno
Aitana - LAS BABYS (vídeo oficial) — Aitana
ROSALÍA - DESPECHÁ (Official Video) — ROSALÍA
KAROL G - Si Antes Te Hubiera Conocido | Coke Studio — KAROL G
W Sound 05 "LA PLENA" - Beéle, Westcol, Ovy On The Drums — W Sound
ALBERTO GAMBINO - LO QUE TÚ ME DAS — Alberto Gambino
El Taiger x El Happy x Dj Conds - Habla Matador — El Taiger y Dj Conds
Adrián González - La Novela — AdrianGonzalezVEVO
BOVSKI - LOL — BOVSKI
BOVSKI & Sam Harper - Secret Code — BOVSKI
We have a release date - missyelliot rave trance remix hardbounce boilerroom gotec — BOVSKI
KAZE - LA LLORADITA // LA LLORADITA_REMIX — KAZE
PROK - FRESAS CON NATA (PROD. DJ KERU) — AYAX Y PROK
Natos y Waor - CAMARÓN (Videoclip Oficial) — Natos y Waor
BUBATRONIK_BRM RADIO ON AIR ! — BRM_BUBATRONIK_DRDB_DEVBU_BUBA
Lauryn Hill Blues Project – Street Soul Sessions | Neo Soul Hip Hop & Emotional (Inspired Tribute) — THUG ARCHIVES 90s
Becky G - PATRONA (Official Video) — Becky G
CUICA - Ptazeta X Quevedo (Official Video) — PtaZeta
PAM - Justin Quiles DaddyYankee ElAlfaElJefeTV (Video Oficial) — Justin Quiles
KAZE - RELAJATEEE — KAZE
Akapellah - Akapelinho (Prod. NeoBeats)(Official Video) — Akapellah
KAZE - COMPOSTELA 12 FT SHODA MONKAS — KAZE
Major Lazer - pAPi wiTH tOKisCha (Official Video) — Major Lazer Official
Snow Tha Product || BZRP Music Sessions #39/66 — Bizarrap
MYKE TOWERS || BZRP Music Sessions #42/66 — Bizarrap
Shallipopi, Rauw Alejandro - Laho III (Lyric Video) — Shallipopi
Burna Boy - NO STRESS [ Official music video] — Afro Nova
Dj Pimp & Bejo - TUTTI FRUTTI (Videoclip Oficial) — Dj Pimp
El Chojin ft. ZPU - Guapa (Video Oficial) — El Chojin
Kybba, Ryan Castro, Bad Gyal & TopBoy - SE LE VE (Video Oficial) — Kybba y 2 más
RAP CONTRA EL RACISMO — El Chojin
SFDK - Agua Pasá ft. Kaze (Video Oficial) — Sfdk Oficial
Myke Towers - Lala (Video Oficial) — Myke Towers
W Sound 09 "GODZILA" - J balvin, Westcol, Ovy On The Drums — W Sound
Kapo, Don Omar - LA PELIGROSA (Video Oficial) | Lyric — Central Music
Nach, Nanpa Básico - Todo Irá Bien (Video Oficial) — Nach
JUSEPH X CRUZ CAFUNÉ | MUCHOPERRO (Video Oficial) — Juseph
Cimafunk, Wampi - La Pomada (Official Music Video) — Cimafunk
Gonzy, Oliver Kid - LA CALMA (Official Video) — Gonzy
Gonzy, Maldy - PA QUE BAILE — Gonzy y MALDY
Blasterjaxx - Arriba — Blasterjaxx y Maxximize Records
Baby Dance - Scooby Doo Pa Pa (Music Video 4k HD) — Release Music Group
Funky Baby Dance - Ram Pam Pam Pam (Music Video 4k HD) — Vik4S
Gigi D'Agostino Bla Bla Bla — zyxdance
EL MOMO FT. KASE.O - LA ÚLTIMA RONDA (Prod. Bombony Montana) — El Momo
PASA - La Excepción ❌ SFDK (Video Oficial) — Langui y Sfdk Oficial
HARD GZ X FERNANDOCOSTA - ROLAS (PROD. NOISESYSTEM) — HARD GZ
Evaluna Montaner - Me Liberé (Official Video) — Evaluna Montaner
Martin Solveig - Everybody — Martin Solveig
L-Gante X DT.Bilardo - MALIANTEO 420 (Volumen 2) - Cumbia 420 — L-Gante
Gorillaz - Feel Good Inc. (Official Video) — Gorillaz
Mindflip - Run My Shit (Official Audio) — Mindflip
Naâman - Outta Road (Clip Officiel) — Naâman Official
Formula Six, Elvis Crespo, Miky Woodz - A Lo Mexicana (Official Music Video) — Formula Six y 2 más
Nelly Furtado - Say It Right (Official Music Video) — Nelly Furtado
YAILIN LA MAS VIRAL X JEY ONE X ALOFOKE MUSIC - VAI — AlofokeMusicSounds
Yolanda Be Cool & DCUP - We No Speak Americano (Official Video) — Sweat It Out
David Guetta & Chris Willis Feat. Fergie & LMFAO - Gettin' Over You (Official Video) — David Guetta
RUN DMC, Jason Nevins - It's Like That (Official HD Video) — Run DMC
BENNETT - Seelenf*cker (Official Lyric Video) — BENNETT
Jet - Are You Gonna Be My Girl (Official Music Video) — Jet
SHAOLIN MONKEY & C.TERRIBLE - Another Battle (Prod. 1010!) — Shaolin Monkey y Socio Ejecutor
Sofia Reyes x Darell x Lalo Ebratt - Échalo Pa' Ca [Official Music Video] — Sofia Reyes
Natti Natasha x Farina x Cazzu x La Duraca - Las Nenas [Official Video] — NATTI NATASHA
Spice Girls - Wannabe (Official Music Video) — Spice Girls
Seeed - Ding (official Video) — Seeed
The Chemical Brothers - Go (Official Music Video) ft. Q-Tip — The Chemical Brothers
Hamburguesa. — One-T Music
Skrillex & YoungMiko DURO ( Oficial Video ) /DjCaszperRemix — SantixGraphics
Jarina De Marco - Spell On You — Jarina De Marco
PALO - Babylon Boy (Video Oficial) — PALO
Blackstreet - No Diggity (Official Music Video) ft. Dr. Dre, Queen Pen — Blackstreet
mgk & Wiz Khalifa - girl next door (Official Music Video) — mgk y Wiz Khalifa
Kobo Town - One By One (Official Video) — Kobo Town
Pitbull x Lil Jon - Satalanaaa (Party On The Island) — Pitbull y LIL JON
Jessie Reyez, Boi-1da, Soccer Canada - I DARE YOU (TASTY) (Official Video) — Jessie Reyez
Seeed - Augenbling (official Video) — Seeed
Rumba a los 50 años — Soyimparr - Topic
AZEALIA BANKS - 212 FT. LAZY JAY — Azealia Banks
Anastacia - I'm Outta Love (Official 4K Video) — Anastacia
Mis-Teeq - Scandalous (Official Video) — Alesha Dixon
The Chemical Brothers - Galvanize — The Chemical Brothers
LunchMoney Lewis - Bills (Official Video) — LunchMoney Lewis
Tinashe - Too Easy (Official Music Video) — Tinashe
Lilly Wood and The Prick - Prayer in C (Robin Schulz Remix) [Official Video] — Lilly Wood & The Prick
Ofenbach - Be Mine (Official Video) — Ofenbach
BENNETT - Vois sur ton chemin - DJ Holanda MONTAGEM CORAL Remix (Official Audio Video) — BENNETT
Campbell x Alcemist - Would You (go to bed with me?) - Official Video — Campbell
TRINIX x ANGÈLE - Moi… Lolita (Remix) — TRINIX
Jain - Come (Official Video) — JAIN
Lucky Luke - Cooler Than Me (Official Video) — Lithuania HQ
Kungs - Never Going Home (clip officiel) — Kungs
Pham - Movements (feat. Yung Fusion) — CloudKid
Eminem - Shake That (Official Music Video) ft. Nate Dogg — EminemMusic
Nas - I Can (Official HD Video) — Nas
Snoop Dogg - Little Square UBitchU (feat. Anitta) (Audio) — SnoopDoggTV
Major Lazer - Get Free ft. Amber of the Dirty Projectors — Major Lazer Official
The Avener, Phoebe Killdeer - Fade Out Lines (Official Music Video) — The Avener
Paul Kalkbrenner x Stromae - QUE CE SOIT CLAIR (Official Video) — Paul Kalkbrenner y Stromae
Ofenbach vs. Nick Waterhouse - Katchi (Official Video) — Ofenbach
Fedde Le Grand ft Ida Corr - Let Me Think About It [Official Music Video] — Fedde Le Grand
Kelis - Trick Me — iamkelis
Asaf Avidan, The Mojos - One Day / Reckoning Song (Videoclip Day Version) — Wankelmut Official
The Prince Karma - Later Bitches (Official Lyrics Video) — Happy Music
Purple Disco Machine - Devil In Me (feat. Joe Killington & Duane Harden) (Official Video) — Sweat It Out
Mr. Belt & Wezol - It's Not Right (But It's Ok) Lyrics — We Are Hypnotized
THE PRODIGY - BREATHE (THE STICKMEN PROJECT REMIX) — The Stickmen Project
Andruss - Frikitona — blanc
Best Tomorrowland 2026 🔥 Massano, Colyn, Korolova, CamelPhat | LIVE 90MIN — Festival Vibes Only
Losing My Religion (metal cover by Leo Moracchioli) — Frog Leap Studios
Cotton Eye Joe (metal cover by Leo Moracchioli) — Frog Leap Studios
Gangnam Style (metal cover by Leo Moracchioli) — Frog Leap Studios
The Rumjacks - An Irish Pub Song (Official Music Video) — The Rumjacks
Lemaitre - Closer (UK Version) ft. Jennie A. — LemaitreMusic
ATIKA PATUM - Atikapatum (Official Music Video) — ATIKA PATUM
System Of A Down - Chop Suey! (Official HD Video) — System Of A Down
Estopa - Como Camaron (Videoclip) — Estopa
Sweet Dreams + White Stripes Mashup | Pomplamoose ft. Sarah Dugas — PomplamooseMusic
Vigiland - Shots & Squats ft. Tham Sway — Vigilandrecords
Nina Simone, SOFI TUKKER - Sinnerman (Sofi Tukker Remix) [Animated Video] — Nina Simone
Jain - Makeba (Official Video) — JAIN
The Magic Key (Episode 3) — One-T Music
Fall Out Boy - Beat It (MTV Version) (Official Music Video) ft. John Mayer — Fall Out Boy
Dance Monkey (metal cover by Leo Moracchioli feat. Rabea & Hannah) — Frog Leap Studios
Estopa, Fito y Fitipaldis - Camiseta de Rokanrol (Video Oficial) — Estopa
MARLENA - Me sabe mal (videoclip oficial) — MARLENA
Bakermat - Ain't Nobody (feat. LaShun Pace) (Official Video) — Bakermat
Day 'n' Nite — Kid Cudi
Halsey - You should be sad — Halsey
Yo Quiero un Sound - Nathy Peluso feat. River Stone Sound — NATHY PELUSO
Justin Quiles, robinschulz - AEIOU (Video Oficial) — Justin Quiles
NOVEMBER KID - you're the only place i need (Official Music Video) — NOVEMBER KID
AL GOLPITO - Quevedo ft. Nueva Línea (Visualizer) | EL BAIFO — Quevedo
LA GRACIOSA - Quevedo ft. Elvis Crespo (Official Video) | EL BAIFO — Quevedo
Mujeres (Remix) - Mozart La Para, Justin Quiles, Farruko, Jowell y Randy (Video Oficial) — MozartLaPara
El Taiger ft Chacal - Papelito ( remix ) ( Video Oficial ) — El Taiger
Black Eyed Peas, Piso 21 - TODO BUENO (Audio) — Black Eyed Peas
Fuego, Manuel Turizo, Duki - Una Vaina Loca [Video Oficial] — Fuego
Arcangel, Bad Bunny - La Jumpa (Video Oficial) | SR. SANTOS — Arcangel
Dollar Selmouni & SFDK - CALLE — DOLLAR SELMOUNI
Lola Indigo, Rauw Alejandro, Lalo Ebratt - 4 besos — Lola Indigo
Chanel & Abraham Mateo - Clavaito (Amazon Music Performance) — Chanel Official
Si Esta Casa Hablara - Joel Santos Official — Joel Santos Official
Chayanne - Bailando Bachata (Official Video) — Chayanne
Doechii - What It Is (Block Boy) feat. Kodak Black [Official Video] — Doechii
LADY LESHURR FT LIONESS - WAY 2 REAL — Lady Leshurr
Lady Leshurr - #UNLESHED 4 — Lady Leshurr
Lady Leshurr - 3AM In Brum — Lady Leshurr
Lady Leshurr - NOT GUILTY — Lady Leshurr
KINGTANA - "MEMENTO MORI" (Videoclip) — KINGTANA
KINGTANA - CLASE C — KINGTANA
FYAHBWOY ❌ OTO BEATS - QUE CADA PUTO DÍA SEA SÁBADO — FYAHBWOY OFFICIAL y OTO Beats
KINGTANA - MI MÚSICA NO ES UN PRODUCTO SOLO SENTIMIENTO — KINGTANA
MAYO - ECO (VIDEOCLIP)[VENENO] — Mayo 214 Madrid
KAZE - NO SOY TUYO — KAZE
BLAKE - EL DIARIO DEL LOCO (PROD. KANDAS) #ELDIARIODELOCO — BLAKE
MAYO - INCORREGIBLE (VIDEOCLIP)[CICATRICES] — Mayo 214 Madrid
FERNANDOCOSTA Ft ANTONY Z - CANDELA (Video Oficial) — FERNANDOCOSTA
KINGTANA - MENTIS ET CORDIS — KINGTANA
FYAHBWOY Feat SUKU (WARD21) - LUV DEM TING - OFFICIAL VIDEO HD — FYAHBWOY OFFICIAL
MAYO - MI CRUCIFIXIÓN (#FAMILIA) [Videoclip oficial] — Mayo 214 Madrid
KINGTANA - " VENI, VIDI, VICI " (Videoclip) — KINGTANA
CYPHER VOL6 PURE NEGGA SFDK FYAHBWOY CHUSTERFIELD KING MAGNETO LITTLE PEPE LEGENDARIO MISTAH GODEH — PURE NEGGA y OTO Beats
AYAX Y PROK, FOYONE, FERNANDOCOSTA - TOTAL 90 - (PROD BLASFEM, SCENO) VIDEOCLIP #JUGLARDELSIGLOXXI — AYAX Y PROK
RICKHO - ALLER À L'ÉCOLE (OFFICIAL MUSIC VIDEO) — Rickho
FERNANDOCOSTA - MAMAHUEVO (Videoclip Oficial) — FERNANDOCOSTA
Dollar Selmouni & Lucas Otero - Colocón — DOLLAR SELMOUNI
KAZE - CÁLMATE - VIDEOCLIP [PROD. DJ FIGU] — KAZE
SOFIA GABANNA & HARD GZ- VIVIMOS DEPRISA (PROD. LUPITA´S FRIENDS) — Sofia Gabanna
NADAL 015 x FERNANDOCOSTA - SOY UN C4BRON (PROD.BLASFEM) — NADAL 015
Natos y Waor - KARMA ft. Cheb Rubën [Barras Bravas Vol.4] — Natos y Waor
Natos y Waor - LÁGRIMAS NEGRAS (Letra) [Martes 13] — Natos y Waor
FERNANDOCOSTA - PREFIERO ESTAR SOLO (Visualizer) — FERNANDOCOSTA
MAYO - ALEJANDRO (VIDEOCLIP) — Mayo 214 Madrid
Natos, Waor, Recycled J - NOSOTROS (Videoclip oficial) [Hijos de la Ruina Vol. 3] — Natos y Waor
BOOM BOOM CLAP - NIKONE (OFICIAL VIDEOCLIP) — NIKONE EPK
BLAKE - IDEALES [VIDEOCLIP OFICIAL] PROD. ZAIDBREAK — BLAKE
FERNANDOCOSTA - NARCOLEPSIA (PROD. CHICHOBEATS) — FERNANDOCOSTA
Natos, Waor, Recycled J - MÁS ALCOHOL (Videoclip oficial) [Hijos de la Ruina Vol. 3] — Natos y Waor
Natos y Waor - UNDERGROUND KINGS (Videoclip Oficial) [Cicatrices] — Natos y Waor
FERNANDOCOSTA FT DOLLAR - PA QUE LO GOCEN (PROD BLASFEM) | VIDEOCLIP — FERNANDOCOSTA
SFDK & Natos y Waor - Sin-Ceros — Sfdk Oficial
C. Tangana, Ed Maverick - Párteme La Cara — C. Tangana
Lia Kali - Cantaré | GALLERY SESSION — Gallery Sessions
Guitarricadelafuente - BABIECA! (Video Oficial) — Guitarricadelafuente
Calle 13 - La Perla (Long Version) ft. Rubén Blades, La Chilinga — elvecindariocalle13
C. Tangana, Kiko Veneno - Los Tontos — C. Tangana
C. Tangana, Paloma Mami - No Te Debí Besar (Video Oficial) — C. Tangana
BAD BUNNY x JHAY CORTEZ - DÁKITI (Video Oficial) — Bad Bunny
C. Tangana, Darell - Pronto Llegará (Video Oficial) — C. Tangana
C. Tangana - Antes de morirme feat. Rosalía (Video Oficial) — AgzTv
C. Tangana, Andrés Calamaro - Hong Kong (Video Oficial) — C. Tangana
C. Tangana, Niño de Elche - Un Veneno (Video Oficial) — C. Tangana
C. Tangana, Gipsy Kings, Nicolas Reyes, Tonino Baliardo - Ingobernable — C. Tangana
C. Tangana, Carín León, Adriel Favela - CAMBIA! — C. Tangana
C. Tangana - Demasiadas Mujeres (Video Oficial) — C. Tangana
VERDAD O NADA | Rap Flamenco Callejero 🔥 Superación, Caídas y Realidad — 𝑀𝐴𝑋𝐼 & 𝑅𝑂𝑆𝐸
【70s Funk Hip Hop】198 Classic Funk × Modern Hip Hop Fusion | Funk Tribe Underground — Funk Tribe Underground
Lauryn Hill Blues Project – Soul Revolution Sessions | Neo Soul Hip Hop Experience(Inspired Tribute) — THUG ARCHIVES 90s
Sebastián Yatra, ELENA ROSE - Quererte Bonito (Official Video) — Sebastián Yatra
Nanpa Básico - Aprendí (Official Video) — Nanpa Basico Oficial
Nanpa Básico, Beéle - Hasta Aquí Llegué (Official Video) — Nanpa Basico Oficial
Los Lobos - La Bamba | Afro House Remix — Afro Diva
SHAKIRA - WAKA WAKA ( TOP afro house remix ) afro cover music l TRIBAL BASS NATION — Tribal Bass Nation
LAS KETCHUP - ASEREJE | Best Jazzy Afro House Remix | - Afro Groove - — AFRO GROOVE
MACARENA - Los Del Rio (Afro House Remix) | AFRO DIVA — Afro Diva
Busca Lo Más Vital - El Libro de la Selva (Cover Afro House Remix) | Jungle Vibes 2026 — Ritmo Covers
Cristian ¡¡ Cristian¡¡ PARODIA DOBLAJE DE ANIMALES — PTP elinHP
QUE ANIMALES! (doblaje) — NANDOXTREMEJACKAS
Tito "El Bambino" ❌ Farruko - Temporal (Official Video) — Tito "El Bambino" y Farruko
Marshmello, Farruko - Esta Vida (Official Video) — Marshmello y Farruko
KAZE - LO MÍO [MARBELLA 3] — KAZE
KAZE - RECORD — KAZE
KAZE - CÓMETE MI ÉXITO (FT SHODA MONKAS) — KAZE
Nadie esperaba esta mezcla… Kisiera Yo Saber x Vino Tinto (Melendi vs Estopa Mashup) — Iván Concha
elbarriocantautor5120 Angel Malherido TECHNO REMIX by DaniDjStk — Dani Dj
No Es Excusa — EuroBloke | Rap Flamenco Vol.3 — EuroBloke
De dónde salió - Funzo & Baby Loud (Video Oficial) — Funzo y 2 más
Veyrus - Soy Lo Que Soy — Veyrus La Amenaza Oficial
Ya No Me Importa Lo Que Digan de Mí (Official Lyric Video) | Mateo León — Mateo León - Soul & Blues
Romeo Santos, ROSALÍA - El Pañuelo | Bachata Dance | Magda & Valeria — Magda & Valeria
Pitbull, farruko, iamchino, ElAlfaElJefeTV x OmarCourtz - Ten (Music Video) — Pitbull
Baby Dance - Scooby Doo Pa Pa (Music Video 4k HD) — Vik4S
Gabry Ponte, Vicco - Viento — Gabry Ponte
BENNETT - Lullaby (Official Music Video) — BENNETT
Gabry Ponte - Exotica (Official Visualizer) — Gabry Ponte
Fantomel x KateLinnOfficial - Dame Un Grrr (Official Video) — Fantomel
Mawell - La Triple M (Video Oficial) — Mawell Oficial y LAUM MUSIC
El Taiger - La Cura ( Video Oficial ) — El Taiger
El Taiger x Dj Conds - La Historia (Audio Oficial) — El Taiger y Dj Conds
Ahora Y Siempre - Quevedo | Deep House REMIX Fabi Boss — Fabi Boss
Beéle, Westcol, Ovy on the Drums - La Plena (Gabriele D'Eramo Remix) [House] — SAMOGON RECORDS
BAD BUNNY - nOCHE rICA (feat. J BALVIN) [Music Video] — MUSICA DE LIBERTAD
Punto Parlante N°19 | TORNALL — Punto Parlante Radio y TORNALL
Rauw Alejandro - Déjame Entrar (Official Video) — Rauw Alejandro
Rauw Alejandro - Cosa Nuestra (Official Lyric Video) — Rauw Alejandro
Rauw Alejandro - Dando Vueltas (Official Video) — Rauw Alejandro
RAUW ALEJANDRO || BZRP Music Sessions #56/66 — Bizarrap
YOUNG MIKO || BZRP Music Sessions #58/66 — Bizarrap
QUEVEDO || BZRP Music Sessions #52/66 — Bizarrap
Bad Bunny - WHERE SHE GOES (Video Oficial) — Bad Bunny
ARCANGEL || BZRP Music Sessions #54/66 — Bizarrap
Ella Baila Sola - (Video Oficial) - Eslabon Armado y Peso Pluma - DEL Records 2023 — DEL Records
PESO PLUMA - BZRP( Music Sessions #55 ) — Letra Hall
B.o.B - Nothin' On You (feat. Bruno Mars) [Official Video] — B.o.B
The Black Eyed Peas - Don't Phunk With My Heart — Black Eyed Peas
Gwen Stefani - Hollaback Girl (Official Music Video) — Gwen Stefani
The Black Eyed Peas - Pump It (Official Music Video) — Black Eyed Peas
Chris Brown - Gimme That Remix (Official HD Video) ft. Lil Wayne — Chris Brown
Chris Brown - Kiss Kiss (Feat. T-Pain) (Official HD Video) ft. T-Pain — Chris Brown
Ne-Yo - Mad [Official Video] — NE-YO
Ne-Yo - Closer [Official Video] — NE-YO
Ne-Yo - So Sick [Official Video] — NE-YO
Ne-Yo - One In A Million [Official Video] — NE-YO
Ozuna, David Guetta - Vocation (Visualizer Oficial) | COSMO — Ozuna
Bomba Estéreo, Rawayana, ASTROPICAL - Me Pasa (Piscis) (Official Video) — Bomba Estéreo
MHD || BZRP Music Sessions #44/66 — Bizarrap
PROK - SALGO PA LA CALLE (PROD BLASFEM) VIDEOCLIP — AYAX Y PROK
Boza, Beéle - Qué Prefieres? (Official Video) — Boza Oficial
Jhayco - Dile (Homenaje) (Audio) — JHAYCO
Maluma - Peligrosa (Official Video) — Maluma
RAPSUSKLEI X LITTLE PEPE - CANDELA (Prod A. Sanchez) — Rapsusklei
C. Tangana, NATTI NATASHA - Viene y Va (Video Oficial) — C. Tangana
Beéle - LA PLENA 2 🌊 (Official Video) | 2026 — WestEX
Beéle, Quevedo - Casi Algo (Video Oficial) | Lyric — FuegoVibe Music
Bruno Mars - Just The Way You Are (Official Music Video) — Bruno Mars
Fergie - Big Girls Don't Cry (Personal) (Official Music Video) — Fergie
Rihanna - Hate That I Love You ft. Ne-Yo — Rihanna
Loud Luxury - Sex Like Me — Selected.
MAGIC! - Rude (Official Video) — MAGIC!
Lady Leshurr - #UNLESHED (Panda Freestyle) — Lady Leshurr
So Sick vs Afrobeat Hits Part 2 (DJ R-LO Mashup Official) — R-LO
Ne-Yo - Miss Independent [Official Video] — NE-YO
Justin Bieber - Yukon (MH 00s Mario Edit) — Mike Harding Music
Mario - Let Me Love You (DubRocca Remix) — Selected.
Stromae - Te Quiero - Paul Kalkbrenner Remix (Live Version) | Cercle Odyssey — Cercle
JP Cooper - Call My Name (Gospel / Live) — JP Cooper
Alex Warren - Carry You Home (Official Wedding Video) — Alex Warren
ROSALÍA - TUYA (Official Video) — ROSALÍA
Cierra Ramirez - Faded (Official Video) ft. Baeza — Cierra Ramirez
David Guetta ft Justin Bieber - 2U - Choreography by Jojo Gomez & Donovan Okimura — Tim Milgram
False Confidence - Noah Kahan l Choreography by Sean Lew l Sean & Kaycee — Sean Lew
DUB FX & WOODNOTE | COME AGAIN | FEAT. PREZENCE — Dub FX y Prezence Music
Feel Good Inc. (metal cover by Leo Moracchioli) — Frog Leap Studios
Paul Kalkbrenner feat. Norma Jean Martine – Time To Dance (Official Video) — Paul Kalkbrenner
mamacita energy latina vibes playlist — Reina del Sol
SOUNDYXI – Congratulations | Club Banger Music Playlist MIX (Visualizer) — SOUNDYXI
The Big Push - Mambo No. 5 (Lou Bega Cover) — The Big Push
Farruko, Greeicy, Steve Aoki - YAPAQUE (Official Video) — Farruko y 2 más
Farruko Ft. Bad Bunny & Lary Over - Diabla (Remix) [Lyric Video] — Farruko
Farruko & Miky Woodz - Canam (Official Video) — Farruko
Xavi, Kapo – Bien Pedos (Official Video) — Xavi Oficial
Boza, Sech - Paris (Official Video) — Boza Oficial
Darell, Farruko - Caliente (LETRA) — RadioReggaeton
WIB3X - Diablo — WIB3X Official
Doechii - Anxiety (Dj Dark Remix) — Dj Dark
ELEXSANDOM x Grummel - Papasito (Official Visualizer) — Elexsandom
DISHYPE, 19Clouds, Kairy - NOARA (Official Video) — DISHYPE
Rap MASTERS Who Left It All On The Stage! — Mic Drop!
Boza, Beéle - Hasta Abajo (Official Video) — Boza Oficial y Beéle
TRFN - U DO (ft. Siadou) — TRFN
Paradise — TRFN
Rumor — TRFN
Aloha - Maluma X Beéle x Rauw Alejandro x Darell x Dj Luian & Mambo Kingz (Official Video) — Hear This Music
Lady Leshurr - New Freezer — Lady Leshurr
Lady Leshurr - Juice (Official Video) — Lady Leshurr
Dj Battle Ft. Lexy Panterra - Twerk Lesson [4K] — Djbattle
The Mask | Stanley Charms The Police | ClipZone: Comedy Callbacks — ClipZone: Comedy Callbacks
Don't Let the Man Get You Down! | School Of Rock — NOW COMEDY
Lesson In Rock | School Of Rock — NOW PLAYING
Mario - Skippin' — YeahRightWalk
MOOSE'S MOST ICONIC DANCE SCENES IN THE STEP UP MOVIE SERIES *IN ORDER* (played by Adam Sevani) — hazy
EL VIDEO QUE TODO DJ DEBERIA VER (movie scene: We are your friends) — ColaCuerno Entertainment
Gente De Zona - Se Le Pasa — Gente De Zona
TRFN x Noro - 1, 2 Step — TRFN
KALEO - Way Down We Go (Bandit Remix) — LivingBandit
Don Diablo - The Way I Are | Official Visualizer — Don Diablo
Avicii - Seek Bromance (Gravagerz REMIX) — Gravagerz
Mafia Flowz - Max Level [GANGSTER TRAP] — MAFIA FLOWZ
Ahora Y Siempre - Quevedo (Fan Remix) — Thefox 137
MINA | Hip Hop, R&B, Afrobeats, Classics + | ft. Binks | San Diego, CA — Noise Complaints
BABY GANG ❌ OMEGA - Tu Me Quieres (Prod. by Higashi ❌ Roberto Ferrante) — Baby Gang
Al2 El Aldeano - Pésima Conducta (con LETRA) — AL2 "El Aldeano"
BEJO, KASE.O & IGNATIUS FARRAY - Invirtiendo en la pérdida — B E J O
DOLLAR SELMOUNI | SELECTA Motorseries #09 — Selecta
Lenier - Como Te Pago (Official Video) — Lenier
Nanpa Básico - Como Baja Sube (Visualizer) — Nanpa Basico Oficial
Alleh & Yorghaki - una noche (Letra) — Glim Latin
Feid, Rema - Bubalu (Official Video) — Feid
RVFV, Kikimoteleba - TIGINI REMIX (Video Oficial) — RVFV
Beéle - top diesel (Performance/Lyrics) — Beéle
Ryan Castro, Blaiz Fayah & Tribal Kush - BOMBASTIK (Video Oficial) — Ryan Castro
OE OE - Farruko, Louisbpm (Official Music Video) — Farruko
Nanpa Básico, Camilo - EAVEMARÍA (Versión Acústica) — Nanpa Basico Oficial
J Balvin – PQBL (Official Video) — J Balvin
LIA KALI - Alzo el vuelo (Video Oficial) prod. Toni Anzis — Lia Kali
Maluma, J Balvin - Gafas Negras (Official Video) — Maluma
Maluma - Mama Tetema (Official Video) ft. Rayvanny — Maluma
Farruko, Kafu Banton, El Roockie - GODMAN (Official Music Video) — Farruko
J Balvin, Omega - KLK (Official Video) — J Balvin
BLAKE - BRO BRO BRO (PROD. KANDAS) — BLAKE
X TI - Kapo x Feid (Video Oficial) — Kapo
HARD GZ - FLACO (Prod. Toni Anzis) — HARD GZ
Antony Z - UN PIKETON (Video Oficial) — ANTONY Z
Lia Kali, Toni Anzis - En La Cuerda Floja (Video Oficial) — Lia Kali
Queralt Lahoz, Lia Kali - BRINDO X LOS MIOS (Prod. Toni Anzis) — QUERALT LAHOZ
Dollar Selmouni - SALVAJE — DOLLAR SELMOUNI
TRIFUNOX - Dale Dale (HIT CLUB MIX) — DJ Trivux y TRIFUNOX
Hector Lavoe - Juanito Alimaña Afro House · Oscar Combo x Saavedra — OSCAR COMBO y SAAVEDRA
BUBATRONIK_BRM_RADIO_ONAIR! — Bubatronik
Tita Lau LIVE @ Get Closer, Miami, USA, Tech House / House — Tita Lau
Ryan Castro, Kybba - SENDÉ (Live Session) [Medellin, Comuna 13] — Ryan Castro
Gonzy - AUNQUE ME DUELA (Visualizer) (Official) — Gonzy
Gonzy - MAL AMIGA (Official) — Gonzy
GONZY - 10DE10 (Official Video) — Gonzy
Kybba, Ryan Castro, Sean Paul & Busy Signal - BA BA BAD REMIX (Video Oficial) — Ryan Castro y Kybba
Lorna - Papi Chulo (Joe Rok Afro House Remix) — AFRODIC
Danny Ocean - Babylona (Official Music Video) — Danny Ocean
Beéle - mad koknut (Performance/Lyrics) — Beéle
BELLAKEO (Video Oficial) - Peso Pluma, Anitta — Peso Pluma
Loco - Beéle [VIDEO OFICIAL] — Hear This Music
Boza, ELENA ROSE - orióN (Official Video) — Boza Oficial
Alleh & Yorghaki - una noche (visualizer) — Alleh
ELENA ROSE & Justin Quiles - COSITA LINDA — ELENA ROSE
W Sound, Beéle, Westcol, Ovy On The Drums - La Plena (Lyric Video) | CantoYo — CantoYo Video Lyrics
Prompto - OOWEE! — Prompto
Armin van Buuren feat. Lucky Lou - Sweet Escape (Official Lyric Video) — Armin van Buuren
Pedroz - NOT AFRAID (Extended Mix) — Myth of NYX
Lupage x Joe Kox - Poker Face | Car Music — Niza
STIM - accord (Official Lyric Video) — STIM
Swae Lee, NAV - NO CALL NO SHOW (Visualizer) — Swae Lee
Apashe - Human (ft. Wasiu) — Apashe
Party Favor - Wasabi (feat. Salvatore Ganacci) [Official Full Stream] — partyfavor
HEDEGAARD X Sanjin - badboysound (Official Audio) — Spinnin' Records
Timmy Trumpet, Vion Konger - Safe and Sound (Visualiser) — Smash The House
Cosmic Gate – Exploration Of Space (Bass Surrender Rework) — Bass Surrender Official
Disturbed - The Sound Of Silence (CYRIL Remix) [Official Audio] — Spinnin' Records y CYRIL
Discotronic - Tricky Disco (Medieval) — BLXODMXON
FOVOS - Freak In Me — FOVOS
Martin Garrix, R3HAB & Skytech - Voodoo — bassTap
Gabry Ponte X Blasterjaxx X 1 World - Now We Are Free [THOMM Remix] — Blasterjaxx y THOMM
Don't Stop The Music (with Shuhandz) — Shuhandz
Vini Vici, Timmy Trumpet, Niklas Dee - Party So Hard (Visualizer) — Smash The House
Tiësto, Dimitri Vegas & Like Mike and Gabry Ponte - Mockingbird (Medieval Festival Remix) — BLXODMXON
RESIDENTE || BZRP Music Sessions #49/66 — Bizarrap
Seeko, New Beat Order, Anika & KROMA - Numb (Lyric Video)[Techno] — Future House Cloud
GET PUMPED (Eminem x 50 Cent x D12 Type Beat) — Trunxks Beatz
Maddix - Favela — Maddix
Lost Kings - RIGHT NOW — Lost Kings
Netta - Toy (Lukas G Remix) — Lukas G
No More Blah Blah — Vesanic - Topic
ero808 x NXSTY - CODEINE (Official Music Video) — ero808
Young Franco - Juice [Official Audio] ft. Pell — Young Franco
SOUNDYXI – Mmm... | Club Kpop Music (Visualizer) — SOUNDYXI
FiveStacks - In My Head (BASS BOOSTED) — MaxFiveBass
SOUNDYXI – Vroom-Vroom | Club Banger Song (Visualizer) — SOUNDYXI
SOUNDYXI – Survival | Trap Music (Visualizer) — SOUNDYXI
SÓ PRESSÃO (Extended) — SUKA.
Hot and Cold — TRFN
SOUNDYXI – Hula Hula (Club Banger| Music) (SOUNDYXI Official Music Video) — SOUNDYXI
SOUNDYXI – Congratulations | Club Banger Music (Visualizer) — SOUNDYXI
SOUNDYXI – Spin Me | Club Banger (Visualizer) — SOUNDYXI
Zak Abel - Unstable | Sofar London — Sofar Sounds
NOVEMBER KID - disfruto — NOVEMBER KID
Baiana (CloZee Remix) — CloZee
MEUTE - You & Me (Flume Remix) — MEUTE
Matisyahu - One Day - Spinner (HD) — usbzoso
City of the Sun - W.16th St. | Sofar Washington D.C. — Sofar Sounds
The Big Push - I Shot the Sheriff/Road to Zion/Hip Hop — The Big Push
La Sra. Tomasa - Se Formó ft Rapsusklei (Videoclip Oficial) — La Sra. Tomasa
Tacabro - Tacata (TCM Hardstyle Bootleg) | HQ Videoclip — HardstyleUp2Datez
Empire Of The Sun, southstar - We Are The People (southstar Remix) Official Visualizer — Southstar
Give it to Me (TikTok Trending Remix) — Sinny
Dimitri Vegas & Like Mike vs Armin van Buuren & W&W - Repeat After Me (Official Music Video) — Dimitri Vegas & Like Mike
Dimitri Vegas & Like Mike & Timmy Trumpet & Sub Zero Project - Move Your Body (Official Music Video) — Dimitri Vegas & Like Mike
REMA - Calm Down (TECHNO REMIX) — TECHNO ROCKZZ
Kid Cudi - Pursuit of Happiness (Steve Aoki Remix) - Project X (Official Music Video) — Best Party Videos
#SELFIE (Official Music Video) - The Chainsmokers — The Chainsmokers
Fergie - M.I.L.F. $ — Fergie
DaBaby - ROCKSTAR (Audio) ft. Roddy Ricch — DaBaby
Sickick - Epic 50 Cent Mashup (Live) — SickickMusic
T.I. - Jefe (Official Video) ft. Meek Mill — T.I.
Kendrick Lamar - Not Like Us (Official Music Video) — Real OG
will.i.am - Feelin' Myself ft. Miley Cyrus, Wiz Khalifa, French Montana — will i am
Jason Derulo - Wiggle feat. Snoop Dogg [Official Music Video] — Jason Derulo
DJ Snake, Lil Jon - Turn Down for What — DJ Snake
Mike Will feat. Miley Cyrus, Wiz Khalifa and Juicy J - 23 (IC's Trap Peakhour Monster) — TheDeejayIC
Stefflon Don - 16 Shots (Official Video) — Stefflon Don
MAJOR. - Love Me Olé (Official Video) ft. Kas — MAJOR.
Funzo - TABARCA (Video Oficial) — Funzo
FUNZO & BABY LOUD - JOVEN PARA SIEMPRE — Negative Cloud
Nikone - Mala Hierba (Videoclip Official) — NIKONE EPK
Lérica, Beret, Lalo Ebratt - Hamaca — Lérica
Chema Rivas, Juan Magan - Anda Suelta (Lyric Video) — Chema Rivas
FUNZO & BABY LOUD - PELO RIZAO — Negative Cloud
Fito & Fitipaldis - El monte de los aullidos (en directo Sesión Estudio Uno) — Fito&Fitipaldis
FUNZO & BABY LOUD - PALANTE — Negative Cloud
Funzo, Fyahbwoy - CHICA DE FUEGO (Video Oficial) — Funzo y FYAHBWOY OFFICIAL
KI/KI x Marlon Hoffstadt - Losing Control (Official Video) — Marlon Hoffstadt aka DJ Daddy Trance y KI / KI
BOVSKI - Low Again — BOVSKI
DJ TRIVUX - The Eyes Chico (Original Mix) — DJ Trivux
NIKONE & LIONWARE - SI VUELVES TARDE — NIKONE EPK
TRIFUNOX & ILIXOR - Bang Bang (Original Mix) | TOP CAR MIX 2026 — DJ Trivux y 2 más
Al2 El Aldeano - Oxígeno ( Letra ) — AL2 "El Aldeano"
Nonstop - Quevedo — Quevedo
Ricky Hombre Libre - Gente Bonita — Ricky Hombre Libre
Ahora Y Siempre - Quevedo, Linton — Quevedo
EL MOMO - FUNKY — Boa Música Urbana
Polo G - Angels In The Sky (Official Music Video) — Millennium Hit
DURO - Quevedo (Official Video) | BUENAS NOCHES — Quevedo
SCANDIC - Quevedo (Official Video) — Quevedo
BASSA - HABIBI (HARD TECHNO) — BASSA
Papaoutai - Stromae (Afro Soul Orchestral Cover TikTok by Mikeeysmind) — SLYME STREET y Afronomya
LumaWave Sounds - Fuego Rhythm (Lyrics Video) | Latin-Pop & Dancehall Fusion 2026 — LumaWave Sounds
Not My Problem - Gravagerz, GRAHAM — Gravagerz
Ocho VIP (Laxter Hard Edit) [Lyric Video] — BEAUZ
Nicolas Julian - Sucker (Official Visualizer) — Nicolas Julian
LICK IT (Official Visualizer) — BEAUZ
Dimitri Vegas & Like Mike - Heroine [Live At Tomorrowland] — Smash The House
Hooked on the Bassline — Gabry Ponte
Bomba Estéreo - Soy Yo (Official Video) — Bomba Estéreo
Pont Aeri - Flying Free — CarlinhosX7
Creeds & Gonzi - FULL POWER (Official Music Video) — Gonzi y Creeds
Dimitri Vegas & Like Mike vs W&W & Moguai - Arcade Mammoth (Official Music Video) — Dimitri Vegas & Like Mike
Dimitri Vegas & Like Mike vs Ummet Ozcan - The Hum (Official Music Video) — Dimitri Vegas & Like Mike
Hardwell & Blasterjaxx - Beat Of The Drum — Hardwell
Creeds - Push Up (TikTok Remix) / The Matrix (Fight Scene) — itsAirLow
Dimitri Vegas & Like Mike & Marlon Hoffstadt & DJ Konik - Makina Time (Official Music Video) — Dimitri Vegas & Like Mike
ROSÉ & Bruno Mars - APT. (Official Music Video) — ROSÉ y Bruno Mars
Novah - Rave Kid — Novah y Tomorrowland Music
Ne-Yo, Bebe Rexha, Stefflon Don - PUSH BACK — NE-YO
Masego, Don Toliver - Mystery Lady — Masego
Santana - Maria Maria (Official Video) ft. The Product G&B — Santana
JNR CHOI, Sam Tompkins - TO THE MOON (Official Music Video) — JNR CHOI
Apashe & Alina Pash - Kyiv — Apashe
Eitetsu Hayashi - Fertility of the Sea (Taiko) — 洗足学園音楽大学
Indian drum vs african drum — Ilm-o-Noor
Vera GRV - LA TARARA - (Official Video) prod. Toni Anzis. — Vera GRV
FRANK-T - La Gran Obra Maestra (versión Cover AI de Motown Soul de 1950) #soulhopai — SoulHop A.I.
RAP SOUL 2025 Violadores del Verso, SFDK, Morodo, Sharif, Al2 | Remix Especial #soulhopai — SoulHop A.I.
GRECAS - Vaqueros y mercurial (Escrito en la M-30) — GRECAS
GRECAS - UltraBakano (Escrito en la M-30) — GRECAS
FERNANDOCOSTA - GRECOFERNANDA FT GRECAS (Videoclip Oficial) — FERNANDOCOSTA y GRECAS
Danny Ocean x Sech - Priti (OFFICIAL VIDEO) — Danny Ocean y Sech
Omarion - Distance (Official Music Video) — Omarion
Tinie Tempah - Pass Out — TINIE TEMPAH
Wu Tang Clan - 90s Hip Hop Legends — THUG ARCHIVES 90s
Mina's Radio | EP. 003 — MINA'S RADIO
Guerreros del Pasado | Historia, poder y memoria – Verdad Sintética — Verdad Sintética
Águila y Jaguar | Guerreros Mexicas | Canción Histórica | Verdad Sintética — Verdad Sintética
Joss Favela, Luis R Conriquez - Con Todo Respetillo (Official Lyric Video) — Joss Favela
Al2 El Aldeano ft. Nanpa Basico - POR SI SE TE OLVIDA — AL2 "El Aldeano"
AYAX Y PROK - TOBLERONE (VIDEOCLIP) #JUGLARDELSIGLOXXI — AYAX Y PROK
Lil Dicky - Professional Rapper (Feat. Snoop Dogg) — Lil Dicky
Paulo Londra - Party Ft. A Boogie Wit da Hoodie (official Video) — Paulo Londra
50 Cent - We Locked In (Ft. Method Man & Redman) 2026 — D2T US y Compton Bred Music
Busta Rhymes - Break Ya Neck (Official Video) — Busta Rhymes
Buraka Som Sistema - Kalemba (Wegue Wegue) — Zulu
Touch It (Remix) (Official Music Video) — Busta Rhymes
BEJO - PEROGRULLO (VIDÉO) — B E J O
El Chojin - Y Está Bien (Lyric Video) — El Chojin
El Chojin ft Dani Martín | 22- Déjales que hablen — El Chojin
PROK FT AYAX - CARMINA (VIDEOCLIP) #SERIO — AYAX Y PROK
RAPSUSKLEI - ABECEDARIO (TRACK 14 ORIGAMI) — Rapsusklei
SHARIF & NANPA BÁSICO - PA' QUE MAMI NO LLORE (LYRIC VIDEO) — SHARIF
RAPSUSKLEI - 60 VECES POR MINUTO (TRACK 7 ORIGAMI) — Rapsusklei
SFDK - Señores en el Brunch ft. Kase.O — Sfdk Oficial
La vida - Aldeanos (con letra) — Andres Londoño
Al2 El Aldeano - Gracias — AL2 "El Aldeano"
Nanpa Básico - Oro Por Ti (Official Video) — Nanpa Basico Oficial
Nanpa Básico, Nach, ZPU, Soma - Desde El Fondo (Video Oficial) — Nanpa Basico Oficial
Al2 El Aldeano Ft. Rapsusklei - Julieta (Video Oficial) — AL2 "El Aldeano"
Nanpa Básico, Kany García - Duelo (Official Video) — Nanpa Basico Oficial
Nanpa Básico, Lia Kali, GARABATTO - Peor Que La Policía (Official Video) ft. PMP — Nanpa Basico Oficial
Beethoven 5th Symphony - CLASSICAL MUSIC (TECHNO REMIX) — ELPORTUMIXALL
Bach - Toccata And Fugue (Techno Mix) — DJ Guarja
Beethoven - Für Elise (Klutch Dubstep Trap Remix) — DubstepGutter
Wellerman X Carribean - Blade & Choir Cover — Blade & Choir
Warning: This Rhythm Builds Into Sacred Fire | MAHAKALAGNI — Jakes Jacob Beats
WARNING: YOUR PULSE WILL SYNC — It Overrides Free Will — Tribal Music Studio
El Trueno de los Clanes — Gaitas de Guerra de las Tierras Altas Desatadas — Mist & Drone
Les Twins | FRONTROW | World of Dance 2014 #WODHI — Official World of Dance
Step Up Revolution (2012 Movie) - Opening Sequence Official Teaser — Step Up Movie
Sister Act2 Get Up Offa That Thing HD — Taichi Mori
Sister Act 2 - 30 years ago and reunion 2024 Joyful Joyful — Sean Y
Bob Sinclar & Cutee B. Feat. Gary Pine & Dollarman - Sound Of Freedom — Embassy One
Yves LaRock - Rise Up — Embassy One
Clean Bandit - Rather Be ft. Jess Glynne [Official Video] — Clean Bandit
Chris Brown - Look At Me Now (Clean Version) ft. Lil Wayne, Busta Rhymes — Chris Brown
Outkast - Hey Ya! (Official HD Video) — Outkast
M.C. Hammer - U Can't Touch This — MC HAMMER
The Jackson 5 - ABC — Czikes
Vitas & Timmy Trumpet (Tomorrowland 2019) — VITAS
Steve Aoki & Delia | The Last Bella Ciao || Netflix — Steve Aoki
AC/DC - Thunderstruck (MOONLGHT Remix) — MOONLGHT
DVBBS & Borgeous - TSUNAMI (Original Mix) — Spinnin' Records
Armin van Buuren - Blah Blah Blah (Official Lyric Video) — Armin van Buuren
Maroon 5 - Girls Like You ft. Cardi B (Volume 2) (Official Music Video) — Maroon 5
AL2 El Aldeano - Inocente (Recordpilacion Vol.2) — AL2 "El Aldeano"
SFDK - PRUEBALO (CANAL BOA) — Boa Música Urbana
Nach - Efectos Vocales — Nach
Toteking & Shotta - Muchas Gracias (Videoclip) ft. Swan Fyahbwoy — totekingshottaVEVO
Siempre hablando de mas - Fyahbwoy A.k.a El Chico de Fuego (VIDEO OFICIAL HD) — FYAHBWOY OFFICIAL
MALA JUNTERA - TU ERES PARA MI (OFICIAL) — Boa Música Urbana
DUO KIE - LAS DE PERDER con SFDK y FYAHBWOY — Boa Música Urbana
VIDA GRIMEY 1 y 2 Swan Fyahbwoy, Chulito Camacho, Darmo, Ivan Nieto, Carmona, Moreno HD — rafa muñoz molero
EL KANKA - QUE BELLO ES VIVIR (versión acústica) — SurClub TV
ESTO ES ESPAÑA - LOMO ft Xexu García — Sainzdeces
Apache - Ella Maneja Puro Style (ft. Morodo) [Vídeo Oficial] — Apache Las Minas
Akapellah, Al2 El Aldeano - Ni Con Money (Prod. by Faker) (Official Video) — Akapellah
Akapellah - Rueda De Prensa (Official Video) — Akapellah
Calle 13 - Cumbia de los Aburridos (Video) — elvecindariocalle13
HARD GZ & ANTONY Z - BARQUITO DE VELA — HARD GZ
Reality & Lia Kali - Amor De Barrio (Official Video) [Por Si Muero Mañana] — Reality y Lia Kali
El Chojin Ft. Rozalén - No es egoísmo (Vídeo oficial 2023) — El Chojin
MALA MIA (BOLEROMALANDRO) — Razz
Stromae - Santé (Official Video) — Stromae
Barbara Pravi - Voilà (Clip Officiel) — Barbara Pravi
Gregory Porter - Liquid Spirit (Claptone Remix) — Gregory Porter
MEUTE - Hey Hey (Dennis Ferrer Rework) — MEUTE
Lindsey Stirling & Pentatonix - Radioactive (Imagine Dragons Cover) — Lindsey Stirling
The Civil Wars - Billie Jean (Michael Jackson Cover) — LaundroMatinee
Bishop Briggs - River | Indie88 Black Box Sessions — Indie88
JP Cooper - Diamonds & Gold (Official Visualiser) — JP Cooper
Rayden - A Mi Yo de Ayer — RAYDEN
RAPSUSKLEI - EN BUSCA DE LA FELICIDAD (CON SUZANNA ABELLAN) (TRACK 13 ORIGAMI) — Rapsusklei
Dub Princess & Sneaky Dread - Soundboy — Aiichiro Uno
Måneskin - ZITTI E BUONI (Official Video – Sanremo & EUROVISION 2021 Winners) — Måneskin Official
Eddie Murphy - Red Light ft. Snoop Lion (Official Video) — Eddie Murphy
Moses Concas - Human Revolution — Moses Concas
Jay-Z & Kanye West - Ni**as In Paris (Explicit) — Kanye West
Samantha Barrón - Dibújame Feat. Nanpa Básico (Video Oficial) — Rich Vagos
Steve Aoki, Daddy Yankee, Play N Skillz & Elvis Crespo - Azukita (Official Video) [Ultra Music] — Ultra Records
Dimitri Vegas & Like Mike, Afro Bros, Sebastián Yatra - Boomshakalaka ft. Camilo, Emilia — Sebastián Yatra
Rebota Remix - Guaynaa / Nicky Jam / Farruko Feat Becky G & Sech — Guaynaa
Atomic Otro Way - Te De Campana (Video Oficial HD) — Atomic Otro Way
Bomba Estéreo & Will Smith - Fiesta (Remix) (Official Video) — Bomba Estéreo
Travis Scott - SIRENS — Travis Scott
Bow Wow - Fresh Az I'm Iz (Remix) ft. J-Kwon, Jermaine Dupri — Bow Wow
Bow Wow, Fabolous, Fundisha, Jermaine Dupri - Basketball (Official Music Video) — Bow Wow
Kid Cudi - Pursuit Of Happiness(Steve Aoki Remix) — Ronathan From I.T
DJ Fresh VS Jay Fay ft. Ms Dynamite - Dibby Dibby Sound [Official Video] — DJ Fresh
Martin Garrix - Animals (Official Video) — STMPD RCRDS
Dimitri Vegas, Martin Garrix, Like Mike - Tremor (Official Music Video) — Spinnin' Records
Skrillex & Rick Ross - Purple Lamborghini [Official Video] — Skrillex
Charly Black, Luis Fonsi - Party Animal — Charly Black World
DJ Antoine vs Timati feat. Kalenna - Welcome to St. Tropez (DJ Antoine vs Mad Mark Remix) [Lyrics] — Kontor.TV
Jennifer Lopez, Pitbull - On The Floor (Official Music Video) — Jennifer Lopez
Jessie J - Bang Bang ft. Ariana Grande, Nicki Minaj — Jessie J
P!nk - So What (Official Video) — P!NK
Avril Lavigne - What The Hell (Official Video) — Avril Lavigne
Simple Plan - Welcome To My Life (Official Video) — SimplePlan
Green Day - American Idiot [Official Music Video] [4K Upgrade] — Green Day
Timbaland - The Way I Are ft. Keri Hilson, D.O.E., Sebastian — Timbaland
Ciara - Get Up (Official Video) ft. Chamillionaire — Ciara
Kat DeLuna - Whine Up (Official Video) ft. Elephant Man — Kat Deluna
Christina Aguilera, Lil' Kim, Mya, P!nk - Lady Marmalade — Christina Aguilera
The Pussycat Dolls - Buttons (Official Music Video) ft. Snoop Dogg — The Pussycat Dolls
Flo Rida - Low (feat. T-Pain) [Official Video] — Flo Rida
Rafa Pabon, Zion, Brray, Toño Rosario, Randy, Kiko El Crazy, Jon Z - A'GÜIRO REMIX — Rafa Pabön
Sech - Sal y Perrea (Video Oficial) — Sech
Step Up 4: Revolution 'The Office MOB' Dance HD — DivyaSindu
David Guetta - Dangerous (Video oficial) con Sam Martin — David Guetta
KASE.O - RINGUI DINGUI feat. SFDK (Prod. Acción Sanchez) — KaseO TV Oficial
Little Pepe - Si Tú Supieras ft. Fyahbwoy — LITTLE PEPE
PROK - COPA Y PURO (VIDEOCLIP) #SERIO — AYAX Y PROK
Alberto Gambino feat. Noé - Acuerdáte de lo que importa — Alberto Gambino
JP Cooper - The Reason Why ft. Stefflon Don, Banx & Ranx — JP Cooper
Tash Sultana "Jungle" (Live) - California Roots 2018 — California Roots
JP Cooper - Let It Be (The Beatles Cover) — JP Cooper
JP Cooper - Holy Water (Gospel Choir Version) — JP Cooper
BOVSKI - Do it Again — BOVSKI y GOTTA MOVE
BOVSKI - Only One — BOVSKI
AYAX- BUKOWSKI (VIDEOCLIP) — AYAX Y PROK
ALBERTO GAMBINO - RECUERDOS PARA TU MADRE (VIDEO) — Alberto Gambino
FERNANDOCOSTA - BARCO A LA DERIVA (PROD. BLASFEM) | VIDEOCLIP — FERNANDOCOSTA
Akapellah, Trueno - Parriba (Official Video) — Akapellah
Akapellah - Como Mario (Prod. By Maffio)(Official Video) — Akapellah
EL MOMO FT. ESTOPA - DE BARRIO (Prod. Bombony Montana) — El Momo
PROK - MATRIX (VIDEOCLIP) #SERIO — AYAX Y PROK
AYAX FT DOLLAR - GUAJIRO (PHONECLIP) #JUGLARDELSIGLOXXI — AYAX Y PROK
Residente - This is Not America (Official Video) ft. Ibeyi — Residente
KASE.O - TIRANOSAURIUS REX (Prod. Harto y Escandaloso Xpósito) — KaseO TV Oficial
FERNANDOCOSTA - VIDA REAL (PROD. BLASFEM) VIDEOCLIP OFICIAL — FERNANDOCOSTA
KASE.O - EL GORDO QUE LA PISA BIEN (Prod. Harto y Escandaloso Xpósito) — KaseO TV Oficial
Rihanna - Desperado — JDreamer
KAZE - KBRONES - ONE SHOT — KAZE
PROK FT AL2 EL ALDEANO - LOS LOBOS (VIDEOCLIP) — AYAX Y PROK y AL2 "El Aldeano"
2Pac & Miyagi - Other Position (DarK Boy Remix) — GANGSTER GANG
DJ TRIVUX - HOT MIDNIGHT RIDE (Original Mix) — DJ Trivux
Latinamerica — Raffa FL Music
Ozzy Osbourne - Crazy Train (MVRK Remix) — Flow Trax
Queen - We Will Rock You (TuneSquad Bootleg) — Ma Fo
María Peláe - Remix Lola Flores, Residente y Rosalía (Cómo me las maravillaría yo) — María Peláe
Sage The Gemini - Watchachacha [Official Audio] — Sage the Gemini
Michael Jackson - Beat It (Amir Bootleg) — Ma Fo
Green Day - Boulevard Of Broken Dreams (Seb Renzella Bootleg) — Chemical Energy Music
Juan Alcaraz - Minions Bounce [Original Mix] — DVC
PSYTRANCE - MARIO TIME (STACK REMIX) Super Mario Bros Main Theme — Psycodelize Music
PSYTRANCE - The Pink Panther Theme Song (No Comment VS Jano Remix) — Psycodelize Music
David Guetta Feat. Kid Cudi - Memories (Cat Dealers Remix) / Fast & Furious (Car Chase Scene) — itsAirLow
NYA DE LA RUBIA & JUAN MAGÁN - No Se Puede Tener To (Lyric Video) Ft. Carlos Ares — Nya de la Rubia
Christina Aguilera, Becky G, Nicki Nicole - Pa Mis Muchachas (Official Video) ft. NATHY PELUSO — Christina Aguilera
Black Eyed Peas, J Balvin - RITMO (Bad Boys For Life) (Official Music Video) — Black Eyed Peas
Major Lazer, The Flexican, FS Green & Busy Signal - Watch Out for This (Bumaye) [Official Video] — Major Lazer Official
Farruko - NAZARENO (Official Video) — Farruko
ChocQuibTown, Becky G - Que Me Baile (Official Video) — ChocQuibTown
Becky G - Zooted (Official Video) ft. French Montana, Farruko — Becky G
FYAHBWOY – TANTO POR TI (OFFICIAL VIDEO) — FYAHBWOY OFFICIAL
Bruno Mars - Liquor Store Blues (feat. Damian Marley) (Official Music Video) — Bruno Mars
Fugees - No Woman, No Cry (Official HD Video) ft. Stephen Marley — Fugees
VANUPIÉ - ROCKADOWN - SUBWAY SESSION (FEAT. LIDIOP) — VanupieOfficiel
FOYONE #RapSinCorte — FOYONE
Two Feet - Go F*ck Yourself // DeadPool — Rhino TV
Grits - Mi Vida Be Like/ Ohh Ahh (Remix ft. 2Pac & Xzibit - Tokyo Drift Version en Español) — Bigger Picture Productions
Tokyo Drift - Six Days (4K) — Samdroid
KEAN DYSSO - Give it to Me (TikTok Remix) — HELLFXRMANCE
Street Kings Never Die [GANGSTER TRAP] — Trap Cartel Music
HAKUNA MATATA (Afro-Asian Rave) | Lion King Experimental House — Dj Riflenij
Trampsta - País Tropical (Music Video) — Trampsta
Trampsta - Work (Video) — Trampsta
Trampsta - Chunky (Old Dancing Movies Video) — Trampsta
DJZRX - Not My Problem Funk (Sayfalse Remix) [Lyrics] — Phonk World
Bad Bunny's Apple Music Super Bowl Halftime Show — NFL
BEJO - A MI MANERA (PROD. COOKIN SOUL) — B E J O
Social Experiment w/ MINA | Edits, Hip-Hop, R&B, Baile Funk, Amapiano, Miami Bass — Social Supply VA
Can't Stop — Amazingblaze - Topic
Arte Como Amante — Indira Paganotto
Gipsy Queen — Indira Paganotto
Indira Paganotto - CRUSH (Official Music Video) — Indira Paganotto
Papaoutai (BASS DEMON x Mr Demon Techno Remix) — wannabebroken
Bomba Estéreo - La Bilirrubina (Official Video) — Bomba Estéreo
Bomba Estéreo - Internacionales (Official Video) — Bomba Estéreo
EDE&Miguel Gil | La complicidad | PreParty Switch On Madrid 2018 — Switch On Madrid
Original Koffee - Toast (Official Video) — Original Koffee
Tinie - Whoppa (feat. Sofia Reyes and Farina) [Official Video] — Sofia Reyes
Doja Cat - Rules (Official Video) — Doja Cat
Dillon Cooper - State of Elevation (Official Music Video) — The Dillon Cooper
QUILATE feat CAPAZ, RAPSUSKLEI, SHABU ONE SHANT - CURIOSITY — SANTA SUERTE MUSIC
NATHY PELUSO - NATIKILLAH — NATHY PELUSO
Nathy Peluso - La Sandunguera — NATHY PELUSO
Major Lazer - Diplomatico (feat. Guaynaa) [Official Music Video] — Major Lazer Official
Sebastián Yatra, Manuel Turizo, Beéle - VAGABUNDO (Official Video) — Sebastián Yatra
PTAZETA || BZRP Music Sessions #45/66 — Bizarrap
NATHY PELUSO || BZRP Music Sessions #36/66 — Bizarrap
Kidd Keo - MAMA (Official Video) — Kidd Keo
Green Valley Feat.TOSKO Videoclip HD Oficial- Gente Real — greenvalleyband
JUSEPH X QUEVEDO | YATEKOMO (Video Oficial) — Juseph
Tego Calderon x Arcangel x Bad Bunny - CORONAMOS (Official Video) — URBAN FLOW LATAN
Bad Bunny - CALLE Y CIELO (CANCION NUEVA) — MadBunny
Nikone - Rain Rain Rain (Videoclip Official) — NIKONE EPK
Malviviendo - SFDK (Videoclip Oficial) — malviviendo
HARD GZ & DOLLAR - CAE LA NOCHE [PROD. KVINZ (VIDEOCLIP)] — HARD GZ
AYAX - OCTUBRE | VIDEOCLIP — AYAX Y PROK
AYAX Y PROK FT AKAPELLAH - DE GRANÁ A MARACAY | VIDEOCLIP (PROD BLASFEM) — AYAX Y PROK
FOYONE ft. AYAX Y PROK - Tierra de Bandios [Prod. Blasfem] (Videoclip) — FOYONE
HARD GZ - AFROHARD (Prod. BAGHIRA) — HARD GZ
HARD GZ & GAROLO FT. AYAX Y PROK - CONEJO BLANCO [( PROD.BLASFEM) VIDEOCLIP] — HARD GZ
HARD GZ & GAROLO - ARBOLES DE PIEDRA (VIDEOCLIP) — HARD GZ
A$AP Rocky & $UICIDEBOY$, Pouya, GERM - PLAYA — GANGSTER GANG
Dark Boy - Gangsta Track feat. Tupac & 50 Cent — Alex's List
Timmy Trumpet & Savage - Freaks (Official Video) — SteveAATW
Tyga - Ayy Macarena (Official Video) — Tyga
No Fun Ft. Wynn (Official Lyric Video) — ThatsKramer
Michael Jackson - They Don't Care About Us — Michael Jackson
Bad Bunny ft. Chencho Corleone - Me Porto Bonito (Video Oficial) | Un Verano Sin Ti — Bad Bunny
DaBaby - ROCKSTAR (Live From The BET Awards/2020) ft. Roddy Ricch — DaBaby
Rihanna - Work (Explicit) ft. Drake — Rihanna
Shakira - Soltera (Official Video) — Shakira
Queen Omega, Little Lion Sound – No Love Dubplate (Official Lyric Video) — Queen Omega
COSTA feat. BEBE - FICCIÓN - prod. MYGAL X (OFFICIAL MUSIC VIDEO) — GRIMEY MUSIC
AYAX - ZINEDINE (PROD. HUECO PRODS) VIDEOCLIP — AYAX Y PROK
HARD GZ & NIKONE - LO REAL (PROD.DUALY) — HARD GZ
Dollar Selmouni ft. JC Reyes - No saben como vivo (Videoclip Oficial) — DOLLAR SELMOUNI
Dollar Selmouni - Salud y dinero (Videoclip Oficial) — DOLLAR SELMOUNI
Leiva - Caída Libre (Video Oficial) ft. Robe — Leiva
El Chojin - El Mundo Sigue Girando (Video Oficial) — El Chojin
Capaz - Dando la Nota ft. Kase.O — CapazVEVO
Leiva - Como Si Fueras a Morir Mañana — Leiva
Guitarricadelafuente - Agua y Mezcal (Vídeo Oficial) — Guitarricadelafuente
Guitarricadelafuente - abc (Vídeo Oficial) — Guitarricadelafuente
Pole. - Amor De Verbena ft. Dani Martin — POLE.
La Maravillosa Orquesta del Alcohol - Héroes Del Sábado — La M.O.D.A
Leiva - Gigante (Video Oficial) — Leiva
C. Tangana - LATE CHECKOUT II — C. Tangana
Ede - Lobas — Directo en Lavapies
We Are Your Friends - Cole's Memories [Movie Version] — C P
this is all my soul needs — Gravagerz
LIZOT, Sonny Wern, 1 World, Dorrough Music - LA LA LA (Official Lyric Video) — LIZOT y Sonny Wern
Dimitri Vegas & Like Mike & Tiësto & Dido & W&W - Thank You (Not So Bad) (Official video) — Dimitri Vegas & Like Mike
Dimitri Vegas & Like Mike & W&W & Marnik – Yeah (Official Music Video) — Dimitri Vegas & Like Mike
Hey Baby (Drop It To The Floor) (BASS DEMON x Mr Demon Techno Remix) — wannabebroken
GDFR (BOVSKI Remix) — BOVSKI
Alors on dance - BMW NIGHTS — a1iyevvsFx
Yellow Claw - DJ Turn It Up [Official Full Stream] — Mad Decent
GANGSTER IN JUNGLE - MY GANG (GANGSTER TRAP) — GANGSTER IN JUNGLE
GANGSTER IN JUNGLE - LONE WOLF (GANGSTER TRAP) — GANGSTER IN JUNGLE
DJ TRIVUX - Gas Pedal (Original Mix) — DJ Trivux
ECHO NATION – Wolves Don't Sleep [GANGSTER TRAP] — ECHO NATION
BEND & LOCK - Kybba x Blaiz Fayah – Dancehall Energy (Sean Paul Style) — DJ Nova Chill
GANGSTER ON WHEELS - Play & Win — GANGSTER ON WHEELS
DJ TRIVUX - ATMOSPHERE (Original Mix) — DJ Trivux
ILIXOR & TRIFUNOX - BANG BANG (Original Mix) — ILIXOR MUSIC y TRIFUNOX
Skrillex & Mr. Oizo - RATATA (KREAM Remix) ft. Missy Elliot — KREAM
GANGSTER IN JUNGLE - CEO OF THE STREETS (GANGSTER TRAP) — GANGSTER IN JUNGLE
GANGSTER IN JUNGLE - KARMA (GANGSTER TRAP) — GANGSTER IN JUNGLE
GANGSTER IN JUNGLE - FAST and FURIOUS (GANGSTER TRAP) — GANGSTER IN JUNGLE
GANGSTER IN JUNGLE - LA FAMILIA (GANGSTER TRAP) — GANGSTER IN JUNGLE
GANGSTER IN JUNGLE - MONSTER MODE ON (GANGSTER TRAP) — GANGSTER IN JUNGLE
GANGSTER IN JUNGLE - INVINCIBLE (GANGSTER TRAP) — GANGSTER IN JUNGLE
GANGSTER IN JUNGLE - SUPERLIFE (GANGSTER TRAP) — GANGSTER IN JUNGLE
GANGSTER IN JUNGLE - NO SPEED LIMIT (GANGSTER TRAP) — GANGSTER IN JUNGLE
Major Lazer & Machel Montano - Champagne — Major Lazer Official y Machel Montano
GANGSTER IN JUNGLE - WEEKEND (GANGSTER TRAP) — GANGSTER IN JUNGLE
XENRO - Shockline (Original Mix) — XENRO
Do you agree? ukgarage remix boilerroom trance — BOVSKI
ECHO NATION – No Rules [GANGSTER TRAP] — ECHO NATION
Gangster Music | Rockstar ft. 21 Savage (REMİX) — Gangsta Design
Tiësto & Ava Max - The Motto (BL Official Remix) | CAR VIDEO 4K — BL Official
J Balvin Willy William - Mi Gente (NORTKASH Remix) — Boosted Music
Dj Kantik - Teriyaki Boyz - Tokyo Drift & Sean Paul - Temperature (Remix) — DJ Kantik
KEAN DYSSO - Give it to Me (TikTok Techno Trending Remix) — HELLFXRMANCE
KEAN DYSSO - Keep Rollin Sidewayz — KEAN DYSSO
Unstoppable - Gangster (Original Mix) — Unstoppable Gangsta Music
MXEEN - Black Monk | TikTok Trend The Fate of the Furious — MXEEN
The Crew - Get Low [GMV] — KP7 Epic Videos
Okean Elzy - Obijmy (Callmearco Remix) - Fast & Furious [Chase Scene] 4K — Aleks Born
Lil Jon, 2Pac, Eminem & Ken Block - Fast Lane 2 (2023) — Van Tahoe
tokyo drift remix AMV Ken Block — GLA ASSASSIN
My humps my humps techno remix boilerroom rave — BOVSKI
Always fun playing with Cloudy novah techno — Novah
Mark Ronson ft.Bruno Mars - Uptown Funk (Dan Absent Remix) — Dan Absent
Shaggy – Hey Sexy Lady ft. Brian & Tony Gold | Afro House Remix — RavemMusic
MASKOVA - Feel (Original Mix) — MASKOVA
Bad Bunny - ME QUEDA BIEN (Nuevo Hit 2026) — MadBunny
GW - No Risk No Story [GANGSTER TRAP] — GANGSTER ON WHEELS
NNF – Sexy — NN.F Studio
FRHAD - Engine — Butch U Official
BLACKVETTE - Blacked BMW — KEAN DYSSO
Ishaia — Sylarz
SNY - King Kong (Official Music Video) — SNY CLUB
THE M.O.B (Original Version) — FLORÉN FLO Beats
SNY - BIG BANG (Official Music Video) — SNY CLUB
SNY - Control (Original Mix) — SNY CLUB
MY GAME MY RULES | Gangster Trap Deep-House Hip-Hop Perfect For Car Rides — FLORÉN FLO Beats
In the Trap We Trust [GANGSTER TRAP] — Trap Cartel Music
Kings Don't Ask [GANGSTER TRAP] — Trap Cartel Music
Masked Wolf - Astronaut In The Ocean (Soner Karaca Remix) | Car Music Video — Notyfi
Axel Cooper, Fyex & JVLS - Shut Your Mouth (feat. PAIN) — OnlyBass
VXY – I CAN [GANGSTER TRAP] — VXY GANGSTER
VXY – BLESSINGS IN THE BASEMENT [GANGSTER TRAP] — VXY GANGSTER
SNY - King is Back (Official Music Video) — SNY CLUB
Gangsta Dreams (Shadow Bass King) — Shadow Bass King
VXY – MY CODE [GANGSTER TRAP] — VXY GANGSTER
SYNTHETIC - Hard Techno & Neo Rave — heinADT.
BOVSKI - Left Me For Dead — BOVSKI
KAZE - TA TO CLIN FT BETO — KAZE
Travis Scott - Goosebumps (HVME Remix) | Car Music — Notyfi
Directo Al Millon — La Conecta AI
Should I drop this?! ukgarage suckerforpain remix boilerroom — BOVSKI
Stromae - Alors On Danse (Coffee Afro House Remix) — Coffee Afro House
Numb – Linkin Park | Afro House Remix — AFRO CODE
Ricky Hombre Libre - Freedom (Videoclip) — Ricky Hombre Libre
AVAION | For The Vibes (LIVE SET) — AVAION
AVAION, RANI - SLOWLY (Official Video) — AVAION
Myke Towers - Lala (Tech House Remix) — Diex : Music
Kaoma – LAMBADA INSANE BASS DROP (Afro House Remix) — AFRO CODE
2ŁØT & Aloe Blacc - Immortal (Steve Aoki Remix) [Official Lyric Video] — Steve Aoki
GW - UNBREAKABLE [GANGSTER TRAP] — GANGSTER ON WHEELS
GW - My Gang [GANGSTER TRAP] — GANGSTER ON WHEELS
GW - Tears In My Eyes [GANGSTER TRAP] — GANGSTER ON WHEELS
GW - Wolf Among Sheep [GANGSTER TRAP] — GANGSTER ON WHEELS
Jee Tea - Blurred Party (Official Audio) — Jee Tea
Fake Blood - I Think I Like It (We Are Your Friends Soundtrack) — YANNICK ZAEZ
ACID — Novah
SISTEM ERROR — GIØ - Topic
WTF — Script - Topic
ROSE & Bruno Mars - APT. (TPA Remix) — TPA
Live My Life (JKR & RPM Remix) — JKR
Noisestorm - Crab Rave [Monstercat Release] — Monstercat Instinct
GW - Don't Play With Me [GANGSTER TRAP] — GANGSTER ON WHEELS
GW - Power [GANGSTER TRAP] — GANGSTER ON WHEELS
Stolen Dance (Hypertechno) — Macon
Novah, Ceres - Papi — Novah
Mahmut Orhan - And Go [REMIX] — Dim Angelo
KAI — MOSKA
PSYTRANCE - System Of A Down - Toxicity (Trampsta & Heavy Drop Remix) — Psycodelize Music
Teddy Swims - Lose Control (Bonne Extended Remix) — Bonne Plus
High all the time techno novah — Novah
What is this MASHUP Novah? dj djane musicproducer — UFO Network y K4LEVRA
ERFURT WAS HOT FULL SET ONLINE novah — Novah
Best time in France novah — Novah
Best place novah — Novah
Heyy, you there novah — Novah
Antes de que cuente diez - Fito & Fitipaldis (HARDSTYLE REMIX) — Empi
Se lo que hicisteis - Melendi (TECHNO REMIX) — Empi
Extremoduro - So Payaso (Juanfran La Clave & Andy Acedo Hype Techno Remix) HOMENAJE — Andy Acedo
EXTREMODURO - La vereda de la puerta de atrás (LI4M short REMIX) — LI4M
Benson Boone - Beautiful Things (Bonne Extended Remix) — Bonne Plus
Basshunter - DotA (Blexxter & Stevxx Techno Remix 2.0) — Blexxter y Stevxx
Habits (Stay High) (TECHNO KING Remix) — wannabebroken
BRING ME TO LIFE (BOVSKI REMIX) — BOVSKI
Sean Paul - No Lie ft. Dua Lipa (Lorcan x Jamie Remix) — FUTURISM
Borderline — Ely Oaks
House x Club Type Beat - Miami to LA | EDM Club Banger Instrumental — Klein Beats
Bakermat & Goldfish feat. Marie Plassard - Games Continued — Bakermat
Love All Day (feat. Leela D) (Extended Mix) — Kisch - Topic
GANGSTA RULES | Perfect Soundtrack For Deep-House Trap Hip-Hop Car Rides — FLORÉN FLO Beats
TRINIX - Rooftop Live Session (Paris) — TRINIX
WE CAN'T STOP (BOVSKI Remix) | OUT NOW — BOVSKI
Fever — Bassline Club Vibes
Valexus - Mirrors (Lyric Video) — Valexus
Disco Lines & Tinashe - No Broke Boys (Official Audio) — Disco Lines
Bad Bunny - Una Velita (Tech House Remix) | Xteven — Xteven
Mel C x BOVSKI Never Be The Same Again — BOVSKI
Justin Bieber - YUKON (Gravagerz REMIX) — Gravagerz
Of Monsters and Men - Little Talks (Carter Walsh Remix) — NALYRO
BL3SS x Gravagerz - Afters (Official Lyric Video) — BL3SS
BL3SS x CamrinWatsin - KISSES (BOVSKI Remix) — BOVSKI
Vibez — Xvnty - Topic
Katy Perry - This is how we do (Gravagerz REMIX) — Gravagerz
Cammy Barnes - Whiskey Roll (Levi Heron Remix) (Official Lyric Video) — Xploded Music
BOVSKI - Key To My Heart — BOVSKI
Major Lazer ft. Busy Signal & Kybba - GANGSTA (Live in Brussels) — Major Lazer Official
Kim - Confidence (Gravagerz REMIX) — Gravagerz
FISHER X bbyclose - Blackberries (Han Conscious Remix) [House] — SAMOGON RECORDS
Disconnected — James Hype
Tita Lau - The Madonna (Feels Like) — Tita Lau
Loud Luxury and Bryce Vine - I'm Not Alright [Official HD Audio] — Bryce Vine
Olly James x Yosuf - The Way I Are (Official Lyric Video) — Xploded Music
Noah Edwards - Set Fire To The Rain (Official Lyric Video) — Xploded Music
NS Boulevard - Boy You Gotta (Official Lyric Video) — Xploded Music
MENTIS x Abi Flynn - Heaven (Official Lyric Video) — Xploded Music
Sluggy Beats - Don't Stop The Music (Official Lyric Video) — Xploded Music
BOVSKI - Walk (feat. Kwabs) — BOVSKI
Jilax - Calabria (Remix) — Jilax
James Hype - Waterfalls (ft. Sam Harper & Bobby Harvey) — James Hype
Blair Muir - REHAB (Official Lyric Video) — Xploded Music
THYPONYX - Seven Nation Army — THYPONYX
Trikk x MEUTE - Raiva (Acoustic Version) | Live at Pukkelpop 2025 — MEUTE
Ofenbach - Wasted Love (feat. Lagique) [Official Music Video] — Ofenbach
Worry — SOULO
AVAION - Pieces (Official Video) — AVAION
Victor Demé - Djoon Maya (Synapson Remix) — Mon Diamant
Route 94 - My Love (Official Video) ft. Jess Glynne — Route 94
NOVEMBER KID - more than friends — NOVEMBER KID
Boulevard Of Broken Dreams — NOVEMBER KID
NOVEMBER KID - Voyage,voyage — NOVEMBER KID
AYYBO & Discip - 4 Ya Mind — blanc
Peking Duk - Fire — The Vibe Guide
Bakermat - Work It Out (Official Visualizer) — Bakermat
FKJ - So Much to Me — Roche Musique
FKJ - Lying Together — Roche Musique
A Gozar — Albert Delgado - Topic
Nosi - So Good (Lyric Video) — NOSI
oskar med k - Make Me Feel (Official Video) — oskar med k
Mari Froes x TRINIX - Vaitimbora (Official Music Video) — Mari Froes
LAGOS IN PARIS - Faya ft. ayisi (Official Music Video) — LAGOS IN PARIS
AVAION - Keep On Dancing (Official Video) — AVAION
AVAION - Call my name (Official Lyric Video) — AVAION
Imagine Dragons - Shots (Gravagerz REMIX) — Gravagerz
Franky Wah - Make Me Feel Free (Official Video) — Franky Wah
Sonny Fodera, Jazzy, D.O.D - Somedays [Official Music Video] — Sonny Fodera
Movin & Groovin — Sebastian Banks
PAWSA - TOO COOL TO BE CARELESS — PAWSA
John Summit - La Danza — John Summit
Baianá (Original mix) — Release - Topic
BAILA MI CUMBIA (Latin Tech House) — Romey - Topic
Son Ilusiones - Los Chichos Afro House Remix, Oscar Combo x Juanfran La Clave — OSCAR COMBO
Tom Santa - Rainfall (Praise You) | Official Lyric Video — Tom Santa
Candela — Phebo - Topic
J. Cole - G.O.M.D — J. Cole
Tems - Me & U (SEVENTH Remix) [Afro House] — SEVENTH
Mr. Probz - Space for Two | Red Bull Music Uncut — Mr. Probz
Bakermat - One Day (Vandaag) (Videoclip) — Bakermat
Khalid - Suncity (Official Audio) ft. Empress Of — Khalid
Lola Young - Messy (NOVEMBER KID Remix) — NOVEMBER KID
Omah Lay - soso (Official Music Video) — Omah Lay
Omah Lay - Holy Ghost [Official Music Video] — Omah Lay
Choco (feat. mike blue) — Verssace - Topic
1da Banton - No Wahala (Official Video) — 1da Banton
To Build a Home - The Cinematic Orchestra — morriseythemonkey
Cordae - RNP (feat. Anderson .Paak) [Official Lyric Video] — Cordae
GoldLink - Zulu Screams (Official Video) ft. Maleek Berry, Bibi Bourelly — GoldLink
Gravagerz - Chihiro (Official Music Video) — Gravagerz
Jorja Smith - Be Honest (feat. Burna Boy) — Jorja Smith
LAGOS IN PARIS - Afro G Western (Official Music Video) — LAGOS IN PARIS
Congo to Cuba (Official Putumayo Version) — Putumayo
LAGOS IN PARIS - Mali Spirit (Official Music Video) — LAGOS IN PARIS
Quedate Luna — TRINIX
Kish, JMANI - Dopamine (prod. GIVANO) — Kish
Os Tincoãs - Deixa A Gira Girar (j g b edit) — millemon
CKay ft. Olamide - WAHALA [Lyric Video] — CKay
Shut up My Moms Calling (Sped up) — Hotel Ugly
Figa de Guine' Remix - Mari Froes x Kalipiano — KALIPIANO
TRINIX x Rushawn - It's a beautiful day — TRINIX`;

const MOODS = [
  { label: '☀️ Vermut domingo', text: 'Es domingo mediodía, sesión Vermut con la Manada — algo alegre, despreocupado, para disfrutar sin prisa.' },
  { label: '🌙 Nanas de noche', text: 'Es de noche y quiero cerrar el día con calma, algo suave para desconectar.' },
  { label: '🎧 A currar', text: 'Necesito concentrarme trabajando, algo con ritmo pero que no distraiga ni tenga mucha letra.' },
  { label: '🔥 Fiesta Manada', text: 'Fiesta con la Manada, necesito algo que mueva el cuerpo y no pare.' },
  { label: '🚗 Carretera', text: 'Voy conduciendo, quiero energía pero sin agobiar, para acompañar el viaje.' },
  { label: '💔 Día raro', text: 'He tenido un día raro, ni bien ni mal, busco algo que acompañe sin exigir nada.' },
];

const SYSTEM_PROMPT = `Eres el Oráculo Musical de BRM (Bubatronik Radio), una radio comunitaria independiente de Sant Salvador, Tarragona, Catalunya. Tu comunidad se llama "la Manada". BRM es Open Format, sin jerarquías, para tod@s.

CATÁLOGO REAL DE BRM (elige SOLO de aquí — nunca inventes canciones ni artistas que no estén en esta lista, cópialos tal cual aparecen):
` + CATALOG + `

Alguien de la Manada te describe un momento o estado de ánimo. Elige entre 4 y 6 canciones de la lista de arriba que encajen bien con lo que describe. No repitas nunca el mismo artista dos veces si puedes evitarlo. Responde ÚNICAMENTE con JSON válido, sin texto antes ni después, sin backticks, en este formato exacto:
{"intro":"una frase cálida y breve (máximo 20 palabras), con la voz cercana y sin jerarquías de BRM","picks":[{"title":"título EXACTO tal cual aparece en el catálogo","artist":"artista EXACTO tal cual aparece","reason":"una frase breve (máx 15 palabras) de por qué encaja con lo que pidió"}]}`;

export default function OraculoManada() {
  const [mood, setMood] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');
  const [askedText, setAskedText] = useState('');

  async function preguntar(overrideText) {
    const m = (overrideText ?? mood).trim();
    if (!m || loading) return;
    setLoading(true);
    setError('');
    setResult(null);
    setAskedText(m);
    try {
      const prompt = SYSTEM_PROMPT + `

MOMENTO DESCRITO POR LA MANADA: "` + m + `"`;

      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          messages: [{ role: 'user', content: prompt }],
        }),
      });
      if (!response.ok) throw new Error('bad status');
      const data = await response.json();
      const rawText = (data.content || []).map((b) => b.text || '').join('');
      const clean = rawText.replace(/```json|```/g, '').trim();
      const parsed = JSON.parse(clean);
      if (!parsed.picks || !Array.isArray(parsed.picks) || parsed.picks.length === 0) {
        throw new Error('empty picks');
      }
      setResult(parsed);
    } catch (e) {
      setError('El Oráculo no ha podido responder ahora mismo. Prueba otra vez en unos segundos.');
    } finally {
      setLoading(false);
    }
  }

  function ytSearch(title, artist) {
    return 'https://www.youtube.com/results?search_query=' + encodeURIComponent(artist + ' ' + title);
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(245,158,11,0.08), transparent), #05050a',
        color: '#f4f0eb',
        fontFamily: "'JetBrains Mono', 'Courier New', monospace",
        padding: '40px 20px 60px',
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&family=Bebas+Neue&family=Barlow+Condensed:wght@600;700&display=swap');
        .oracle-title { font-family: 'Bebas Neue', 'Arial Narrow', sans-serif; letter-spacing: 3px; }
        .oracle-cond { font-family: 'Barlow Condensed', sans-serif; }
        @keyframes oracle-pulse { 0%,100% { opacity: .35; transform: scale(1); } 50% { opacity: 1; transform: scale(1.06); } }
        .oracle-pulsing { animation: oracle-pulse 1.6s ease-in-out infinite; }
        textarea::placeholder { color: #4a4a60; }
        textarea:focus { outline: none; border-color: #f59e0b !important; }
        .oracle-chip:hover { border-color: #92610a !important; background: rgba(245,158,11,0.08) !important; color: #f59e0b !important; }
        .oracle-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 6px 28px rgba(245,158,11,0.36) !important; }
        .oracle-btn:active:not(:disabled) { transform: scale(0.98); }
        .oracle-yt:hover { color: #f59e0b !important; border-color: #92610a !important; }
      `}</style>

      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <div
            className="oracle-pulsing"
            style={{
              fontSize: 44,
              marginBottom: 8,
              filter: 'drop-shadow(0 0 18px rgba(245,158,11,0.5))',
            }}
          >
            🔮
          </div>
          <h1
            className="oracle-title"
            style={{ fontSize: 40, color: '#f59e0b', margin: 0, lineHeight: 1 }}
          >
            EL ORÁCULO DE LA MANADA
          </h1>
          <p
            className="oracle-cond"
            style={{
              color: '#7a7a8f',
              fontSize: 15,
              letterSpacing: 1,
              marginTop: 10,
              textTransform: 'uppercase',
              fontWeight: 600,
            }}
          >
            IA real (Claude) razonando sobre el catálogo real de BRM · 1.388 canciones
          </p>
        </div>

        {/* Mood chips */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center', marginBottom: 18 }}>
          {MOODS.map((mm) => (
            <button
              key={mm.label}
              className="oracle-chip"
              disabled={loading}
              onClick={() => {
                setMood(mm.text);
                preguntar(mm.text);
              }}
              style={{
                background: '#12121e',
                border: '1px solid #2e2e4a',
                color: '#f4f0eb',
                borderRadius: 20,
                padding: '8px 16px',
                fontSize: 13,
                fontFamily: "'JetBrains Mono', monospace",
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.5 : 1,
                transition: 'all .2s',
              }}
            >
              {mm.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div
          style={{
            background: '#0b0b14',
            border: '1px solid #2e2e4a',
            borderLeft: '3px solid #f59e0b',
            borderRadius: 12,
            padding: 20,
            marginBottom: 28,
          }}
        >
          <textarea
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            placeholder="Cuéntale al Oráculo qué momento estás viviendo... (ej: acabo de llegar a casa después de currar todo el día, necesito bajar el ritmo)"
            rows={3}
            style={{
              width: '100%',
              background: '#05050a',
              border: '1px solid #22223a',
              borderRadius: 8,
              color: '#f4f0eb',
              padding: 12,
              fontSize: 14,
              fontFamily: "'JetBrains Mono', monospace",
              resize: 'vertical',
              boxSizing: 'border-box',
            }}
          />
          <button
            className="oracle-btn"
            disabled={loading || !mood.trim()}
            onClick={() => preguntar()}
            style={{
              marginTop: 14,
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '13px 26px',
              borderRadius: 8,
              border: 'none',
              cursor: loading || !mood.trim() ? 'not-allowed' : 'pointer',
              background: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
              color: '#05050a',
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: 2,
              textTransform: 'uppercase',
              boxShadow: '0 0 20px rgba(245,158,11,0.2)',
              opacity: loading || !mood.trim() ? 0.5 : 1,
              transition: 'all .25s',
            }}
          >
            {loading ? <Loader2 size={16} className="oracle-pulsing" /> : <Sparkles size={16} />}
            {loading ? 'Consultando a la Manada...' : 'Preguntar al Oráculo'}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div
            style={{
              background: 'rgba(239,68,68,0.08)',
              border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: 8,
              padding: 14,
              color: '#ef4444',
              fontSize: 13,
              marginBottom: 20,
            }}
          >
            ⚠️ {error}
          </div>
        )}

        {/* Results */}
        {result && (
          <div>
            <div
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fbbf24',
                borderLeft: '3px solid #92610a',
                background: '#12121e',
                borderRadius: '0 8px 8px 0',
                padding: '16px 20px',
                marginBottom: 20,
              }}
            >
              "{result.intro}"
            </div>

            <div style={{ display: 'grid', gap: 10 }}>
              {result.picks.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: '#12121e',
                    border: '1px solid #2e2e4a',
                    borderRadius: 10,
                    padding: '14px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 14,
                  }}
                >
                  <div
                    className="oracle-title"
                    style={{ fontSize: 22, color: '#92610a', minWidth: 28 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: '#f4f0eb' }}>{p.title}</div>
                    <div style={{ fontSize: 12, color: '#7a7a8f', marginTop: 2 }}>{p.artist}</div>
                    <div style={{ fontSize: 12, color: '#fbbf24', marginTop: 6, fontStyle: 'italic' }}>
                      {p.reason}
                    </div>
                  </div>
                  <a
                    className="oracle-yt"
                    href={ytSearch(p.title, p.artist)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Buscar en YouTube"
                    style={{
                      flexShrink: 0,
                      width: 34,
                      height: 34,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid #2e2e4a',
                      borderRadius: 8,
                      color: '#7a7a8f',
                      textDecoration: 'none',
                      transition: 'all .2s',
                    }}
                  >
                    <Search size={15} />
                  </a>
                </div>
              ))}
            </div>

            <button
              onClick={() => preguntar(askedText)}
              disabled={loading}
              style={{
                marginTop: 16,
                background: 'transparent',
                border: '1px solid #2e2e4a',
                color: '#7a7a8f',
                borderRadius: 8,
                padding: '8px 16px',
                fontSize: 12,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: "'JetBrains Mono', monospace",
              }}
            >
              <RotateCcw size={12} /> Preguntar otra vez
            </button>
          </div>
        )}

        {/* Footer note */}
        <div
          style={{
            marginTop: 40,
            paddingTop: 20,
            borderTop: '1px solid #22223a',
            fontSize: 11,
            color: '#4a4a60',
            lineHeight: 1.8,
            textAlign: 'center',
          }}
        >
          <Radio size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 6 }} />
          Esto es Claude (Sonnet) llamado en vivo, razonando sobre tus 1.388 canciones reales — no hay
          nada precocinado. Para que esto funcione en brm.worldmos.world de verdad, hace falta un pequeño
          paso más: te lo explico al lado de este demo.
        </div>
      </div>
    </div>
  );
}
