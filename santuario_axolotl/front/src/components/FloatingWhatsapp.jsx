import { WhatsappIcon } from './Icons.jsx'
import { buildWhatsappLink } from '../config.js'

export default function FloatingWhatsapp() {
  return (
    <a
      href={buildWhatsappLink('Hola, quiero más información del santuario 🦎')}
      target="_blank"
      rel="noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-xl shadow-black/25"
    >
      <WhatsappIcon className="w-7 h-7 text-teal-950" />
    </a>
  )
}
