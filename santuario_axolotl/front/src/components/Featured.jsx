import { destacados } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function Featured() {
  return (
    <section id="destacados" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-11">
          <span className="inline-block bg-teal-600/10 text-teal-600 border border-teal-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            Destacados
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-teal-950">Lo más pedido esta semana</h2>
          <p className="text-teal-950/60 mt-3">Una selección rápida para quienes visitan por primera vez el santuario.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destacados.map((p) => (
            <ProductCard key={p.id} producto={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
