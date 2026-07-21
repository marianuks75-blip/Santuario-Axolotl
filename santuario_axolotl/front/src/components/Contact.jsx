import { useState } from 'react'
import { WhatsappIcon, EmailIcon, ClockIcon, PinIcon } from './Icons.jsx'
import { CONFIG, buildWhatsappLink, buildMailtoLink, buildMapEmbedSrc } from '../config.js'

const numeroFormateado = CONFIG.whatsappNumero.replace(/^(\d{2})(\d{2,3})(\d{3})(\d{4})$/, '+$1 $2 $3 $4')

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', correo: '', mensaje: '' })
  const [estado, setEstado] = useState('idle') // idle | enviando | ok | error

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setEstado('enviando')
    try {
      const res = await fetch(`${CONFIG.apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Respuesta no exitosa del servidor')
      setEstado('ok')
      setForm({ nombre: '', correo: '', mensaje: '' })
    } catch (err) {
      // Si el backend no está disponible, ofrecemos el fallback de mailto
      setEstado('error')
    }
  }

  return (
    <section id="contacto" className="py-20 bg-teal-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-11">
          <span className="inline-block bg-pink-400/15 text-pink-300 border border-pink-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            Contacto
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-cream-50">Ven a conocernos o escríbenos</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-teal-950 border border-cream-50/10 rounded-[28px] p-8 md:p-10">
            <ul className="grid gap-5 mb-7">
              <li className="flex gap-3.5 items-start">
                <WhatsappIcon className="w-5 h-5 text-pink-300 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-cream-50 text-sm">WhatsApp</strong>
                  <span className="text-turquoise-200 text-sm">{numeroFormateado}</span>
                </div>
              </li>
              <li className="flex gap-3.5 items-start">
                <EmailIcon className="w-5 h-5 text-pink-300 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-cream-50 text-sm">Correo</strong>
                  <span className="text-turquoise-200 text-sm">{CONFIG.correoContacto}</span>
                </div>
              </li>
              <li className="flex gap-3.5 items-start">
                <ClockIcon className="w-5 h-5 text-pink-300 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-cream-50 text-sm">Horario</strong>
                  <span className="text-turquoise-200 text-sm">{CONFIG.horario}</span>
                </div>
              </li>
              <li className="flex gap-3.5 items-start">
                <PinIcon className="w-5 h-5 text-pink-300 mt-0.5 shrink-0" />
                <div>
                  <strong className="block text-cream-50 text-sm">Ubicación</strong>
                  <span className="text-turquoise-200 text-sm">{CONFIG.ubicacion}</span>
                </div>
              </li>
            </ul>
            <div className="flex flex-wrap gap-3.5">
              <a
                href={buildWhatsappLink('Hola, quiero enviarles un mensaje 🦎')}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#25D366] text-teal-950 px-5 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 transition-transform"
              >
                <WhatsappIcon className="w-4 h-4" />
                Enviar mensaje por WhatsApp
              </a>
              <a
                href={buildMailtoLink('Contacto desde el sitio web', 'Hola, quisiera comunicarme con el santuario.')}
                className="inline-flex items-center gap-2.5 border border-cream-50/40 text-cream-50 px-5 py-3 rounded-full font-semibold text-sm hover:bg-cream-50/10 transition-colors"
              >
                <EmailIcon className="w-4 h-4" />
                Enviar correo
              </a>
            </div>
          </div>

          {/* Formulario que se conecta al backend Node/Express (POST /api/contact) */}
          <form onSubmit={handleSubmit} className="bg-cream-50 rounded-[28px] p-8 md:p-10 flex flex-col gap-4">
            <div>
              <label className="block text-sm font-semibold text-teal-950 mb-1.5" htmlFor="nombre">Nombre</label>
              <input
                id="nombre" name="nombre" required value={form.nombre} onChange={handleChange}
                className="w-full rounded-xl border border-teal-950/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise-400"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-teal-950 mb-1.5" htmlFor="correo">Correo</label>
              <input
                id="correo" name="correo" type="email" required value={form.correo} onChange={handleChange}
                className="w-full rounded-xl border border-teal-950/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise-400"
                placeholder="tu@correo.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-teal-950 mb-1.5" htmlFor="mensaje">Mensaje</label>
              <textarea
                id="mensaje" name="mensaje" required value={form.mensaje} onChange={handleChange} rows={4}
                className="w-full rounded-xl border border-teal-950/15 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-turquoise-400"
                placeholder="¿En qué podemos ayudarte?"
              />
            </div>

            <button
              type="submit"
              disabled={estado === 'enviando'}
              className="mt-1 bg-teal-800 hover:bg-teal-600 disabled:opacity-60 text-cream-50 font-semibold rounded-full py-3.5 transition-colors"
            >
              {estado === 'enviando' ? 'Enviando…' : 'Enviar mensaje'}
            </button>

            {estado === 'ok' && (
              <p className="text-teal-600 text-sm font-medium">¡Mensaje enviado! Te responderemos pronto.</p>
            )}
            {estado === 'error' && (
              <p className="text-sm font-medium text-pink-400">
                No pudimos conectar con el servidor. Puedes escribirnos por{' '}
                <a className="underline" href={buildMailtoLink('Contacto desde el sitio web', form.mensaje)}>correo</a>{' '}
                mientras tanto.
              </p>
            )}
          </form>
        </div>

        {/* Mapa interactivo — se puede reemplazar por un embed con API key propia si se prefiere */}
        <div className="mt-8">
          <iframe
            title={`Ubicación de ${CONFIG.nombreSitio}`}
            src={buildMapEmbedSrc(CONFIG.ubicacion)}
            className="w-full h-72 rounded-2xl border border-cream-50/15"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}
