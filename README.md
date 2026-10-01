# THE HUB · UAY Events × NTT DATA MWC27

Nueva arquitectura narrativa del microsite.

## Estructura
- `index.html` — landing / acceso a THE HUB
- `home.html` — home editorial y hub de navegación
- `the-hub.html` — concepto creativo, storytelling, pilares y claim
- `propuestas/` — Castell de Montjuïc, Fundació Joan Miró y Terminal D
- `servicios.html` — capacidades UAY
- `about.html` — página auxiliar desde Home
- `casos-exito.html` — página auxiliar desde Home
- `js/components.js` — header y footer compartidos
- `js/main.js` — menú responsive, dropdown, reveal y fallbacks de media
- `css/base.css` — tokens, tipografía y estructura global
- `css/components.css` — componentes compartidos
- `css/pages/` — un CSS por tipo de página

## Assets que debes copiar desde el proyecto original
Mantén estas rutas para que el HTML funcione sin tocar código:

- `assets/images/Logo-UAY-Events.svg`
- `assets/images/favicon-UAY-Events.svg`
- `assets/video/this-is-why-we-are-uay.mp4`
- `assets/images/propuestas/castell/hero.jpg`, `01.jpg`, `02.jpg`, `03.jpg`
- `assets/images/propuestas/miro/hero.jpg`, `01.jpg`, `02.jpg`, `03.jpg`
- `assets/images/propuestas/terminal/hero.jpg`, `01.jpg`, `02.jpg`, `03.jpg`

Si una imagen no existe, la web muestra un fallback neutro en lugar de romper el layout.

## Header / footer
No se repiten en los HTML. Cada página contiene un `<div data-site-header>` y `<div data-site-footer>` y `js/components.js` inyecta ambos componentes. Para las páginas dentro de `/propuestas`, el `body` usa `data-root=".."`; para páginas raíz usa `data-root="."`.

## Nota
El ZIP original no estuvo disponible en el runtime al generar esta versión, por lo que no se copiaron sus imágenes ni vídeos. El código está preparado para recibirlos directamente en las rutas anteriores.


## Actualización Home + About
- Home: el acceso al concepto THE HUB se presenta como CTA independiente justo antes de las tres propuestas.
- Navegación: About se incorpora al menú principal.
- About: página adaptada al nuevo sistema de componentes, con CSS propio en `css/pages/about.css`.
- Se han recuperado del proyecto original las imágenes de About, casos de éxito y equipo, además del showreel `assets/video/uay-showreel.mp4`.
