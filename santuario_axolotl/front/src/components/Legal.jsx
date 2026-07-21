import { CONFIG } from '../config.js'

export default function Legal() {
  return (
    <section id="legal" className="py-20 bg-sand-100">
      <div className="max-w-3xl mx-auto px-6">
        <div className="mb-9">
          <span className="inline-block bg-teal-600/10 text-teal-600 border border-teal-600/20 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            Legal
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-teal-950">
            Aviso de privacidad y términos legales
          </h2>
        </div>

        {/* Anclas internas: llevan a los encabezados de abajo dentro de esta misma sección */}
        <nav className="flex gap-5 mb-10 text-sm font-semibold">
          <a href="#aviso-privacidad" className="text-teal-600 hover:text-pink-400 transition-colors">
            Ir a Aviso de privacidad
          </a>
          <a href="#terminos-legales" className="text-teal-600 hover:text-pink-400 transition-colors">
            Ir a Términos y condiciones
          </a>
        </nav>

        <div id="aviso-privacidad" className="scroll-mt-24 mb-12">
          <h3 className="font-display font-semibold text-xl text-teal-950 mb-3">Aviso de privacidad</h3>
          <p className="text-teal-950/70 text-sm leading-relaxed mb-4">
            {CONFIG.nombreSitio} recaba únicamente los datos necesarios para responder tus solicitudes de contacto y
            gestionar adopciones simbólicas. Estos datos se usan para:
          </p>
          <ul className="grid gap-2 mb-4">
            <li className="flex items-start gap-2.5 text-sm text-teal-950/70">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
              Responder mensajes enviados desde el formulario de contacto o WhatsApp.
            </li>
            <li className="flex items-start gap-2.5 text-sm text-teal-950/70">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
              Enviar actualizaciones sobre el ajolote adoptado, cuando aplique.
            </li>
            <li className="flex items-start gap-2.5 text-sm text-teal-950/70">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400 mt-2 shrink-0" />
              Coordinar visitas guiadas y confirmar pedidos de tienda.
            </li>
          </ul>
          <p className="text-teal-950/70 text-sm leading-relaxed">
            No compartimos tus datos con terceros ajenos al santuario. Puedes solicitar la eliminación de tu
            información escribiendo a{' '}
            <a href={`mailto:${CONFIG.correoContacto}`} className="text-teal-600 underline">
              {CONFIG.correoContacto}
            </a>
            .
          </p>
        </div>

        <div id="terminos-legales" className="scroll-mt-24">
          <h3 className="font-display font-semibold text-xl text-teal-950 mb-3">Términos y condiciones</h3>
          <ol className="grid gap-3 list-decimal list-inside marker:text-teal-600 marker:font-semibold">
            <li className="text-sm text-teal-950/70">
              Las "adopciones" ofrecidas son simbólicas: no implican la entrega física del animal.
            </li>
            <li className="text-sm text-teal-950/70">
              Los precios mostrados están en pesos mexicanos (MXN) e incluyen IVA.
            </li>
            <li className="text-sm text-teal-950/70">
              Las visitas guiadas están sujetas a disponibilidad de horario y cupo del santuario.
            </li>
            <li className="text-sm text-teal-950/70">
              Los pedidos de tienda se confirman por WhatsApp antes de procesar cualquier pago.
            </li>
            <li className="text-sm text-teal-950/70">
              El uso de este sitio implica la aceptación de este aviso de privacidad y estos términos.
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
