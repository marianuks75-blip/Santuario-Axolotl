import { galeria } from '../data/site.js'
import MediaSlot from './MediaSlot.jsx'
import VideoSlot from './VideoSlot.jsx'

export default function Gallery() {
  return (
    <section id="galeria" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-xl mb-11">
          <span className="inline-block bg-pink-400/15 text-pink-400 border border-pink-400/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            Galería
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-teal-950">
            Un vistazo al santuario y a sus habitantes
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galeria.map((foto) => (
            <MediaSlot key={foto.id} src={foto.src} alt={foto.alt} ratio="aspect-[4/3]" rounded="rounded-xl" />
          ))}
        </div>

        <div className="mt-14">
          <h3 className="font-display font-semibold text-xl text-teal-950 mb-4 text-center">
            ¿Quires Saber Mas?
          </h3>
          <div className="max-w-2xl mx-auto">
            {/* Coloca aquí tu video real: /public/videos/recorrido-santuario.mp4 */}
            <VideoSlot
              src="/VID/videoplayback.mp4"
              poster="/images/galeria/video-poster.jpg"
              ratio="aspect-video"
              rounded="rounded-2xl"
              autoPlay
              muted
              loop
              playsInline
              controls={false}
            />
          </div>
        </div>
      </div>
    </section>
  )
}