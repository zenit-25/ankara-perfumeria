// Catálogo de la tienda. Edita, agrega o quita perfumes aquí.
// "imagen" es opcional: pon la foto en /public/perfumes/ y escribe 'perfumes/mi-foto.jpg'.
// Si no hay imagen, se dibuja un frasco con el color indicado.

export type Categoria = 'Mujer' | 'Hombre' | 'Unisex';

export interface Perfume {
  nombre: string;
  marca: string;
  categoria: Categoria;
  notas: string;
  precio: number;
  color: string;
  imagen?: string;
  destacado?: boolean;
}

export const PERFUMES: Perfume[] = [
  { nombre: 'Rosa Imperial', marca: 'Maison Ankara', categoria: 'Mujer', notas: 'Rosa, peonía, almizcle blanco', precio: 185000, color: '#e8a0b4', destacado: true },
  { nombre: 'Noche de Ámbar', marca: 'Maison Ankara', categoria: 'Unisex', notas: 'Ámbar, vainilla, sándalo', precio: 210000, color: '#d4913b', destacado: true },
  { nombre: 'Cedro Salvaje', marca: 'Maison Ankara', categoria: 'Hombre', notas: 'Cedro, bergamota, vetiver', precio: 195000, color: '#5b7a5a', destacado: true },
  { nombre: 'Jardín Blanco', marca: 'Fleur & Co.', categoria: 'Mujer', notas: 'Jazmín, nardo, mandarina', precio: 165000, color: '#f0e6d2' },
  { nombre: 'Oud Real', marca: 'Oriente', categoria: 'Unisex', notas: 'Oud, azafrán, cuero', precio: 260000, color: '#6b3a2a' },
  { nombre: 'Brisa Marina', marca: 'Azur', categoria: 'Hombre', notas: 'Notas marinas, limón, salvia', precio: 150000, color: '#6fa8c7' },
  { nombre: 'Vainilla Dorada', marca: 'Fleur & Co.', categoria: 'Mujer', notas: 'Vainilla, caramelo, haba tonka', precio: 170000, color: '#e3c27a' },
  { nombre: 'Tabaco & Miel', marca: 'Oriente', categoria: 'Hombre', notas: 'Tabaco, miel, canela', precio: 225000, color: '#8a5a2b' },
];

// Número de WhatsApp con código de país, sin + ni espacios. Ej: 573001234567
export const WHATSAPP = '573045624534';
