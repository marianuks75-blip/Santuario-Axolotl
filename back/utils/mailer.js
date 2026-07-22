import nodemailer from 'nodemailer'

export function createTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 465),
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })
}

export function buildContactEmail({ nombre, correo, mensaje }) {
  return {
    from: `"Sitio Santuario Axolotl" <${process.env.SMTP_USER}>`,
    to: process.env.CORREO_DESTINO,
    replyTo: correo,
    subject: `Nuevo mensaje de contacto — ${nombre}`,
    text: `Nombre: ${nombre}\nCorreo: ${correo}\n\nMensaje:\n${mensaje}`,
    html: `
      <div style="font-family: sans-serif; line-height:1.6;">
        <h2 style="color:#0F4642;">Nuevo mensaje desde el sitio web</h2>
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje.replace(/\n/g, '<br/>')}</p>
      </div>
    `,
  }
}
