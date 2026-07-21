import { CONFIG } from '../config.js'
import { aliados } from '../data/site.js'
import { FacebookIcon, InstagramIcon, TiktokIcon, YoutubeIcon } from './Icons.jsx'

const enlacesExternos = aliados.filter((a) => a.url)

export default function Footer() {
  return (
    <footer className="bg-teal-950 text-turquoise-200 py-10 text-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-9 sm:grid-cols-3 text-center sm:text-left mb-8">
          <div>
            <span className="font-display font-bold text-cream-50 block mb-3">{CONFIG.nombreSitio}</span>
            <nav aria-label="Mapa del sitio">
              <ul className="grid gap-2">
                <li><a href="#inicio" className="hover:text-pink-300">Inicio</a></li>
                <li><a href="#catalogo" className="hover:text-pink-300">Catálogo</a></li>
                <li><a href="#nosotros" className="hover:text-pink-300">Nosotros</a></li>
                <li><a href="#galeria" className="hover:text-pink-300">Galería</a></li>
                <li><a href="#contacto" className="hover:text-pink-300">Contacto</a></li>
              </ul>
            </nav>
          </div>

          <div>
            <span className="font-display font-bold text-cream-50 block mb-3">Síguenos</span>
            <div className="flex justify-center sm:justify-start gap-3.5 mb-4">
              <a href={CONFIG.redes.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-pink-300">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href={CONFIG.redes.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-pink-300">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href={CONFIG.redes.tiktok} target="_blank" rel="noreferrer" aria-label="TikTok" className="hover:text-pink-300">
                <TiktokIcon className="w-5 h-5" />
              </a>
              <a href={CONFIG.redes.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="hover:text-pink-300">
                <YoutubeIcon className="w-5 h-5" />
              </a>
            </div>
            <span className="font-display font-bold text-cream-50 block mb-2">Enlaces externos</span>
            <ul className="grid gap-1.5">
              {enlacesExternos.map((a) => (
                <li key={a.id}>
                  <a href={a.url} target="_blank" rel="noreferrer" className="hover:text-pink-300">
                    {a.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <span className="font-display font-bold text-cream-50 block mb-3">Legal</span>
            <ul className="grid gap-2">
              <li><a href="#aviso-privacidad" className="hover:text-pink-300">Aviso de privacidad</a></li>
              <li><a href="#terminos-legales" className="hover:text-pink-300">Términos y condiciones</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream-50/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p>© {new Date().getFullYear()} {CONFIG.nombreSitio} · Protegiendo al ajolote mexicano, uno a la vez.</p>
          {/* Ancla que regresa al inicio de la página */}
          <a href="#inicio" className="font-semibold hover:text-pink-300">↑ Volver arriba</a>
        </div>
      </div>
    </footer>
  )
}
