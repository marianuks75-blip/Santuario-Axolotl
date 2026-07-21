import MediaSlot from './MediaSlot.jsx'
import { WhatsappIcon } from './Icons.jsx'
import { buildWhatsappLink } from '../config.js'

export default function ProductCard({ producto }) {
  return (
    <div className="bg-cream-50 rounded-2xl border border-teal-950/10 overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/10">
      <MediaSlot src={producto.imagen} alt={producto.nombre} rounded="rounded-none" />
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-display font-semibold text-lg text-teal-950">{producto.nombre}</h3>
        <p className="text-sm text-teal-950/60 flex-1">{producto.descripcion}</p>
        <span className="font-display font-semibold text-xl text-teal-600 mt-1">{producto.precio}</span>
        <a
          href={buildWhatsappLink(`Hola, quiero pedir: ${producto.nombre} 🦎`)}
          target="_blank"
          rel="noreferrer"
          className="mt-2.5 inline-flex items-center justify-center gap-2 bg-[#25D366] text-teal-950 font-semibold text-sm px-3.5 py-2.5 rounded-full hover:brightness-95 transition"
        >
          <WhatsappIcon className="w-4 h-4" />
          Pedir por WhatsApp
        </a>
      </div>
    </div>
  )
}
