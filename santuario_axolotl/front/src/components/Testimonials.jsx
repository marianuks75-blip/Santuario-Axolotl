import { testimonios, logros } from '../data/site.js'
import MediaSlot from './MediaSlot.jsx'

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 bg-teal-950 text-cream-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-11">
          <span className="inline-block bg-pink-400/15 text-pink-300 border border-pink-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            Testimonios
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">
            Lo que dice quien ya nos visitó o adoptó
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {testimonios.map((t) => (
            <figure key={t.id} className="bg-cream-50/5 border border-cream-50/15 rounded-2xl p-6 flex flex-col gap-4">
              <blockquote className="text-turquoise-200 text-sm leading-relaxed">“{t.texto}”</blockquote>
              <figcaption className="flex items-center gap-3 mt-auto">
                <MediaSlot src={t.avatar} alt={t.nombre} ratio="aspect-square" rounded="rounded-full" className="w-11" />
                <div>
                  <strong className="block text-cream-50 text-sm">{t.nombre}</strong>
                  <span className="text-xs text-turquoise-200/80">{t.rol}</span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="bg-cream-50/5 border border-cream-50/15 rounded-2xl p-8">
          <h3 className="font-display font-semibold text-lg mb-4">Casos de éxito, en números</h3>
          <ol className="grid gap-3 list-decimal list-inside marker:text-pink-300 marker:font-semibold">
            {logros.map((logro) => (
              <li key={logro} className="text-turquoise-200 text-sm">
                {logro}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
