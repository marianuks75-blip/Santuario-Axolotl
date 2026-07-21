# Santuario Axolotl — Frontend (React + Vite + Tailwind)

## Instalación

```bash
cd front
npm install
cp .env.example .env
```

Edita `.env` con tu número de WhatsApp, correo y la URL de tu backend.

## Desarrollo

```bash
npm run dev
```

Abre http://localhost:5173

## Producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para subir a cualquier hosting estático
(Netlify, Vercel, hosting compartido, etc.).

## Estructura

```
src/
  components/   Header, Hero, Featured, Catalog, Offers, About, Contact, Footer...
  data/         products.js — catálogo, destacados y ofertas (edítalo aquí)
  config.js     número de WhatsApp, correo y URL del backend
public/images/  coloca aquí tus fotos reales (ver images/README.md)
```

## Imágenes

Revisa `public/images/README.md` para la lista exacta de archivos que
el sitio espera. Mientras no exista una imagen, se muestra un
placeholder ilustrado — el sitio nunca se ve roto.
