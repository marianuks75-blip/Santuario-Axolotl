/**
 * ============================================
 * CONFIGURACIÓN RÁPIDA — edita solo esto
 * ============================================
 * También puedes definir estos valores como variables de entorno
 * en un archivo .env (ver .env.example) para no tocar el código.
 */

export const CONFIG = {
  // Número de WhatsApp con lada, sin espacios ni signos (ej. 52 + 10 dígitos)
  whatsappNumero: import.meta.env.VITE_WHATSAPP_NUMERO || '527731294659',

  // Correo de contacto (se usa como fallback si el backend no está disponible)
  correoContacto: import.meta.env.VITE_CORREO_CONTACTO || 'contacto@santuarioaxolotl.mx',

  // URL del backend (Node/Express) que procesa el formulario de contacto
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:4000',

  nombreSitio: 'Santuario Axolotl',
  horario: 'Martes a domingo, 10:00 – 17:00 hrs',
  ubicacion: 'Canales de Xochimilco, Ciudad de México',

  // Redes sociales — reemplaza por tus perfiles reales
  redes: {
    facebook: 'https://facebook.com/santuarioaxolotl',
    instagram: 'https://instagram.com/santuarioaxolotl',
    tiktok: 'https://tiktok.com/@santuarioaxolotl',
    youtube: 'https://youtube.com/@santuarioaxolotl',
  },
}

export function buildWhatsappLink(mensaje) {
  return `https://wa.me/${CONFIG.whatsappNumero}?text=${encodeURIComponent(mensaje)}`
}

export function buildMailtoLink(asunto, cuerpo) {
  return `mailto:${CONFIG.correoContacto}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`
}

// URL de Google Maps embebible (iframe) sin necesidad de API key
export function buildMapEmbedSrc(direccion) {
  return `https://www.google.com/maps?q=${encodeURIComponent(direccion)}&output=embed`
}
