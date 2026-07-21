import { categorias } from '../data/products.js'
import ProductCard from './ProductCard.jsx'

export default function Catalog() {
  return (
    <section id="catalogo" className="py-20 bg-sand-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-11">
          <span className="inline-block bg-teal-600/10 text-teal-600 border border-teal-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            Catálogo
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-teal-950">
            Todo lo que necesitas para cuidar a un ajolote
          </h2>
          <p className="text-teal-950/60 mt-3">
            Organizado por categoría. Cada producto se pide directamente por WhatsApp con un mensaje ya redactado.
          </p>
        </div>

        {categorias.map((cat) => (
          <div key={cat.id} className="mb-14">
            <h3 className="font-display font-semibold text-xl text-teal-950 flex items-center gap-2.5 mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-400 inline-block" />
              {cat.nombre}
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {cat.productos.map((p) => (
                <ProductCard key={p.id} producto={p} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
