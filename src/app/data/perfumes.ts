// Catálogo de la tienda. Edita, agrega o quita fragancias aquí.
// Datos tomados de Fragrantica (acordes, notas y foto del perfume original).
// "imagen": foto del perfume original para que el cliente lo reconozca. Puede ser una URL
//   o una foto tuya en /public/img/ (escribe 'img/mi-foto.png'). Sin imagen se usa el frasco ANKARA.
// "acordes" va de mayor a menor intensidad; el color se asigna solo (ver COLORES_ACORDES).
// "notas" es opcional: la pirámide olfativa (salida, corazón y fondo).
// Las fragancias Unisex aparecen tanto en el filtro Hombre como en Mujer.

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
  etiqueta?: 'Más vendido' | 'Nuevo';
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
    nombre: 'Toy Boy',
    casa: 'Moschino',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.55858.jpg',
    acordes: ['rosas', 'florales', 'amaderado', 'almizclado', 'especiado suave', 'fresco especiado', 'ámbar', 'aromático'],
    notas: {
      salida: ['pimienta rosa', 'pera', 'nuez moscada de Indonesia', 'elemí', 'bergamota'],
      corazon: ['rosa', 'clavo de olor', 'magnolia', 'lino'],
      fondo: ['vetiver de Haití', 'cachemira', 'sándalo', 'ámbar', 'Sylkolide'],
    },
  },
  {
    nombre: 'Eros Flame',
    casa: 'Versace',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.52180.jpg',
    acordes: ['cítrico', 'fresco especiado', 'avainillado', 'aromático', 'amaderado', 'cálido especiado', 'dulce', 'atalcado'],
    notas: {
      salida: ['mandarina', 'pimienta de Madagascar', 'limón (lima ácida)', 'Chinotto', 'romero'],
      corazon: ['geranio', 'rosa', 'Pepperwood™'],
      fondo: ['vainilla', 'haba tonka', 'sándalo', 'cedro de Texas', 'pachulí', 'musgo de roble'],
    },
  },
  {
    nombre: 'Valentino Uomo Born in Roma',
    casa: 'Valentino',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.55963.jpg',
    acordes: ['mineral', 'amaderado', 'ozónico', 'aromático', 'acuático', 'salado', 'herbal', 'fresco especiado'],
    notas: {
      salida: ['Notas minerales', 'hojas de violeta', 'sal'],
      corazon: ['salvia', 'jengibre'],
      fondo: ['notas amaderadas', 'vetiver'],
    },
  },
  {
    nombre: 'Sauvage',
    etiqueta: 'Más vendido',
    casa: 'Dior',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.31861.jpg',
    acordes: ['fresco especiado', 'ámbar', 'cítrico', 'aromático', 'almizclado', 'amaderado', 'lavanda', 'herbal'],
    notas: {
      salida: ['bergamota de Calabria', 'pimienta'],
      corazon: ['pimienta de Sichuan', 'lavanda', 'pimienta rosa', 'vetiver', 'pachulí', 'geranio', 'elemí'],
      fondo: ['ambroxan', 'cedro', 'ládano'],
    },
  },
  {
    nombre: 'Phantom',
    casa: 'Rabanne',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.68226.jpg',
    acordes: ['cítrico', 'avainillado', 'lavanda', 'terrosos', 'aromático', 'amaderado', 'ahumado', 'afrutados'],
    notas: {
      salida: ['lavanda', 'Ralladura de limón', 'limón de Amalfi (lima de Amalfi)'],
      corazon: ['lavanda', 'Notas terrosas', 'manzana', 'Humo', 'pachulí'],
      fondo: ['vainilla', 'lavanda', 'vetiver'],
    },
  },
  {
    nombre: 'Odyssey Mandarin Sky',
    etiqueta: 'Nuevo',
    casa: 'Armaf',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.83132.jpg',
    acordes: ['cítrico', 'caramelo', 'dulce', 'ámbar', 'aromático', 'avainillado', 'amaderado'],
    notas: {
      salida: ['mandarina', 'naranja', 'azafrán', 'salvia'],
      corazon: ['caramelo', 'haba tonka', 'cempasúchil (tagete, clavelón)'],
      fondo: ['ambroxan', 'cedro', 'vetiver'],
    },
  },
  {
    nombre: 'Bleu de Chanel',
    casa: 'Chanel',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.9099.jpg',
    acordes: ['cítrico', 'amaderado', 'fresco especiado', 'aromático', 'ámbar', 'ahumado', 'balsámico', 'cálido especiado'],
    notas: {
      salida: ['toronja (pomelo)', 'limón (lima ácida)', 'menta', 'pimienta rosa'],
      corazon: ['jengibre', 'nuez moscada', 'jazmín', 'Iso E Super'],
      fondo: ['incienso', 'cedro', 'vetiver', 'sándalo', 'pachulí', 'ládano', 'almizcle blanco'],
    },
  },
  {
    nombre: '1 Million',
    etiqueta: 'Más vendido',
    casa: 'Rabanne',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.3747.jpg',
    acordes: ['cálido especiado', 'canela', 'cítrico', 'ámbar', 'amaderado', 'cuero', 'rosas', 'animálico'],
    notas: {
      salida: ['mandarina roja', 'toronja (pomelo)', 'menta'],
      corazon: ['canela', 'notas especiadas', 'rosa'],
      fondo: ['ámbar', 'cuero', 'notas amaderadas', 'pachulí hindú'],
    },
  },
  {
    nombre: 'Le Male',
    casa: 'Jean Paul Gaultier',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.430.jpg',
    acordes: ['aromático', 'avainillado', 'fresco especiado', 'lavanda', 'cálido especiado', 'verde', 'atalcado', 'dulce'],
    notas: {
      salida: ['lavanda', 'menta', 'cardamomo', 'bergamota', 'abrótano'],
      corazon: ['canela', 'flor de azahar del naranjo', 'alcaravea'],
      fondo: ['vainilla', 'haba tonka', 'ámbar', 'sándalo', 'cedro'],
    },
  },
  // AHLI no está en Fragrantica: datos de la descripción de la tienda Disfragancias.
  {
    nombre: 'Karpos',
    etiqueta: 'Nuevo',
    casa: 'AHLI',
    categoria: 'Unisex',
    imagen: 'https://cdn.shopify.com/s/files/1/0847/7553/4899/files/ahli_karpos.png?v=1785460361&width=500',
    acordes: ['afrutados', 'tropical', 'dulce', 'cálido especiado', 'amaderado', 'cítrico', 'almizclado'],
  },
  {
    nombre: 'CK One',
    casa: 'Calvin Klein',
    categoria: 'Unisex',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.276.jpg',
    acordes: ['cítrico', 'verde', 'atalcado', 'amaderado', 'floral blanco', 'fresco', 'aromático', 'fresco especiado'],
    notas: {
      salida: ['limón (lima ácida)', 'notas verdes', 'bergamota', 'mandarina', 'piña', 'cardamomo', 'papaya'],
      corazon: ['lirio de los valles (muguete)', 'jazmín', 'violeta', 'rosa', 'nuez moscada', 'fresia', 'raíz de lirio'],
      fondo: ['acordes verdes', 'almizcle', 'cedro', 'té verde', 'sándalo', 'musgo de roble', 'ámbar'],
    },
  },
  {
    nombre: 'Ralph',
    casa: 'Ralph Lauren',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.826.jpg',
    acordes: ['florales', 'afrutados', 'cítrico', 'fresco', 'verde'],
    notas: {
      salida: ['hojas del manzano', 'mandarina italiana', 'osmanto japonés (olivo oloroso japonés)'],
      corazon: ['fresia amarilla', 'magnolia', 'boronia parda'],
      fondo: ['almizcle', 'iris blanco'],
    },
  },
  {
    nombre: 'Toy 2',
    casa: 'Moschino',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.51589.jpg',
    acordes: ['afrutados', 'florales', 'fresco', 'cítrico', 'almizclado', 'dulce', 'atalcado', 'verde'],
    notas: {
      salida: ['manzana', 'mandarina', 'magnolia'],
      corazon: ['grosella blanca', 'peonía', 'jazmín'],
      fondo: ['almizcle', 'sándalo', 'Amberwood'],
    },
  },
  {
    nombre: 'Yara Candy',
    etiqueta: 'Más vendido',
    casa: 'Lattafa',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.95752.jpg',
    acordes: ['avainillado', 'afrutados', 'atalcado', 'cítrico', 'floral blanco', 'aromático', 'amaderado', 'especiado suave'],
    notas: {
      salida: ['grosellas negras', 'Mandarina verde'],
      corazon: ['Caramelo de fresa efervescente', 'gardenia'],
      fondo: ['vainilla', 'almizcle', 'ámbar', 'sándalo'],
    },
  },
  {
    nombre: 'Good Girl',
    etiqueta: 'Más vendido',
    casa: 'Carolina Herrera',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.39681.jpg',
    acordes: ['dulce', 'floral blanco', 'avainillado', 'cálido especiado', 'ámbar', 'cacao', 'amaderado', 'nardos'],
    notas: {
      salida: ['almendra', 'café', 'bergamota', 'limón (lima ácida)'],
      corazon: ['nardos', 'jazmín sambac (sampaguita)', 'flor de azahar del naranjo', 'rosa de Bulgaria (rosa Damascena de Bulgaria)', 'raíz de lirio'],
      fondo: ['haba tonka', 'cacao', 'vainilla', 'praliné', 'sándalo', 'almizcle', 'ámbar', 'madera de cachemira', 'pachulí', 'canela', 'cedro'],
    },
  },
  {
    nombre: 'Good Girl Blush',
    etiqueta: 'Nuevo',
    casa: 'Carolina Herrera',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.78576.jpg',
    acordes: ['florales', 'avainillado', 'fresco', 'cítrico', 'dulce', 'Floral amarillo', 'rosas', 'almendrado'],
    notas: {
      salida: ['bergamota', 'almendra amarga'],
      corazon: ['peonía', 'ylang-ylang'],
      fondo: ['vainilla', 'cumarina'],
    },
  },
  {
    nombre: 'Thank U, Next',
    casa: 'Ariana Grande',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.56741.jpg',
    acordes: ['dulce', 'coco', 'afrutados', 'avainillado', 'rosas', 'almendrado'],
    notas: {
      salida: ['frambuesa', 'pera'],
      corazon: ['coco', 'rosa rosada'],
      fondo: ['macarrones dulces', 'almizcle'],
    },
  },
  {
    nombre: 'La Vie Est Belle',
    casa: 'Lancôme',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.14982.jpg',
    acordes: ['dulce', 'avainillado', 'afrutados', 'pachulí', 'amaderado', 'floral blanco', 'atalcado', 'iris'],
    notas: {
      salida: ['grosellas negras', 'pera'],
      corazon: ['iris', 'jazmín', 'flor de azahar del naranjo'],
      fondo: ['praliné', 'vainilla', 'pachulí', 'haba tonka'],
    },
  },
  {
    nombre: 'Libre',
    casa: 'Yves Saint Laurent',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.56077.jpg',
    acordes: ['floral blanco', 'cítrico', 'lavanda', 'avainillado', 'aromático', 'dulce', 'atalcado', 'animálico'],
    notas: {
      salida: ['lavanda', 'mandarina', 'grosellas negras', 'petit grain'],
      corazon: ['lavanda', 'flor de azahar del naranjo', 'jazmín'],
      fondo: ['vainilla de Madagascar', 'almizcle', 'cedro', 'ámbar gris'],
    },
  },
  {
    nombre: 'Black Opium',
    casa: 'Yves Saint Laurent',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.25324.jpg',
    acordes: ['avainillado', 'café', 'dulce', 'floral blanco', 'cálido especiado', 'especiado suave', 'amaderado', 'afrutados'],
    notas: {
      salida: ['pera', 'pimienta rosa', 'flor de azahar del naranjo'],
      corazon: ['café', 'jazmín', 'almendra amarga', 'regaliz'],
      fondo: ['vainilla', 'pachulí', 'madera de cachemira', 'cedro'],
    },
  },
  {
    nombre: 'Cloud',
    casa: 'Ariana Grande',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.50384.jpg',
    acordes: ['dulce', 'lactónico', 'avainillado', 'coco', 'almizclado'],
    notas: {
      salida: ['lavanda', 'pera', 'bergamota'],
      corazon: ['crema batida', 'coco', 'praliné', 'orquídea de vainilla'],
      fondo: ['almizcle', 'notas amaderadas'],
    },
  },
];

