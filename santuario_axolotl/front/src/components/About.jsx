import MediaSlot from './MediaSlot.jsx'

const queHacemos = [
  'Rescatamos ejemplares en riesgo de los canales de Xochimilco.',
  'Cuidamos su reproducción en cautiverio de forma responsable.',
  'Compartimos su historia mediante visitas guiadas y talleres educativos.',
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 bg-sand-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-11">
          <span className="inline-block bg-teal-600/10 text-teal-600 border border-teal-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            Sobre nosotros
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-teal-950">
            Un refugio nacido en los canales de Xochimilco
          </h2>
        </div>

        <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-12 items-center">
          {/* Coloca aquí una foto real del santuario/negocio: /public/images/nosotros.jpg */}
          <MediaSlot
            src="https://www.trajinerasxochimilco.com.mx/wp-content/uploads/2017/04/ajolote.png"
            alt="Instalaciones del santuario"
            ratio="aspect-square"
            rounded="rounded-[28px]"
          />

          <div>
            <p className="text-teal-950/70 text-lg leading-relaxed">
              Nuestro santuario nació para proteger al ajolote (<em>Ambystoma mexicanum</em>), una especie que solo
              habita de forma silvestre en los canales de Xochimilco y que hoy está en peligro crítico de extinción.
              Rescatamos ejemplares, cuidamos su reproducción en cautiverio responsable y compartimos su historia con
              quienes nos visitan.
            </p>

            <h3 className="font-display font-semibold text-teal-950 mt-7 mb-3">Qué hacemos</h3>
            <ul className="grid gap-2.5">
              {queHacemos.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-teal-950/70 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
