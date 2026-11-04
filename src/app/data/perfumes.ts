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
    acordes: ['florales', 'avainillado', 'fresco', 'cítrico', 'dulce', 'floral amarillo', 'rosas', 'almendrado'],
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
  {
    nombre: 'Eros',
    casa: 'Versace',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.16657.jpg',
    acordes: ['avainillado', 'aromático', 'verde', 'fresco especiado', 'ámbar', 'cítrico', 'afrutados', 'amaderado'],
    notas: {
      salida: ['menta', 'manzana verde', 'limón (lima ácida)'],
      corazon: ['haba tonka', 'ambroxan', 'geranio'],
      fondo: ['vainilla de Madagascar', 'cedro de Virginia', 'cedro del Atlas', 'vetiver', 'musgo de roble'],
    },
  },
  {
    nombre: 'Invictus',
    casa: 'Rabanne',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.18471.jpg',
    acordes: ['cítrico', 'marino', 'aromático', 'fresco especiado', 'amaderado', 'salado', 'ámbar', 'floral blanco'],
    notas: {
      salida: ['notas marinas', 'toronja (pomelo)', 'mandarina'],
      corazon: ['hoja de laurel', 'jazmín'],
      fondo: ['ámbar gris', 'madera de gaiac', 'musgo de roble', 'pachulí'],
    },
  },
  {
    nombre: 'Acqua di Giò Profumo',
    casa: 'Giorgio Armani',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.29727.jpg',
    acordes: ['aromático', 'marino', 'fresco especiado', 'ámbar', 'amaderado', 'ahumado', 'cálido especiado', 'cítrico'],
    notas: {
      salida: ['notas marinas', 'bergamota'],
      corazon: ['romero', 'salvia', 'geranio'],
      fondo: ['incienso', 'pachulí'],
    },
  },
  {
    nombre: 'Stronger With You Intensely',
    casa: 'Giorgio Armani',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.52802.jpg',
    acordes: ['avainillado', 'dulce', 'ámbar', 'canela', 'cálido especiado', 'atalcado', 'aromático', 'especiado suave'],
    notas: {
      salida: ['pimienta rosa', 'enebro', 'violeta'],
      corazon: ['tófe', 'canela', 'lavanda', 'salvia'],
      fondo: ['vainilla', 'ámbar', 'haba tonka', 'gamuza'],
    },
  },
  {
    nombre: 'Ultra Male',
    casa: 'Jean Paul Gaultier',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.30947.jpg',
    acordes: ['avainillado', 'afrutados', 'aromático', 'dulce', 'canela', 'cálido especiado', 'fresco especiado', 'lavanda'],
    notas: {
      salida: ['pera', 'lavanda', 'menta', 'bergamota', 'limón (lima ácida)'],
      corazon: ['canela', 'esclarea', 'alcaravea'],
      fondo: ['vaina de vainilla negra', 'ámbar', 'pachulí', 'cedro'],
    },
  },
  {
    nombre: 'Le Beau',
    casa: 'Jean Paul Gaultier',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.55785.jpg',
    acordes: ['coco', 'avainillado', 'dulce', 'cítrico', 'lactónico', 'aromático', 'ámbar', 'tropical'],
    notas: {
      salida: ['bergamota'],
      corazon: ['coco'],
      fondo: ['haba tonka'],
    },
  },
  {
    nombre: 'Y',
    casa: 'Yves Saint Laurent',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.50757.jpg',
    acordes: ['aromático', 'fresco especiado', 'amaderado', 'afrutados', 'fresco', 'ámbar', 'cítrico', 'herbal'],
    notas: {
      salida: ['manzana', 'jengibre', 'bergamota'],
      corazon: ['salvia', 'bayas de enebro', 'geranio'],
      fondo: ['Amberwood', 'haba tonka', 'cedro', 'vetiver', 'incienso de olíbano (franquincienso)'],
    },
  },
  {
    nombre: 'Club de Nuit Intense Man',
    casa: 'Armaf',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.34696.jpg',
    acordes: ['cítrico', 'afrutados', 'cuero', 'ahumado', 'amaderado', 'aromático', 'dulce', 'fresco'],
    notas: {
      salida: ['limón (lima ácida)', 'piña', 'bergamota', 'grosellas negras', 'manzana'],
      corazon: ['abedul', 'jazmín', 'rosa'],
      fondo: ['almizcle', 'ámbar gris', 'pachulí', 'vainilla'],
    },
  },
  {
    nombre: 'Asad',
    casa: 'Lattafa',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.72821.jpg',
    acordes: ['ámbar', 'fresco especiado', 'amaderado', 'cálido especiado', 'avainillado', 'dulce', 'tabaco', 'atalcado'],
    notas: {
      salida: ['pimienta negra', 'tabaco', 'piña'],
      corazon: ['pachulí', 'café', 'iris'],
      fondo: ['vainilla', 'ámbar', 'Madera seca', 'benjuí', 'ládano'],
    },
  },
  {
    nombre: 'Hawas for Him',
    casa: 'Rasasi',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.46890.jpg',
    acordes: ['afrutados', 'cítrico', 'acuático', 'fresco', 'cálido especiado', 'dulce', 'ámbar', 'almizclado'],
    notas: {
      salida: ['manzana', 'bergamota', 'limón (lima ácida)', 'canela'],
      corazon: ['notas acuosas', 'ciruela', 'flor de azahar del naranjo', 'cardamomo'],
      fondo: ['ámbar gris', 'almizcle', 'pachulí', 'trozos de madera a la deriva'],
    },
  },
  {
    nombre: 'Hawas Ice',
    casa: 'Rasasi',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.89050.jpg',
    acordes: ['afrutados', 'cítrico', 'dulce', 'fresco', 'aromático', 'almizclado', 'atalcado', 'fresco especiado'],
    notas: {
      salida: ['manzana', 'limón italiano (lima italiana)', 'bergamota de Sicilia', 'anís estrellado'],
      corazon: ['ciruela', 'flor de azahar del naranjo', 'cardamomo'],
      fondo: ['almizcle', 'ámbar', 'trozos de madera a la deriva', 'musgo'],
    },
  },
  {
    nombre: '212 VIP Men',
    casa: 'Carolina Herrera',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.12865.jpg',
    acordes: ['fresco especiado', 'aromático', 'vodka', 'amaderado', 'verde', 'tropical', 'cítrico', 'afrutados'],
    notas: {
      salida: ['maracuyá (fruta de la pasión)', 'lima (limón verde)', 'pimienta', 'jengibre', 'Limón Caviar'],
      corazon: ['vodka', 'ginebra', 'menta', 'especias'],
      fondo: ['ámbar', 'cuero', 'notas amaderadas'],
    },
  },
  {
    nombre: '212 VIP Black',
    casa: 'Carolina Herrera',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.46093.jpg',
    acordes: ['aromático', 'avainillado', 'especiado suave', 'lavanda', 'anís', 'almizclado', 'atalcado', 'amargo'],
    notas: {
      salida: ['absenta', 'anís', 'hinojo'],
      corazon: ['lavanda'],
      fondo: ['vaina de vainilla negra', 'almizcle'],
    },
  },
  {
    nombre: 'Bad Boy',
    casa: 'Carolina Herrera',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.55449.jpg',
    acordes: ['cálido especiado', 'fresco especiado', 'cacao', 'aromático', 'avainillado', 'dulce', 'cítrico', 'amaderado'],
    notas: {
      salida: ['pimienta blanca', 'bergamota', 'pimienta rosa'],
      corazon: ['cedro', 'esclarea'],
      fondo: ['haba tonka', 'cacao'],
    },
  },
  {
    nombre: '360° for Men',
    casa: 'Perry Ellis',
    categoria: 'Hombre',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.1904.jpg',
    acordes: ['aromático', 'amaderado', 'fresco especiado', 'cítrico', 'lavanda'],
    notas: {
      salida: ['bayas de enebro', 'limón (lima ácida)', 'bergamota'],
      corazon: ['lavanda', 'salvia', 'cardamomo', 'fresia'],
      fondo: ['notas amaderadas', 'vetiver', 'almizcle'],
    },
  },
  {
    nombre: '360°',
    casa: 'Perry Ellis',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.1901.jpg',
    acordes: ['floral blanco', 'florales', 'fresco', 'acuático', 'afrutados', 'aromático', 'especiado suave', 'almizclado'],
    notas: {
      salida: ['melón', 'azucena', 'osmanto (olivo oloroso)', 'naranja tangerina', 'rosa'],
      corazon: ['nenúfar (lirio de agua)', 'lirio de los valles (muguete)', 'lavanda', 'salvia'],
      fondo: ['almizcle', 'sándalo', 'vetiver', 'ámbar', 'vainilla'],
    },
  },
  {
    nombre: 'Olympéa',
    casa: 'Rabanne',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.31666.jpg',
    acordes: ['avainillado', 'salado', 'floral blanco', 'amaderado', 'ámbar', 'atalcado', 'cítrico', 'balsámico'],
    notas: {
      salida: ['jazmín de agua', 'mandarina verde', 'flor de jengibre'],
      corazon: ['vainilla', 'sal'],
      fondo: ['madera de cachemira', 'ámbar gris', 'sándalo'],
    },
  },
  {
    nombre: 'Lady Million',
    casa: 'Rabanne',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.9045.jpg',
    acordes: ['floral blanco', 'dulce', 'amielado', 'cítrico', 'afrutados', 'florales', 'pachulí', 'animálico'],
    notas: {
      salida: ['frambuesa', 'neroli', 'limón de Amalfi (lima de Amalfi)'],
      corazon: ['jazmín', 'flor del naranjo africano', 'gardenia'],
      fondo: ['miel blanca', 'pachulí', 'ámbar'],
    },
  },
  {
    nombre: 'Scandal',
    casa: 'Jean Paul Gaultier',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.45651.jpg',
    acordes: ['amielado', 'dulce', 'floral blanco', 'cítrico', 'caramelo', 'animálico', 'cera de abeja', 'pachulí'],
    notas: {
      salida: ['naranja sanguina', 'mandarina'],
      corazon: ['miel', 'gardenia', 'flor de azahar del naranjo', 'jazmín', 'durazno (melocotón)'],
      fondo: ['cera de abeja', 'caramelo', 'pachulí', 'regaliz'],
    },
  },
  {
    nombre: 'Sì',
    casa: 'Giorgio Armani',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.18453.jpg',
    acordes: ['amaderado', 'avainillado', 'aromático', 'especiado suave', 'afrutados', 'verde', 'florales', 'rosas'],
    notas: {
      salida: ['casis (grosellero negro)'],
      corazon: ['rosa de mayo', 'fresia'],
      fondo: ['vainilla', 'pachulí', 'notas amaderadas', 'ambroxan'],
    },
  },
  {
    nombre: 'My Way',
    casa: 'Giorgio Armani',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.62036.jpg',
    acordes: ['floral blanco', 'nardos', 'cítrico', 'animálico', 'avainillado'],
    notas: {
      salida: ['flor de azahar del naranjo', 'bergamota'],
      corazon: ['nardos', 'jazmín de la India'],
      fondo: ['vainilla de Madagascar', 'almizcle blanco', 'cedro de Virginia'],
    },
  },
  {
    nombre: 'J\x27adore',
    casa: 'Dior',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.210.jpg',
    acordes: ['floral blanco', 'florales', 'afrutados', 'dulce', 'fresco', 'acuático', 'cítrico', 'atalcado'],
    notas: {
      salida: ['pera', 'melón', 'magnolia', 'durazno (melocotón)', 'mandarina', 'bergamota'],
      corazon: ['jazmín', 'lirio de los valles (muguete)', 'nardos', 'fresia', 'rosa', 'orquídea', 'violeta', 'ciruela'],
      fondo: ['almizcle', 'vainilla', 'cedro', 'zarzamora (frambuesa negra)'],
    },
  },
  {
    nombre: 'Coco Mademoiselle',
    casa: 'Chanel',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.611.jpg',
    acordes: ['cítrico', 'amaderado', 'pachulí', 'dulce', 'floral blanco', 'rosas', 'terrosos', 'avainillado'],
    notas: {
      salida: ['naranja', 'mandarina', 'bergamota', 'flor de azahar del naranjo'],
      corazon: ['rosa turca', 'jazmín', 'mimosa', 'ylang-ylang'],
      fondo: ['pachulí', 'almizcle blanco', 'vainilla', 'vetiver', 'haba tonka', 'opopónaco'],
    },
  },
  {
    nombre: 'Light Blue',
    casa: 'Dolce & Gabbana',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.485.jpg',
    acordes: ['cítrico', 'amaderado', 'fresco', 'afrutados', 'aromático', 'almizclado', 'atalcado', 'verde'],
    notas: {
      salida: ['limón siciliano (lima siciliana)', 'manzana', 'cedro', 'campanilla'],
      corazon: ['bambú', 'jazmín', 'rosa blanca'],
      fondo: ['cedro', 'almizcle', 'ámbar'],
    },
  },
  {
    nombre: 'Idôle',
    casa: 'Lancôme',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.55795.jpg',
    acordes: ['rosas', 'almizclado', 'afrutados', 'dulce', 'floral blanco', 'atalcado', 'florales', 'cítrico'],
    notas: {
      salida: ['pera', 'bergamota', 'pimienta rosa'],
      corazon: ['rosa', 'jazmín'],
      fondo: ['almizcle blanco', 'vainilla', 'pachulí', 'cedro'],
    },
  },
  {
    nombre: '212 VIP Rosé',
    casa: 'Carolina Herrera',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.22857.jpg',
    acordes: ['florales', 'almizclado', 'afrutados', 'amaderado', 'atalcado', 'rosas'],
    notas: {
      salida: ['Champagne Rosé', 'pimienta rosa'],
      corazon: ['flor del duraznero (flor del melocotonero)', 'rosa'],
      fondo: ['almizcle blanco', 'notas amaderadas'],
    },
  },
  {
    nombre: 'Very Good Girl',
    casa: 'Carolina Herrera',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.65560.jpg',
    acordes: ['afrutados', 'rosas', 'fresco', 'avainillado', 'tropical', 'especiado suave', 'dulce', 'amargo'],
    notas: {
      salida: ['lichi', 'grosella roja'],
      corazon: ['rosa'],
      fondo: ['vainilla', 'vetiver'],
    },
  },
  {
    nombre: 'Bright Crystal',
    casa: 'Versace',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.632.jpg',
    acordes: ['florales', 'fresco', 'cítrico', 'amaderado', 'rosas', 'fresco especiado', 'acuático'],
    notas: {
      salida: ['yuzu', 'granada', 'Hielo'],
      corazon: ['peonía', 'flor de loto', 'magnolia'],
      fondo: ['almizcle', 'caoba', 'ámbar'],
    },
  },
  {
    nombre: 'Valentino Donna Born in Roma',
    casa: 'Valentino',
    categoria: 'Mujer',
    imagen: 'https://fimgs.net/mdimg/perfume-thumbs/375x500.55805.jpg',
    acordes: ['amaderado', 'avainillado', 'afrutados', 'floral blanco', 'especiado suave', 'atalcado', 'florales', 'almizclado'],
    notas: {
      salida: ['grosellas negras', 'pimienta rosa', 'bergamota'],
      corazon: ['jazmín', 'jazmín sambac (sampaguita)', 'Té del jazmín'],
      fondo: ['vainilla Bourbon', 'cachemira', 'madera de gaiac'],
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
  'floral amarillo': '#ffdc10',
  'coco': '#f1e8d4',
  'iris': '#b7a7d7',
  'café': '#503b1d',
  'lactónico': '#fbf9f2',
  'marino': '#0e529b',
  'tabaco': '#ad7727',
  'vodka': '#f3faf8',
  'anís': '#c3d7b3',
  'amargo': '#c0e741',
  'amielado': '#faa907',
  'cera de abeja': '#f0b642',
};

// Número de WhatsApp con código de país, sin + ni espacios. Ej: 573001234567
export const WHATSAPP = '573045624534';

// Mensaje de la franja superior. Déjalo vacío ('') para ocultarla.
export const PROMO = 'Envío gratis en compras desde $100.000';

// Usuario de Instagram, sin @.
export const INSTAGRAM = 'ankara.perfum';
