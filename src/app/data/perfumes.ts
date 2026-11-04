// Catálogo de la tienda. Edita, agrega o quita fragancias aquí.
// "imagen": foto del perfume original, para que el cliente lo reconozca. Ponla en /public/img/
//   y escribe 'img/mi-foto.png'. Si no hay imagen, se usa el frasco ANKARA.
// "acordes" va de mayor a menor intensidad (como en Fragrantica); el color se asigna solo.
// "notas" es opcional: la pirámide olfativa (salida, corazón y fondo).

export type Categoria = 'Mujer' | 'Hombre' | 'Unisex';

export interface Notas {
  salida: string[];
  corazon: string[];
  fondo: string[];
}

export interface Fragancia {
  nombre: string;
  casa: string;
  categoria: Categoria;
  acordes: string[];
  imagen?: string;
  notas?: Notas;
}

export interface Tamano {
  ml: number;
  precio: number;
}

// Mismos tamaños y precios para todas las fragancias.
export const TAMANOS: Tamano[] = [
  { ml: 30, precio: 30000 },
  { ml: 50, precio: 45000 },
  { ml: 100, precio: 75000 },
];

export const FRAGANCIAS: Fragancia[] = [
  {
    nombre: 'Odyssey Mandarin Sky',
    casa: 'Armaf',
    categoria: 'Hombre',
    imagen: 'img/odyssey-mandarin-sky.png',
    acordes: ['cítrico', 'caramelo', 'dulce', 'ámbar', 'aromático', 'avainillado', 'amaderado'],
  },
];

// Colores de cada acorde. Si usas uno que no está aquí, sale en dorado.
export const COLORES_ACORDES: Record<string, string> = {
  'cítrico': '#f5f552',
  'caramelo': '#b5874a',
  'dulce': '#c4313a',
  'ámbar': '#8a3f14',
  'aromático': '#2f7a62',
  'avainillado': '#a8a47e',
  'amaderado': '#6b4527',
  'floral': '#f07aa8',
  'floral blanco': '#f3e9d8',
  'rosa': '#e8558a',
  'frutal': '#f5733b',
  'atalcado': '#e8d9c9',
  'almizclado': '#d6c8d8',
  'fresco': '#9adbe8',
  'fresco especiado': '#8fc77e',
  'especiado': '#a8462c',
  'cálido especiado': '#c0392b',
  'acuático': '#4fb6d8',
  'marino': '#3a8fc2',
  'ozónico': '#b8dde6',
  'verde': '#3fae4a',
  'herbal': '#5d8f45',
  'lavanda': '#9a86c9',
  'cuero': '#5a3a2a',
  'oud': '#4a2f22',
  'tabaco': '#7a5230',
  'atalcado suave': '#efe3d3',
  'balsámico': '#9c6b3c',
  'terroso': '#6b5a3e',
  'avellana': '#a5764a',
  'café': '#4b2e20',
  'chocolate': '#5c3420',
  'miel': '#e0a53b',
  'coco': '#f2ead9',
  'tropical': '#f4a72e',
  'ahumado': '#5e5e5e',
  'iris': '#a99bc9',
  'violeta': '#8452a8',
};

// Número de WhatsApp con código de país, sin + ni espacios. Ej: 573001234567
export const WHATSAPP = '573045624534';
