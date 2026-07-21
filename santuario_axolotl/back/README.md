# Santuario Axolotl — Backend (Node + Express)

Procesa el formulario de contacto del sitio y envía el mensaje por
correo usando Nodemailer.

## Instalación

```bash
cd back
npm install
cp .env.example .env
```

Completa `.env` con tus datos SMTP reales (Gmail, Outlook, un
proveedor como Resend/SendGrid en modo SMTP, etc.). Si usas Gmail,
necesitas generar una "contraseña de aplicación" desde tu cuenta de
Google — la contraseña normal no funciona con SMTP.

## Ejecutar

```bash
npm run dev     # con recarga automática
npm start       # producción
```

El servidor corre por defecto en http://localhost:4000

## Endpoint

`POST /api/contact`

```json
{
  "nombre": "Juan Pérez",
  "correo": "juan@correo.com",
  "mensaje": "Quiero información sobre adopciones"
}
```

Responde `{ "ok": true }` si el correo se envió correctamente.

## Notas

- El front sigue funcionando aunque el backend esté apagado: los
  botones de WhatsApp y "Enviar correo" (mailto) no dependen de este
  servidor. El backend solo es necesario para el formulario de
  contacto con envío directo de correo.
- CORS está limitado al origen definido en `FRONT_ORIGIN`.
