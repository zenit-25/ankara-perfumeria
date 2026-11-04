import { Fragancia } from './data/perfumes';

export type Para = 'Hombre' | 'Mujer' | 'Ambos';
export type Momento = 'Día' | 'Noche';
export type Estilo = 'Fresco' | 'Dulce' | 'Floral' | 'Intenso';

export interface Respuestas {
  para: Para;
  momento: Momento;
  estilo: Estilo;
}

// Qué acordes de Fragrantica pertenecen a cada estilo.
const ESTILOS: Record<Estilo, string[]> = {
  Fresco: ['cítrico', 'fresco', 'acuático', 'marino', 'ozónico', 'verde', 'aromático', 'fresco especiado', 'mineral', 'herbal', 'lavanda', 'salado'],
  Dulce: ['dulce', 'avainillado', 'caramelo', 'afrutados', 'tropical', 'cacao', 'chocolate', 'miel', 'atalcado'],
  Floral: ['florales', 'floral blanco', 'rosas', 'almizclado', 'iris', 'violeta', 'atalcado'],
  Intenso: ['amaderado', 'cálido especiado', 'ámbar', 'cuero', 'ahumado', 'balsámico', 'canela', 'especiado suave', 'terrosos', 'animálico', 'oud', 'tabaco', 'café'],
};

const MOMENTOS: Record<Momento, Estilo[]> = {
  'Día': ['Fresco', 'Floral'],
  'Noche': ['Dulce', 'Intenso'],
};

// Puntaje de un estilo: los acordes principales (los primeros) pesan más.
function afinidad(f: Fragancia, estilo: Estilo): number {
  const n = f.acordes.length;
  return f.acordes.reduce((total, a, i) => total + (ESTILOS[estilo].includes(a) ? (n - i) / n : 0), 0);
}

export function recomendar(fragancias: Fragancia[], r: Respuestas, cuantas = 3): Fragancia[] {
  return fragancias
    .filter(f => r.para === 'Ambos' || f.categoria === r.para || f.categoria === 'Unisex')
    .map(f => ({
      f,
      puntos: 2 * afinidad(f, r.estilo) + MOMENTOS[r.momento].reduce((t, e) => t + afinidad(f, e), 0) / 2,
    }))
    .sort((a, b) => b.puntos - a.puntos)
    .slice(0, cuantas)
    .map(x => x.f);
}

// Minúsculas y sin tildes, para que "vainilla" encuentre "Vainilla" y "ambar" encuentre "ámbar".
export function normalizar(texto: string): string {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

// Todo el texto en el que se puede buscar una fragancia. Las notas van antes que los acordes
// para que al buscar "vainilla" se muestre la nota y no el acorde "avainillado".
export function textoBuscable(f: Fragancia): string[] {
  const notas = f.notas ? [...f.notas.salida, ...f.notas.corazon, ...f.notas.fondo] : [];
  return [f.nombre, f.casa, ...notas, ...f.acordes];
}
