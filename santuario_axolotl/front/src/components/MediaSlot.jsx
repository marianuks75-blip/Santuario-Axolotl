import { useState } from 'react'

/**
 * MediaSlot: espacio de imagen "a prueba de balas".
 * - Intenta cargar la imagen real en `src`.
 * - Si no existe todavía (404), muestra un placeholder ilustrado con
 *   el nombre de archivo esperado, para que sea obvio dónde colocar la foto.
 *
 * Así puedes lanzar el sitio sin fotos y luego ir agregándolas una a una
 * en /public/images sin tocar código.
 */
export default function MediaSlot({ src, alt, className = '', ratio = 'aspect-[4/3]', rounded = 'rounded-2xl' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`${ratio} ${rounded} ${className} bg-gradient-to-br from-turquoise-200 to-pink-300 flex flex-col items-center justify-center gap-2 text-teal-800/70 border border-dashed border-teal-800/20`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-8 h-8 opacity-70">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <circle cx="9" cy="10" r="1.6" />
          <path d="m21 17-6-5-4 4-3-2-5 4" />
        </svg>
        <span className="text-[11px] font-medium text-center px-3 leading-snug">
          Coloca aquí tu imagen:<br /><code className="opacity-80">{src}</code>
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFailed(true)}
      className={`${ratio} ${rounded} ${className} w-full object-cover`}
    />
  )
}