// Colores de cada acorde (los mismos de Fragrantica). Si usas uno que no está aquí, sale en dorado.
export const COLORES_ACORDES: Record<string, string> = {
  'cítrico': '#f9ff52',
  'verde': '#0e8c1d',
  'atalcado': '#eeddcc',
  'amaderado': '#774414',
  'floral blanco': '#edf2fb',
  'fresco': '#9be5ed',
  'aromático': '#37a089',
  'fresco especiado': '#83c928',
  'florales': '#ff5f8d',
  'almizclado': '#e7d8ea',
  'rosas': '#fe016b',
  'especiado suave': '#e27752',
  'ámbar': '#bc4d10',
  'cálido especiado': '#cc3300',
  'dulce': '#ee363b',
  'avainillado': '#fffec0',
  'mineral': '#71bbbf',
  'ozónico': '#c9fdfb',
  'acuático': '#63cce2',
  'salado': '#e9fff9',
  'herbal': '#6ca47f',
  'lavanda': '#9b7db8',
  'terrosos': '#544838',
  'ahumado': '#827487',
  'afrutados': '#fc4b29',
  'tropical': '#ffb41f',
  'caramelo': '#dda356',
  'balsámico': '#ad8359',
  'canela': '#d2691e',
  'cuero': '#78483a',
  'animálico': '#8e4b13',
  'pachulí': '#63652e',
  'cacao': '#9a3a0d',
  'nardos': '#ebfaf3',
  'almendrado': '#f1e3c5',
  'Floral amarillo': '#ffdc10',
  'coco': '#f1e8d4',
  'iris': '#b7a7d7',
  'café': '#503b1d',
  'lactónico': '#fbf9f2',
};

// Número de WhatsApp con código de país, sin + ni espacios. Ej: 573001234567
export const WHATSAPP = '573045624534';

// Usuario de Instagram, sin @.
export const INSTAGRAM = 'ankara.perfum';
