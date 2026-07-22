import { Router } from 'express'
import { createTransporter, buildContactEmail } from '../utils/mailer.js'

const router = Router()

router.post('/contact', async (req, res) => {
  const { nombre, correo, mensaje } = req.body || {}

  if (!nombre || !correo || !mensaje) {
    return res.status(400).json({ ok: false, error: 'Faltan campos: nombre, correo y mensaje son obligatorios.' })
  }

  try {
    const transporter = createTransporter()
    const email = buildContactEmail({ nombre, correo, mensaje })
    await transporter.sendMail(email)
    return res.json({ ok: true })
  } catch (err) {
    console.error('Error enviando correo:', err.message)
    return res.status(500).json({ ok: false, error: 'No se pudo enviar el correo en este momento.' })
  }
})

export default router
