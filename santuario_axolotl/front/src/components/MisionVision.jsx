const valores = [
  {
    titulo: 'Misión',
    texto: 'Conservar al ajolote mexicano mediante refugio, reproducción responsable y educación ambiental.',
  },
  {
    titulo: 'Visión',
    texto: 'Ser un referente de conservación de anfibios endémicos en México, abierto a la comunidad.',
  },
  {
    titulo: 'Valores',
    texto: 'Respeto por la vida silvestre, transparencia, educación y trabajo comunitario.',
  },
]

export default function MisionVision() {
  return (
    <section id="mision-vision" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-11">
          <span className="inline-block bg-pink-400/15 text-pink-400 border border-pink-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            Misión y visión
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-teal-950">
            Lo que nos mueve todos los días
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {valores.map((v) => (
            <div key={v.titulo} className="bg-cream-50 rounded-2xl p-7 border-t-4 border-pink-400 shadow-sm">
              <h3 className="font-display font-semibold text-xl text-teal-950 mb-2.5">{v.titulo}</h3>
              <p className="text-sm text-teal-950/60 leading-relaxed">{v.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
