import { ofertas } from '../data/products.js'
import { WhatsappIcon } from './Icons.jsx'
import { buildWhatsappLink } from '../config.js'

export default function Offers() {
  return (
    <section id="ofertas" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden bg-teal-950 text-cream-50 rounded-[28px] p-10 md:p-14">
          <div className="absolute -right-16 -top-16 w-56 h-56 rounded-full bg-pink-400/25 blur-3xl" />
          <span className="relative inline-block bg-pink-400/15 text-pink-300 border border-pink-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold">
            Ofertas y promociones
          </span>
          <h2 className="relative font-display font-semibold text-3xl md:text-4xl mt-4">Paquetes especiales del mes</h2>
          <p className="relative text-turquoise-200 max-w-md mt-2.5">
            Combina adopción, visita y alimento con descuento cuando lo pides como paquete.
          </p>

          <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
            {ofertas.map((o) => (
              <div key={o.id} className="bg-cream-50/5 border border-cream-50/15 rounded-2xl p-6">
                <span className="inline-block bg-pink-400 text-teal-950 font-bold text-xs px-2.5 py-1 rounded-md mb-3">
                  {o.tag}
                </span>
                <h4 className="font-display font-semibold text-lg mb-2">{o.nombre}</h4>
                <p className="text-turquoise-200 text-sm mb-5">{o.descripcion}</p>
                <a
                  href={buildWhatsappLink(`Hola, quiero solicitar la oferta: ${o.nombre} 🦎`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] text-teal-950 px-5 py-3 rounded-full font-semibold text-sm hover:-translate-y-0.5 transition-transform"
                >
                  <WhatsappIcon className="w-4 h-4" />
                  Solicitar oferta
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
