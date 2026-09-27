# Generador de letras — Morse (PWA)

App instalable para practicar la traducción de letras a código morse y a patrón numérico configurable.

## Archivos

- `index.html` — la app
- `manifest.json` — metadata de la PWA (nombre, íconos, colores)
- `sw.js` — service worker (cache offline)
- `icons/` — íconos 192x192 y 512x512

## Requisito importante

Los navegadores solo permiten instalar una PWA y registrar el service worker si se sirve por **HTTPS** (o `localhost` en desarrollo). Abrir el `index.html` directamente desde el disco (`file://`) no habilita la instalación.

## Cómo desplegarla (elegí una opción)

### Opción 1 — GitHub Pages (gratis)
1. Subí esta carpeta a un repositorio de GitHub.
2. Andá a **Settings → Pages**.
3. En "Source" elegí la rama `main` y la carpeta raíz.
4. Guardá. En unos minutos tu PWA va a estar en `https://tu-usuario.github.io/tu-repo/`.

### Opción 2 — Netlify (gratis, drag & drop)
1. Entrá a [app.netlify.com/drop](https://app.netlify.com/drop).
2. Arrastrá esta carpeta completa.
3. Netlify te da una URL HTTPS al instante.

### Opción 3 — Vercel
```
npm i -g vercel
cd pwa
vercel
```

### Opción 4 — Probarla localmente antes de subirla
Con Python instalado, desde dentro de la carpeta `pwa`:
```
python3 -m http.server 8000
```
Después abrí `http://localhost:8000` en el navegador.

## Instalar la app
Una vez servida por HTTPS, abrí la URL desde el celu o la compu:
- **Android/Chrome**: menú → "Instalar app" o "Agregar a pantalla de inicio".
- **iOS/Safari**: botón compartir → "Agregar a pantalla de inicio".
- **Desktop/Chrome**: ícono de instalación en la barra de direcciones.

## Personalizar
- Cambiá los colores en las variables `:root` de `index.html` (`--ink`, `--brass`, etc.).
- Reemplazá los íconos en `icons/` por los tuyos (mismo tamaño: 192x192 y 512x512).
- Los valores por defecto de raya/punto/espacio (4/3/2) se editan en los inputs de la propia app.
