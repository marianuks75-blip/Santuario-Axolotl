/**
 * Contenido de las secciones institucionales: aliados, galería, testimonios y logros.
 * Las imágenes apuntan a /public/images/... — coloca ahí tus fotos reales
 * (ver public/images/README.md). Mientras no existan, se muestra un placeholder.
 */

export const aliados = [
  {
    id: 'conanp',
    nombre: 'CONANP',
    descripcion: 'Comisión Nacional de Áreas Naturales Protegidas.',
    url: 'https://www.gob.mx/conanp/',
    logo: 'https://elaullador.conanp.gob.mx/wp-content/uploads/2025/06/1748993533285.jpg',
  },
  {
    id: 'ib-unam',
    nombre: 'Instituto de Biología, UNAM',
    descripcion: 'Investigación sobre conservación de fauna endémica mexicana.',
    url: 'https://www.ib.unam.mx/',
    logo: 'https://www.ib.unam.mx/images/system/logo_ib_o_txt_lg.png',
  },
  {
    id: 'ramsar',
    nombre: 'Convención Ramsar',
    descripcion: 'Xochimilco forma parte de los humedales de importancia internacional.',
    url: 'https://www.ramsar.org/',
    logo: 'https://wwflac.awsassets.panda.org/img/original/ramsar_cop11logosmall_web.jpg',
  },
  {
    id: 'xochimilco-vive',
    nombre: 'Fundación Xochimilco Vive',
    descripcion: 'Aliado comunitario local para la restauración de los canales.',
    url: null,
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbyI7OXlZzLe3n7Hr-mvLELKYFpiKzpkaVLPJg9HR_Q&s',
  },
]

export const galeria = [
  { id: 'g1', alt: 'Estanques del santuario', src: 'https://i.redd.it/obzbslcn8jjz.jpg' },
  { id: 'g2', alt: 'Ajolote juvenil en cuidado', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRIddRqtAcxNv55LSw3xbEOCLo31PqseLb1Y6QC5FY6Q&s=10' },
  { id: 'g3', alt: 'Visita guiada con biólogo', src: 'https://imagenes.elpais.com/resizer/v2/OC673GZBDZEGXKE6NQNT6KJRZY.JPG?auth=c6d1fd6a5bdddde1faff1517f48ad4ffac6aed83cc7c673a20434396792fe7aa&width=414' },
  { id: 'g4', alt: 'Reproducción en cautiverio responsable', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy3yQrwHjxCpDVmVlQH9MAQnW0Yr6e3WF6bUj4HvZWig&s=10' },
  { id: 'g5', alt: 'Taller educativo con niños', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXi9w_3Z6zB00CRmEhfuDtnbD77t0g6e0YLXbQahnteAgcAxUq8SF1Va1d&s=10' },
  { id: 'g6', alt: 'Canales de Xochimilco al atardecer', src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOwFXL_WSyLIB7A6UaGVuO8-DtJnjjGBJflWuyDBiX6DHeq23TWu8gKdII&s=10' },
]

export const testimonios = [
  {
    id: 't1',
    texto: 'Adopté a "Frida" hace 6 meses y cada actualización mensual me hace sentir parte del santuario.',
    avatar: 'https://cdn-3.expansion.mx/dims4/default/2679899/2147483647/strip/true/crop/1254x836+0+0/resize/1200x800!/format/webp/quality/80/?url=https%3A%2F%2Fcdn-3.expansion.mx%2F06%2F35%2F2d970c554f268aa193014660e3b6%2Fpor-que-el-ajolote-esta-en-peligro-de-extincion.jpg',
  },
  {
    id: 't2',
    
    texto: 'El recorrido con el biólogo fue increíble para los niños; aprendieron muchísimo sobre el ajolote.',
    avatar: 'https://pastorjonatan.com/wp-content/uploads/2019/10/ingredientes-para-una-familia-feliz.jpg',
  },
  {
    id: 't3',
    texto: 'El filtro de baja corriente que compré ha sido perfecto para mi ajolote en casa.',
    avatar: 'https://m.media-amazon.com/images/I/71a5zeTXnEL._AC_UF350,350_QL80_.jpg',
  },
]

export const logros = [
  'Más de 120 ajolotes rescatados y en resguardo responsable.',
  '45 familias activas en el programa de adopción simbólica.',
  '15 visitas guiadas educativas al mes, en promedio.',
  '3 alianzas activas con instituciones de conservación.',
]
