import { useState } from 'react'
import { AxolotlMark, WhatsappIcon } from './Icons.jsx'
import { CONFIG, buildWhatsappLink } from '../config.js'

const links = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#catalogo', label: 'Catálogo' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#aliados', label: 'Aliados' },
  { href: '#galeria', label: 'Galería' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur border-b border-teal-950/10">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <AxolotlMark className="w-10 h-10 shrink-0" />
          <span className="font-display font-bold text-xl text-teal-800">{CONFIG.nombreSitio}</span>
        </div>

        <nav className="hidden lg:block">
          <ul className="flex flex-wrap gap-5">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-semibold text-sm text-teal-800 hover:text-pink-400 transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={buildWhatsappLink('Hola, me gustaría más información del santuario 🦎')}
          target="_blank"
          rel="noreferrer"
          className="hidden md:flex items-center gap-2 bg-teal-800 hover:bg-teal-600 text-cream-50 px-4.5 py-2.5 rounded-full text-sm font-semibold transition-colors"
        >
          <WhatsappIcon className="w-4 h-4" />
          WhatsApp
        </a>

        <button
          className="lg:hidden text-2xl text-teal-800"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>

      {open && (
        <nav className="lg:hidden bg-cream-50 border-t border-teal-950/10 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="font-semibold text-teal-800">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
