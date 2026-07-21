import { aliados } from '../data/site.js'
import MediaSlot from './MediaSlot.jsx'

export default function Partners() {
  return (
    <section id="aliados" className="py-20 bg-sand-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-11">
          <span className="inline-block bg-teal-600/10 text-teal-600 border border-teal-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            Aliados estratégicos
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-teal-950">
            Instituciones y comunidad que hacen esto posible
          </h2>
          <p className="text-teal-950/60 mt-3">
            Trabajamos junto a organizaciones dedicadas a la conservación del ajolote y de los humedales de Xochimilco.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aliados.map((a) => (
            <div key={a.id} className="bg-cream-50 rounded-2xl border border-teal-950/10 p-6 flex flex-col gap-3.5">
              <MediaSlot src={a.logo} alt={a.nombre} ratio="aspect-[3/2]" rounded="rounded-xl" className="bg-white" />
              <h3 className="font-display font-semibold text-teal-950">{a.nombre}</h3>
              <p className="text-sm text-teal-950/60 flex-1">{a.descripcion}</p>
              {a.url && (
                <a
                  href={a.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-semibold text-teal-600 hover:text-pink-400 transition-colors"
                >
                  Visitar sitio →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
