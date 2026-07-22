import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import contactRoutes from './routes/contact.js'

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors({ origin: process.env.FRONT_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

app.get('/', (req, res) => {
  res.json({ ok: true, service: 'santuario-axolotl-back', status: 'corriendo' })
})

app.use('/api', contactRoutes)

app.use((req, res) => {
  res.status(404).json({ ok: false, error: 'Ruta no encontrada' })
})

app.listen(PORT, () => {
  console.log(`✅ Backend del Santuario Axolotl corriendo en http://localhost:${PORT}`)
})
