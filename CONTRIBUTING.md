# CONTRIBUTING

Guía rápida para contribuir al Worker / BRM World.

Desarrollo local

- Usa Miniflare o Wrangler localmente para probar el Worker:
  - `npx miniflare ./worker.js` o `wrangler dev`

Pruebas y QA

- Verifica timeouts y comportamientos con upstream lentos.
- Prueba CORS variando el header `Origin`.
- Si se integra con YouTube, configura la variable `YOUTUBE_API_KEY` como secreto en tu entorno de despliegue.

Proceso de Pull Request

1. Crea una rama desde `main`.
2. Realiza cambios y añade pruebas manuales o unitarias cuando sea posible.
3. Abre un PR con descripción clara y pasos de verificación.

Notas

- No subas secretos en el repositorio.
- Documenta cualquier variable de entorno necesaria para la integración.
