import { WhatsappIcon, EmailIcon, GillDivider } from './Icons.jsx'
import { buildWhatsappLink, buildMailtoLink } from '../config.js'

export default function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-b from-teal-950 via-teal-800 to-turquoise-400 text-cream-50 pt-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pb-16 grid md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        <div>
          <span className="inline-flex items-center gap-2 bg-pink-400/15 text-pink-300 border border-pink-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide mb-5">
            🦎 Refugio de conservación &amp; tienda
          </span>
          <h1 className="font-display font-semibold leading-[1.08] text-4xl md:text-5xl mb-4">
            Un hogar seguro para el <em className="italic text-pink-300">ajolote</em> mexicano
          </h1>
          <p className="text-turquoise-200 text-lg max-w-md mb-8">
            Adopciones simbólicas, alimento, accesorios y visitas guiadas para conocer a estos anfibios únicos de Xochimilco — y ayudar a que no desaparezcan.
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href={buildWhatsappLink('Hola, quiero más información del santuario 🦎')}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] text-teal-950 px-6 py-3.5 rounded-full font-semibold shadow-lg shadow-[#25D366]/30 hover:-translate-y-0.5 transition-transform"
            >
              <WhatsappIcon className="w-[19px] h-[19px]" />
              Escríbenos por WhatsApp
            </a>
            <a
              href={buildMailtoLink('Información del santuario', 'Hola, me gustaría recibir información sobre el santuario.')}
              className="inline-flex items-center gap-2.5 border border-cream-50/50 px-6 py-3.5 rounded-full font-semibold hover:bg-cream-50/10 transition-colors"
            >
              <EmailIcon className="w-[19px] h-[19px]" />
              Enviar correo
            </a>
          </div>
        </div>

        {/* Ilustración de ajolote — reemplázala por una foto real en /public/images/hero-axolotl.jpg si lo prefieres */}
        <div className="flex justify-center order-first md:order-last">
          <svg viewBox="0 0 400 400" className="w-full max-w-[320px] md:max-w-[420px] drop-shadow-2xl">
            <ellipse cx="70" cy="330" rx="5" ry="5" fill="rgba(255,251,245,0.5)" className="animate-float" />
            <ellipse cx="330" cy="300" rx="4" ry="4" fill="rgba(255,251,245,0.5)" className="animate-float" style={{ animationDelay: '1.4s' }} />
            <ellipse cx="200" cy="350" rx="3" ry="3" fill="rgba(255,251,245,0.5)" className="animate-float" style={{ animationDelay: '2.8s' }} />
            <g className="animate-sway" style={{ transformOrigin: 'center' }} transform="translate(115,150)">
              <path d="M0 0c-22-14-30-34-24-52 14 4 26 14 30 28" fill="none" stroke="#F2A9C3" strokeWidth="7" strokeLinecap="round" />
              <path d="M0 12c-24-6-38-22-36-40 15 1 28 8 34 22" fill="none" stroke="#F7C7D9" strokeWidth="6" strokeLinecap="round" />
            </g>
            <g className="animate-sway" style={{ transformOrigin: 'center', animationDelay: '0.5s' }} transform="translate(285,150) scale(-1,1)">
              <path d="M0 0c-22-14-30-34-24-52 14 4 26 14 30 28" fill="none" stroke="#F2A9C3" strokeWidth="7" strokeLinecap="round" />
              <path d="M0 12c-24-6-38-22-36-40 15 1 28 8 34 22" fill="none" stroke="#F7C7D9" strokeWidth="6" strokeLinecap="round" />
            </g>
            <path d="M110 190c0-55 35-90 90-90s90 35 90 90c0 45-20 95-90 95s-90-50-90-95z" fill="#F2A9C3" />
            <path d="M120 250c10 25 35 35 70 35s60-10 70-35" fill="none" stroke="#E28FAF" strokeWidth="3" opacity="0.5" />
            <circle cx="172" cy="175" r="7" fill="#0A2E2B" />
            <circle cx="228" cy="175" r="7" fill="#0A2E2B" />
            <circle cx="174" cy="172" r="2" fill="#fff" />
            <circle cx="230" cy="172" r="2" fill="#fff" />
            <path d="M185 205q15 10 30 0" stroke="#0A2E2B" strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M110 260c-30 8-55 30-55 55M290 260c30 8 55 30 55 55" stroke="#F2A9C3" strokeWidth="14" strokeLinecap="round" fill="none" />
            <path d="M175 285c-10 25-10 55 5 75M225 285c10 25 10 55-5 75" stroke="#F2A9C3" strokeWidth="14" strokeLinecap="round" fill="none" />
          </svg>
        </div>
      </div>
      <GillDivider fill="#FFFBF5" />
    </section>
  )
}
