import { CheckIcon, MinusIcon } from './Icons.jsx'

const filas = [
  { caracteristica: 'Precio', basica: '$250 MXN / mes', premium: '$450 MXN / mes' },
  { caracteristica: 'Certificado digital', basica: true, premium: true },
  { caracteristica: 'Foto mensual del ajolote', basica: true, premium: true },
  { caracteristica: 'Visita presencial anual', basica: false, premium: true },
  { caracteristica: 'Actualizaciones mensuales del biólogo', basica: false, premium: true },
]

function Celda({ valor }) {
  if (typeof valor === 'boolean') {
    return valor ? (
      <CheckIcon className="w-5 h-5 text-teal-600 mx-auto" />
    ) : (
      <MinusIcon className="w-5 h-5 text-teal-950/30 mx-auto" />
    )
  }
  return <span className="font-semibold text-teal-950">{valor}</span>
}

export default function PlanesTabla() {
  return (
    <section id="planes" className="py-20 bg-sand-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-11">
          <span className="inline-block bg-teal-600/10 text-teal-600 border border-teal-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            Compara los planes
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-teal-950">
            Adopción básica vs. premium
          </h2>
        </div>

        <div className="overflow-x-auto bg-cream-50 rounded-2xl border border-teal-950/10">
          <table className="w-full text-sm border-collapse min-w-[480px]">
            <thead>
              <tr className="border-b border-teal-950/10">
                <th scope="col" className="text-left font-display font-semibold text-teal-950 px-6 py-4">
                  Característica
                </th>
                <th scope="col" className="font-display font-semibold text-teal-950 px-6 py-4">
                  Básica
                </th>
                <th scope="col" className="font-display font-semibold text-teal-950 px-6 py-4">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody>
              {filas.map((fila) => (
                <tr key={fila.caracteristica} className="border-b border-teal-950/5 last:border-0">
                  <th scope="row" className="text-left font-normal text-teal-950/70 px-6 py-4">
                    {fila.caracteristica}
                  </th>
                  <td className="text-center px-6 py-4">
                    <Celda valor={fila.basica} />
                  </td>
                  <td className="text-center px-6 py-4">
                    <Celda valor={fila.premium} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
