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

// Fragancias parecidas: comparten acordes, sobre todo los principales.
// Se respeta el público: a quien mira una de hombre no se le sugiere una de mujer.
export function similares(base: Fragancia, fragancias: Fragancia[], cuantas = 3): Fragancia[] {
  const peso = (f: Fragancia) => new Map(f.acordes.map((a, i) => [a, (f.acordes.length - i) / f.acordes.length]));
  const pb = peso(base);
  return fragancias
    .filter(f => f !== base && (base.categoria === 'Unisex' || f.categoria === 'Unisex' || f.categoria === base.categoria))
    .map(f => ({ f, puntos: [...peso(f)].reduce((t, [a, w]) => t + w * (pb.get(a) ?? 0), 0) }))
    .sort((a, b) => b.puntos - a.puntos)
    .slice(0, cuantas)
    .map(x => x.f);
}

// Minúsculas y sin tildes, para que "vainilla" encuentre "Vainilla" y "ambar" encuentre "ámbar".
export function normalizar(texto: string): string {
  return texto.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();
}

// Identificador para el enlace directo: "Thank U, Next" → "thank-u-next".
export function slug(f: Fragancia): string {
  return normalizar(f.nombre).replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// Todo el texto en el que se puede buscar una fragancia. Las notas van antes que los acordes
// para que al buscar "vainilla" se muestre la nota y no el acorde "avainillado".
export function textoBuscable(f: Fragancia): string[] {
  const notas = f.notas ? [...f.notas.salida, ...f.notas.corazon, ...f.notas.fondo] : [];
  return [f.nombre, f.casa, ...notas, ...f.acordes];
}
