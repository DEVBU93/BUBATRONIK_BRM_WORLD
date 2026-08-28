# SECURITY

Seguridad para el servicio BRM World (Worker).

Reportes

- Para vulnerabilidades críticas, utiliza GitHub Security Advisories o abre un issue marcado `security`.

Buenas prácticas para Workers

- Nunca incrustes claves de API en código. Usa `wrangler secret put SECRET_NAME` o el sistema de secretos de tu proveedor (Vercel, Cloudflare).
- Configura límites y timeouts en las llamadas salientes (ya implementados en esta rama).
- Usa políticas CORS restrictivas: whitelist de orígenes y cabecera `Vary: Origin`.
- Protege endpoints sensibles tras autenticación o tokens temporales.

Remediaciones rápidas

- Si detectas un key leak, revoca la clave y reemplázala inmediatamente.

