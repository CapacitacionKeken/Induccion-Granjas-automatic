# Plataforma de Capacitación Institucional

Repositorio con una implementación simple y profesional de la plataforma solicitada.

## Características

- Registro con CURP y contraseña fija proporcionada por el programador.
- Evita registros duplicados (muestra: "El CURP ya está registrado. Inicia sesión").
- Dos presentaciones: Bioseguridad y Seguridad Industrial.
- Cada presentación tiene 2 oportunidades; si se agotan, el usuario debe esperar 2 días.
- Reproducción obligatoria de videos Vimeo; se habilita botón al terminar.
- Redirección a formularios de Microsoft Forms tras ver el video.
- Diseño con apariencia institucional (colores, tipografía, botones).

## Archivos principales

- `index.html`, `register.html`, `login.html`, `opciones.html`, `bioseguridad.html`, `seg-industrial.html`
- `firebase.js` — coloque su configuración de Firebase aquí si desea usar Firestore.
- `logic.js` — lógica principal. Soporta modo demo con `localStorage`.
- `styles.css` — estilos institucionales.

## Cómo usar

1. Cambie `window.APP_FIXED_PASSWORD` en `register.html` y `login.html` al valor que desee.
2. Opcionalmente configure Firebase en `firebase.js` y ponga `window.useFirebase = true` junto con la inicialización.
3. Suba el contenido a GitHub y habilite GitHub Pages si desea acceso público.

## Notas de seguridad

- La contraseña fija es solo para entornos controlados; para producción se recomienda un sistema de autenticación más seguro.
- Si usa Firebase, asegúrese de reglas de seguridad para Firestore.

