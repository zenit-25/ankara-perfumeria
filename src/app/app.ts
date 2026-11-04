import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe, NgTemplateOutlet } from '@angular/common';
import { Categoria, PERFUMES, Perfume, WHATSAPP } from './data/perfumes';

type Filtro = Categoria | 'Todos';

@Component({
  selector: 'app-root',
  imports: [CurrencyPipe, NgTemplateOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly filtros: Filtro[] = ['Todos', 'Mujer', 'Hombre', 'Unisex'];
  protected readonly filtro = signal<Filtro>('Todos');
  protected readonly menuAbierto = signal(false);
  protected readonly anio = new Date().getFullYear();

  protected readonly perfumes = computed(() => {
    const f = this.filtro();
    return f === 'Todos' ? PERFUMES : PERFUMES.filter(p => p.categoria === f);
  });

  protected readonly destacados = PERFUMES.filter(p => p.destacado);

  protected readonly testimonios = [
    { nombre: 'Laura M.', texto: 'Me asesoraron súper bien y encontré mi aroma ideal. ¡Dura todo el día!' },
    { nombre: 'Andrés P.', texto: 'Productos originales y entrega rapidísima. Ya voy por mi tercer pedido.' },
    { nombre: 'Camila R.', texto: 'Los decants son perfectos para probar antes de comprar el frasco completo.' },
  ];

  protected whatsappUrl(perfume?: Perfume): string {
    const texto = perfume
      ? `Hola, me interesa el perfume ${perfume.nombre} de ${perfume.marca}.`
      : 'Hola, quiero información sobre sus perfumes.';
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(texto)}`;
  }

  protected cerrarMenu(): void {
    this.menuAbierto.set(false);
  }
}
