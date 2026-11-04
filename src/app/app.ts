import { Component, computed, signal } from '@angular/core';
import { COLORES_ACORDES, Categoria, FRAGANCIAS, Fragancia, INSTAGRAM, PROMO, TAMANOS, WHATSAPP } from './data/perfumes';
import { Estilo, Momento, Para, Respuestas, normalizar, recomendar, similares, textoBuscable } from './recomendador';

type Filtro = Categoria | 'Todos';

const PARA: Record<Categoria, string> = { Mujer: 'para Mujeres', Hombre: 'para Hombres', Unisex: 'Unisex' };

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  host: { '(document:keydown.escape)': 'cerrarDetalle()' }
})
export class App {
  protected readonly filtros: Filtro[] = ['Todos', 'Mujer', 'Hombre', 'Unisex'];
  protected readonly filtro = signal<Filtro>('Todos');
  protected readonly menuAbierto = signal(false);
  protected readonly anio = new Date().getFullYear();
  protected readonly tamanos = TAMANOS;
  protected readonly para = PARA;

  // Tamaño elegido en cada tarjeta (por nombre de fragancia). Por defecto el primero.
  private readonly elegidos = signal<Record<string, number>>({});

  protected readonly instagram = INSTAGRAM;
  protected readonly promo = PROMO;
  protected readonly busqueda = signal('');

  protected readonly fragancias = computed(() => {
    const f = this.filtro();
    const q = normalizar(this.busqueda());
    return FRAGANCIAS
      // Las unisex aparecen también en Hombre y Mujer.
      .filter(p => f === 'Todos' || p.categoria === f || (f !== 'Unisex' && p.categoria === 'Unisex'))
      .filter(p => !q || textoBuscable(p).some(t => normalizar(t).includes(q)));
  });

  // Si la búsqueda no coincide con el nombre ni la casa, muestra qué nota o acorde coincidió.
  protected coincidencia(f: Fragancia): string | null {
    const q = normalizar(this.busqueda());
    if (!q || normalizar(f.nombre).includes(q) || normalizar(f.casa).includes(q)) return null;
    return textoBuscable(f).find(t => normalizar(t).includes(q)) ?? null;
  }

  // Test "¿No sabes cuál elegir?"
  protected readonly opcionesPara: Para[] = ['Hombre', 'Mujer', 'Ambos'];
  protected readonly opcionesMomento: Momento[] = ['Día', 'Noche'];
  protected readonly opcionesEstilo: { estilo: Estilo; ejemplo: string }[] = [
    { estilo: 'Fresco', ejemplo: 'cítrico, limpio, aromático' },
    { estilo: 'Dulce', ejemplo: 'vainilla, caramelo, frutal' },
    { estilo: 'Floral', ejemplo: 'flores, rosas, almizcle' },
    { estilo: 'Intenso', ejemplo: 'amaderado, especiado, ámbar' },
  ];
  protected readonly respuestas = signal<Partial<Respuestas>>({});
  protected readonly paso = computed(() => {
    const r = this.respuestas();
    return !r.para ? 1 : !r.momento ? 2 : !r.estilo ? 3 : 4;
  });
  protected readonly recomendadas = computed(() => {
    const r = this.respuestas();
    return r.para && r.momento && r.estilo ? recomendar(FRAGANCIAS, r as Respuestas) : [];
  });

  protected responder(r: Partial<Respuestas>): void {
    this.respuestas.update(actual => ({ ...actual, ...r }));
  }

  protected reiniciarTest(): void {
    this.respuestas.set({});
  }

  protected readonly testimonios = [
    { nombre: 'Laura M.', texto: 'Me asesoraron súper bien y encontré mi aroma ideal. ¡Dura todo el día!' },
    { nombre: 'Andrés P.', texto: 'Excelente fijación y el frasco es hermoso. Ya voy por mi tercer pedido.' },
    { nombre: 'Camila R.', texto: 'Empecé con el de 30 ml para probar y ya pedí el de 100 ml.' },
  ];

  protected precio(valor: number): string {
    return '$' + valor.toLocaleString('es-CO') + ' COP';
  }

  protected tamanoElegido(f: Fragancia): number {
    return this.elegidos()[f.nombre] ?? TAMANOS[0].ml;
  }

  protected elegir(f: Fragancia, ml: number): void {
    this.elegidos.update(e => ({ ...e, [f.nombre]: ml }));
  }

  protected colorAcorde(acorde: string): string {
    return COLORES_ACORDES[acorde.toLowerCase()] ?? '#c9a24b';
  }

  // Texto oscuro sobre colores claros y claro sobre colores oscuros.
  protected textoAcorde(acorde: string): string {
    const hex = this.colorAcorde(acorde).slice(1);
    const [r, g, b] = [0, 2, 4].map(i => parseInt(hex.slice(i, i + 2), 16));
    return 0.299 * r + 0.587 * g + 0.114 * b > 150 ? '#1a1714' : '#f6f1e9';
  }

  // Las barras se acortan de la primera a la última, como en Fragrantica.
  protected anchoAcorde(i: number, total: number): number {
    return total <= 1 ? 100 : 100 - (i * 45) / (total - 1);
  }

  protected whatsappUrl(f?: Fragancia): string {
    const texto = f
      ? `Hola, me interesa la fragancia ${f.nombre} (inspiración ${f.casa}) en ${this.tamanoElegido(f)} ml.`
      : 'Hola, quiero información sobre sus fragancias.';
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
  }

  // Fragancia abierta en la ventana de detalle.
  protected readonly detalle = signal<Fragancia | null>(null);

  protected readonly parecidas = computed(() => {
    const f = this.detalle();
    return f ? similares(f, FRAGANCIAS) : [];
  });

  protected abrirDetalle(f: Fragancia): void {
    this.detalle.set(f);
    document.body.style.overflow = 'hidden';
    // Al saltar de una sugerencia a otra, vuelve al inicio de la ventana.
    document.querySelector('.modal-fondo')?.scrollTo({ top: 0 });
  }

  protected cerrarDetalle(): void {
    this.detalle.set(null);
    document.body.style.overflow = '';
  }

  protected cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}
