/**
 * Catálogo de productos por categoría.
 * `imagen` apunta a /public/images/productos/... — coloca ahí tus fotos reales
 * con el mismo nombre de archivo, o cambia la ruta si prefieres otro nombre.
 * Mientras no exista la imagen, se muestra un ícono ilustrado de respaldo.
 */

export const categorias = [
  {
    id: 'adopciones',
    nombre: 'Adopciones simbólicas',
    productos: [
      {
        id: 'adopcion-basica',
        nombre: 'Adopción básica',
        descripcion: 'Certificado digital + foto de tu ajolote apadrinado.',
        precio: '$250 MXN / mes',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR5k6qB4c7-onMlp9v_WFMF3-tV1MAO0zy-rRXw9IGfUJUkpkycRj4-O8m&s=10',
      },
      {
        id: 'adopcion-premium',
        nombre: 'Adopción premium',
        descripcion: 'Incluye visita presencial anual y actualizaciones mensuales.',
        precio: '$450 MXN / mes',
        imagen: 'https://images.squarespace-cdn.com/content/v1/642aad42f005675eac0b91ed/1712608057294-CSG4Q5SB8OSFWYVSD4KE/Ajolote+AIC.jpg',
      },
    ],
  },
  {
    id: 'alimento',
    nombre: 'Alimento vivo y balanceado',
    productos: [
      {
        id: 'tubifex',
        nombre: 'Tubifex vivo (100g)',
        descripcion: 'Alimento vivo rico en proteína, entrega refrigerada.',
        precio: '$80 MXN',
        imagen: 'https://http2.mlstatic.com/D_Q_NP_2X_656779-MLA99908353061_112025-T.webp',
      },
      {
        id: 'pellet',
        nombre: 'Pellet balanceado (250g)',
        descripcion: 'Formulado para ajolotes juveniles y adultos.',
        precio: '$150 MXN',
        imagen: 'https://http2.mlstatic.com/D_NQ_NP_908581-MLM72365160937_102023-O.webp',
      },
    ],
  },
  {
    id: 'accesorios',
    nombre: 'Accesorios de acuario',
    productos: [
      {
        id: 'filtro',
        nombre: 'Filtro de baja corriente',
        descripcion: 'Ideal para ajolotes: mantiene el agua limpia sin generar oleaje.',
        precio: '$390 MXN',
        imagen: 'https://m.media-amazon.com/images/I/61Svq+utA6L._AC_UF1000,1000_QL80_.jpg',
      },
      {
        id: 'termometro',
        nombre: 'Termómetro digital',
        descripcion: 'Monitorea la temperatura ideal (16–18°C) del acuario.',
        precio: '$110 MXN',
        imagen: 'https://i5.walmartimages.com/asr/f0e5b2b1-2620-4655-8049-bff890bbd3f5.5abab93a4eb07f1219e3e1037d936f78.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF',
      },
    ],
  },
  {
    id: 'limpieza',
    nombre: 'Limpieza y mantenimiento',
    productos: [
      {
        id: 'acondicionador',
        nombre: 'Acondicionador de agua',
        descripcion: 'Elimina cloro y metales pesados del agua de la llave.',
        precio: '$135 MXN',
        imagen: 'https://www.petco.com.mx/medias/105049.jpg?context=bWFzdGVyfGltYWdlc3wyNDczOTl8aW1hZ2UvanBlZ3xhVzFoWjJWekwyaGlNUzlvTW1Fdk9UUXdNREF4T0Rjek1UQXpPQzVxY0djfDQ4NGViOWZjZThjNDQzMTMwMzkzMDllOTU5MmVmYWRhYzA5NTNjYThlYzcyOTVlZmQyNjY1ZGRlMjYwZWM4MTE',
      },
      {
        id: 'sifon',
        nombre: 'Sifón limpia-grava',
        descripcion: 'Para retirar sedimentos sin estresar al ajolote.',
        precio: '$180 MXN',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRqiRSEsvHmsCUkgcwtM4ZQCUo7LemyoVtQ-x31Ef8SOiiVoCxTiP-CpI&s=10',
      },
    ],
  },
  {
    id: 'souvenirs',
    nombre: 'Souvenirs y hogar',
    productos: [
      {
        id: 'peluche',
        nombre: 'Peluche ajolote',
        descripcion: 'Peluche bordado a mano, 25cm, apoya la conservación.',
        precio: '$220 MXN',
        imagen: 'https://resources.sears.com.mx/products/cdn/product-channel/50321/2025/8/27/89ca9b0eb975c1734a9172d564166793.png?scale=500&qlty=75',
      },
      {
        id: 'taza',
        nombre: 'Taza "Salvemos al ajolote"',
        descripcion: 'Cerámica, 350ml, diseño exclusivo del santuario.',
        precio: '$150 MXN',
        imagen: 'https://i.etsystatic.com/14255513/r/il/60e7d5/3275933007/il_570xN.3275933007_cx8a.jpg',
      },
    ],
  },
]

export const destacados = [
  {
    id: 'adopcion-simbolica',
    nombre: 'Adopción simbólica',
    descripcion: 'Apadrina a un ajolote del santuario y recibe un certificado con su nombre.',
    precio: 'Desde $250 MXN',
    imagen: 'https://img.chilango.com/cdn-cgi/image/width=1200,height=675,quality=75,format=auto,onerror=redirect/2025/12/unam-abre-campana-adoptar-ajolote-xochimilco.jpg',
  },
  {
    id: 'visita-guiada',
    nombre: 'Visita guiada',
    descripcion: 'Recorrido de 45 minutos por los estanques con explicación de un biólogo.',
    precio: '$120 MXN por persona',
    imagen: 'https://offloadmedia.feverup.com/cdmxsecreta.com/wp-content/uploads/2023/10/22175643/acuario-michin-cdmx-1.jpg',
  },
  {
    id: 'tubifex-destacado',
    nombre: 'Alimento vivo (tubifex)',
    descripcion: 'Ración semanal de alimento vivo para ajolotes en casa, refrigerado.',
    precio: '$80 MXN',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS4E8lnOcBMO_ntwH4bdX5PPrZE99sz43fLiKA_jf1PA&s=10',
  },
]

export const ofertas = [
  {
    id: 'primer-contacto',
    tag: '-15%',
    nombre: 'Paquete "Primer contacto"',
    descripcion: 'Visita guiada + adopción básica por un mes.',
  },
  {
    id: 'cuidador-en-casa',
    tag: '-20%',
    nombre: 'Paquete "Cuidador en casa"',
    descripcion: 'Filtro + termómetro + acondicionador de agua.',
  },
  {
    id: 'regalo-consciente',
    tag: '-10%',
    nombre: 'Paquete "Regalo consciente"',
    descripcion: 'Peluche + taza + adopción básica de un mes.',
  },
]
