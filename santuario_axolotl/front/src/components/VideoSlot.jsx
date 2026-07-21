import { useState } from 'react'

/**
 * VideoSlot: igual que MediaSlot pero para <video>.
 * - Intenta cargar el video real en `src`.
 * - Si no existe todavía, muestra un placeholder con el nombre de archivo
 *   esperado, para que sea obvio dónde colocarlo (/public/videos/...).
 */
export default function VideoSlot({ src, poster, className = '', ratio = 'aspect-video', rounded = 'rounded-2xl' }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`${ratio} ${rounded} ${className} bg-gradient-to-br from-teal-800 to-turquoise-400 flex flex-col items-center justify-center gap-2 text-cream-50/90 border border-dashed border-cream-50/30`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-9 h-9 opacity-80">
          <rect x="2.5" y="6" width="19" height="12" rx="3" />
          <path d="m10.5 9.5 5 2.5-5 2.5z" fill="currentColor" stroke="none" />
        </svg>
        <span className="text-[11px] font-medium text-center px-3 leading-snug">
          Coloca aquí tu video:<br /><code className="opacity-80">{src}</code>
        </span>
      </div>
    )
  }

  return (
    <video
      controls
      poster={poster}
      onError={() => setFailed(true)}
      className={`${ratio} ${rounded} ${className} w-full bg-teal-950 object-cover`}
    >
      <source src={src} type="video/mp4" />
      Tu navegador no soporta el elemento de video.
    </video>
  )
}
