# Carpeta de imágenes

Coloca aquí tus fotos reales. Mientras un archivo no exista, la página
muestra automáticamente un placeholder ilustrado con el nombre exacto
que espera, así que no hay que tocar código: solo agrega el archivo
con el nombre indicado.

## Imágenes esperadas

- `hero-visita.jpg` — foto para la tarjeta "Visita guiada" en Destacados
- `nosotros.jpg` — foto del santuario/instalaciones (sección Nosotros)
- `productos/adopcion-basica.jpg`
- `productos/adopcion-premium.jpg`
- `productos/tubifex.jpg`
- `productos/pellet.jpg`
- `productos/filtro.jpg`
- `productos/termometro.jpg`
- `productos/acondicionador.jpg`
- `productos/sifon.jpg`
- `productos/peluche.jpg`
- `productos/taza.jpg`
- `aliados/conanp.png`
- `aliados/ib-unam.png`
- `aliados/ramsar.png`
- `aliados/xochimilco-vive.png`
- `galeria/estanques.jpg`
- `galeria/ajolote-juvenil.jpg`
- `galeria/visita-guiada.jpg`
- `galeria/reproduccion.jpg`
- `galeria/taller-educativo.jpg`
- `galeria/canales.jpg`
- `galeria/video-poster.jpg` — imagen de portada del video de la Galería
- `testimonios/renata.jpg`
- `testimonios/familia-torres.jpg`
- `testimonios/mateo.jpg`

## Video

- `/public/videos/recorrido-santuario.mp4` — video del recorrido que se
  muestra en la sección Galería (mismo comportamiento de placeholder que
  las imágenes: si no existe, se muestra un aviso con la ruta esperada).

## Recomendaciones

- Formato JPG o WebP, relación de aspecto 4:3 para productos, 1:1 para "Nosotros".
- Peso ideal: menos de 300 KB por imagen (comprime con squoosh.app o similar).
- Los logos de "Aliados" funcionan mejor en PNG con fondo transparente.
- Si quieres agregar más fotos o testimonios, edita `src/data/site.js` y
  `src/data/products.js`, y los componentes en `src/components/`.
