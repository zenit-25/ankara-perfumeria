// Genera las hojas para imprimir en adhesivo A4:
//   logos.html     → logos ANKARA para frascos de 30, 50 y 100 ml (una hoja por tamaño)
//   etiquetas.html → etiquetas con el nombre de cada esencia e "Inspirado en" + casa
// Uso: node impresion/generar.js   (luego se convierten a PDF con el navegador)
//      node impresion/generar.js --copias=2 "Sauvage" "Toy Boy" ...
//        → etiquetas-seleccion.html solo con esos nombres (tal como están en la página)
const fs = require('fs');
const path = require('path');

const raiz = path.join(__dirname, '..');
const salida = __dirname;
// Versión para imprimir: dorado más profundo, para que sobre blanco o transparente
// se perciba como el logo de la página sobre fondo negro.
const logo = 'file:///' + path.join(raiz, 'public/img/logo-ankara-impresion.png').replace(/\\/g, '/');

// A4 con márgenes de 8 mm: área útil de 194 × 281 mm.
const ANCHO_UTIL = 194;
const ALTO_UTIL = 281;

const base = `
  @page { size: A4; margin: 8mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Inter', Arial, sans-serif; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .hoja { width: ${ANCHO_UTIL}mm; height: ${ALTO_UTIL}mm; page-break-after: always; overflow: hidden; }
  .hoja:last-child { page-break-after: auto; }
  .titulo { height: 6mm; font-size: 8pt; color: #999; letter-spacing: .05em; }
  .rejilla { display: grid; justify-content: center; align-content: start; }
  /* Línea guía de corte, muy suave. */
  .corte { outline: 0.15mm dashed #cfcfcf; outline-offset: 0; }
`;

const cabecera = (titulo, estilos) => `<!doctype html>
<html lang="es"><head><meta charset="utf-8"><title>${titulo}</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<style>${base}${estilos}</style></head><body>`;

// ---------- Logos para frascos ----------
const TAMANOS = [
  { ml: 30, ancho: 30, alto: 25 },
  { ml: 50, ancho: 40, alto: 35 },
  { ml: 100, ancho: 45, alto: 40 },
];
const SEPARACION = 4; // mm entre logos, para poder cortar

let logos = cabecera('Logos ANKARA para frascos', `
  .logo { display: flex; align-items: center; justify-content: center; padding: 1.2mm; }
  .logo img { max-width: 100%; max-height: 100%; object-fit: contain; }
`);
for (const t of TAMANOS) {
  const columnas = Math.floor((ANCHO_UTIL + SEPARACION) / (t.ancho + SEPARACION));
  const filas = Math.floor((ALTO_UTIL - 6 + SEPARACION) / (t.alto + SEPARACION));
  logos += `<section class="hoja">
    <p class="titulo">Logo para frasco de ${t.ml} ml · ${t.ancho / 10} × ${t.alto / 10} cm (ancho × alto) · ${columnas * filas} logos</p>
    <div class="rejilla" style="grid-template-columns: repeat(${columnas}, ${t.ancho}mm); grid-auto-rows: ${t.alto}mm; gap: ${SEPARACION}mm;">
      ${`<div class="logo corte"><img src="${logo}" alt=""></div>`.repeat(columnas * filas)}
    </div>
  </section>`;
}
logos += '</body></html>';
fs.writeFileSync(path.join(salida, 'logos.html'), logos);

// ---------- Hoja de prueba: un logo de cada tamaño, etiquetas de muestra y una regla ----------
const muestra = (ancho, alto, contenido, pie) => `
  <figure class="muestra">
    <div class="corte caja" style="width: ${ancho}mm; height: ${alto}mm;">${contenido}</div>
    <figcaption>${pie}</figcaption>
  </figure>`;
const etiquetaMuestra = (ancho, alto, compacta) => `
  <div class="marco-prueba ${compacta ? 'compacta' : ''}">
    <p class="insp">Inspirado en</p>
    <p class="nom" style="font-size: ${compacta ? 9 : 15}pt">Sauvage</p>
    <p class="insp">de Dior</p>
  </div>`;
let prueba = cabecera('Hoja de prueba ANKARA', `
  .hoja { display: flex; flex-direction: column; gap: 10mm; }
  .fila { display: flex; align-items: flex-end; gap: 14mm; flex-wrap: wrap; }
  .muestra { display: flex; flex-direction: column; align-items: center; gap: 2mm; }
  .muestra figcaption { font-size: 7.5pt; color: #777; text-align: center; }
  .caja { display: flex; align-items: center; justify-content: center; }
  .caja img { max-width: 100%; max-height: 100%; object-fit: contain; padding: 1.2mm; }
  .marco-prueba {
    width: calc(100% - 2.6mm); height: calc(100% - 2.6mm);
    border: 0.35mm solid #ef9528; outline: 0.15mm solid #ef9528; outline-offset: -1mm;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.6mm; text-align: center;
  }
  .marco-prueba.compacta { width: calc(100% - 1mm); height: calc(100% - 1mm); outline: none; border-width: 0.25mm; gap: 0.35mm; }
  .nom { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 600; color: #1a1714; line-height: 1.15; }
  .compacta .nom { line-height: 1; }
  .insp { font-size: 6.2pt; letter-spacing: .12em; text-transform: uppercase; color: #ef9528; font-weight: 500; line-height: 1; }
  .compacta .insp { font-size: 5.2pt; letter-spacing: .08em; font-weight: 600; }
  .regla { position: relative; width: 100mm; height: 8mm; margin-left: 3mm; border-bottom: 0.3mm solid #333; }
  .regla span { position: absolute; bottom: 0; width: 0.25mm; background: #333; }
  .regla b { position: absolute; bottom: 3.6mm; font-size: 6pt; font-weight: 400; transform: translateX(-50%); color: #333; }
  .nota { font-size: 8pt; color: #555; line-height: 1.5; max-width: 180mm; }
`);
const marcas = Array.from({ length: 101 }, (_, i) =>
  `<span style="left: ${i}mm; height: ${i % 10 === 0 ? 3.5 : i % 5 === 0 ? 2.4 : 1.4}mm"></span>${i % 10 === 0 ? `<b style="left: ${i}mm">${i / 10}</b>` : ''}`).join('');
prueba += `<section class="hoja">
  <p class="titulo">Hoja de prueba ANKARA · imprimir en tamaño real (100 %)</p>
  <div class="fila">
    ${TAMANOS.map(t => muestra(t.ancho, t.alto, `<img src="${logo}" alt="">`, `Logo ${t.ml} ml<br>${t.ancho / 10} × ${t.alto / 10} cm`)).join('')}
  </div>
  <div class="fila">
    ${muestra(60, 24, etiquetaMuestra(60, 24, false), 'Etiqueta esencia<br>6 × 2,4 cm')}
    ${muestra(35, 12, etiquetaMuestra(35, 12, true), 'Etiqueta pequeña<br>3,5 × 1,2 cm')}
  </div>
  <div>
    <div class="regla">${marcas}</div>
    <p class="nota" style="margin-top: 2mm">Regla de 10 cm: mídela con un metro. Si no mide exactamente 10 cm, en la ventana de impresión
    elige "Tamaño real" o escala 100 % (no "Ajustar a la página").</p>
  </div>
</section></body></html>`;
fs.writeFileSync(path.join(salida, 'prueba.html'), prueba);

// ---------- Hoja para adhesivo transparente: 3 logos + etiqueta pequeña ----------
// Línea punteada justo en el borde de cada pieza: al cortar sobre ella se va con el recorte.
// En la etiqueta la línea va 0,8 mm por fuera, para no montarse sobre el marco dorado.
const conMarcas = (ancho, alto, contenido, separada = false) => `
  <div class="pieza corte" style="width: ${ancho}mm; height: ${alto}mm;${separada ? ' outline-offset: 0.8mm;' : ''}">${contenido}</div>`;
let transparente = cabecera('ANKARA para adhesivo transparente', `
  .hoja { display: flex; flex-wrap: wrap; align-content: flex-start; align-items: center; gap: 12mm; padding: 6mm; }
  .pieza { position: relative; display: flex; align-items: center; justify-content: center; }
  .pieza img { max-width: 100%; max-height: 100%; object-fit: contain; padding: 1mm; }
  .corte { outline-color: #b5b5b5; }
  .marco-prueba.compacta {
    width: 100%; height: 100%; border: 0.25mm solid #ef9528;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.35mm; text-align: center;
  }
  .nom { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 600; color: #1a1714; line-height: 1; }
  .insp { font-size: 5.2pt; letter-spacing: .08em; text-transform: uppercase; color: #ef9528; font-weight: 600; line-height: 1; }
`);
transparente += `<section class="hoja">
  ${TAMANOS.map(t => conMarcas(t.ancho, t.alto, `<img src="${logo}" alt="Logo ${t.ml} ml">`)).join('')}
  ${conMarcas(35, 12, etiquetaMuestra(35, 12, true), true)}
</section></body></html>`;
fs.writeFileSync(path.join(salida, 'transparente.html'), transparente);

// ---------- Hoja combinada para adhesivo transparente: los 3 logos + etiquetas pequeñas ----------
// Se genera cuando se pasan nombres con --combinada (las etiquetas salen de esos nombres).
// Dorado exacto de las letras "ANKARA" del logo ajustado (#EF9528); el nombre va en negro.
const ORO_MARCO = '#ef9528';
const ORO_TEXTO = '#ef9528';
// 2 docenas de botellas: por docena se compran 6 de 30 ml, 4 de 50 ml y 2 de 100 ml.
const CANTIDAD_LOGOS = { 30: 12, 50: 8, 100: 4 };
function hojaCombinada(seleccion, copias) {
  const etiquetaChica = f => `
    <div class="chica corte" style="outline-offset: 0.8mm;"><div class="marco-chico">
      <p class="insp">Inspirado en</p>
      <p class="nom" style="font-size: ${f.nombre.length <= 10 ? 9 : f.nombre.length <= 16 ? 7.5 : 6}pt">${f.nombre.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</p>
      <p class="insp">de ${f.casa.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</p>
    </div></div>`;
  let html = cabecera('ANKARA hoja combinada', `
    .hoja { display: flex; flex-direction: column; gap: 6mm; }
    .grupo { display: flex; flex-wrap: wrap; gap: ${SEPARACION}mm; justify-content: center; }
    .logo { display: flex; align-items: center; justify-content: center; padding: 1mm; }
    .logo img { max-width: 100%; max-height: 100%; object-fit: contain; }
    .corte { outline-color: #b5b5b5; }
    .chica { width: 35mm; height: 12mm; }
    .marco-chico {
      width: 100%; height: 100%; border: 0.25mm solid ${ORO_MARCO};
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.35mm; text-align: center; padding: 0 1mm;
    }
    .nom { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 600; color: #1a1714; line-height: 1; }
    .insp { font-size: 5.2pt; letter-spacing: .08em; text-transform: uppercase; color: ${ORO_TEXTO}; font-weight: 600; line-height: 1; }
  `);
  html += `<section class="hoja">
    ${TAMANOS.map(t => `<div class="grupo"${t.ml === 30 ? ' style="gap: 2.8mm;"' : ''}>${`<div class="logo corte" style="width: ${t.ancho}mm; height: ${t.alto}mm;"><img src="${logo}" alt=""></div>`.repeat(CANTIDAD_LOGOS[t.ml])}</div>`).join('')}
    <div class="grupo" style="gap: 4mm 4.5mm;">${seleccion.flatMap(f => Array(copias).fill(f)).map(etiquetaChica).join('')}</div>
  </section></body></html>`;
  return html;
}

// ---------- Etiquetas de las esencias ----------
const fuente = fs.readFileSync(path.join(raiz, 'src/app/data/perfumes.ts'), 'utf8');
const lista = fuente.slice(fuente.indexOf('export const FRAGANCIAS'), fuente.indexOf('export const COLORES_ACORDES'));
const texto = s => s.replace(/\\'/g, "'");
const fragancias = [...lista.matchAll(/\n  \{\n([\s\S]*?)\n  \},/g)].map(m => {
  const campo = c => { const r = m[1].match(new RegExp(`\\n?    ${c}: '((?:[^'\\\\]|\\\\.)*)'`)); return r ? texto(r[1]) : ''; };
  return { nombre: campo('nombre'), casa: campo('casa'), categoria: campo('categoria') };
});
const orden = (a, b) => a.nombre.localeCompare(b.nombre, 'es', { numeric: true });

// Selección: nombres pasados por la línea de comandos, cada uno repetido N veces.
const args = process.argv.slice(2);
const copias = Number((args.find(a => a.startsWith('--copias=')) || '--copias=1').split('=')[1]);
const pedidos = args.filter(a => !a.startsWith('--'));
const seleccion = pedidos.map(n => {
  const f = fragancias.find(x => x.nombre.toLowerCase() === n.toLowerCase());
  if (!f) throw new Error('No está en la página: ' + n);
  return f;
});

const grupos = seleccion.length
  ? [['Selección', seleccion.flatMap(f => Array(copias).fill(f))]]
  : [
      ['Hombre', fragancias.filter(f => f.categoria !== 'Mujer').sort(orden)],
      ['Mujer', fragancias.filter(f => f.categoria === 'Mujer').sort(orden)],
    ];

// Tamaño de etiqueta en mm; se puede cambiar con --tamano=30x10 (ancho x alto).
const tamanoArg = (args.find(a => a.startsWith('--tamano=')) || '--tamano=60x24').split('=')[1].split('x').map(Number);
const ETIQUETA = { ancho: tamanoArg[0], alto: tamanoArg[1], separacion: 3 };
// Las etiquetas pequeñas (menos de 1,6 cm de alto) usan marco sencillo y letra ajustada al espacio.
const compacta = ETIQUETA.alto < 16;
const columnas = Math.floor((ANCHO_UTIL + ETIQUETA.separacion) / (ETIQUETA.ancho + ETIQUETA.separacion));
const filas = Math.floor((ALTO_UTIL - 6 + ETIQUETA.separacion) / (ETIQUETA.alto + ETIQUETA.separacion));
const porHoja = columnas * filas;
// Nombres largos con letra más pequeña para que quepan en una o dos líneas.
const tamanoNombre = n => compacta
  ? Math.min(ETIQUETA.alto * 0.78, (ETIQUETA.ancho * 2.3) / n.length)
  : n.length <= 12 ? 15 : n.length <= 18 ? 13 : n.length <= 24 ? 11.5 : 10;
const escapar = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

let etiquetas = cabecera('Etiquetas de esencias ANKARA', `
  .etiqueta { padding: 1.3mm; }
  .marco {
    height: 100%; border: 0.35mm solid #ef9528; outline: 0.15mm solid #ef9528; outline-offset: -1mm;
    display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1mm;
    text-align: center; padding: 0 3mm;
  }
  /* Se lee como una frase: "Inspirado en 9PM de Afnan". */
  .marco { gap: 0.6mm; }
  .nombre { font-family: 'Cormorant Garamond', Georgia, serif; font-weight: 600; color: #1a1714; line-height: 1.05; }
  .inspirado { font-size: 6.2pt; letter-spacing: .12em; text-transform: uppercase; color: #ef9528; font-weight: 500; }
${compacta ? `
  .etiqueta { padding: 0.5mm; }
  .marco { outline: none; border-width: 0.25mm; gap: 0.35mm; padding: 0 1mm; }
  .nombre { line-height: 1; }
  .inspirado { font-size: 4.5pt; letter-spacing: .08em; line-height: 1; font-weight: 600; }
` : ''}`);
for (const [grupo, items] of grupos) {
  for (let i = 0; i < items.length; i += porHoja) {
    const pagina = items.slice(i, i + porHoja);
    etiquetas += `<section class="hoja">
      <p class="titulo">Etiquetas · ${grupo} · ${i + 1}–${i + pagina.length} de ${items.length} · ${ETIQUETA.ancho / 10} × ${ETIQUETA.alto / 10} cm</p>
      <div class="rejilla" style="grid-template-columns: repeat(${columnas}, ${ETIQUETA.ancho}mm); grid-auto-rows: ${ETIQUETA.alto}mm; gap: ${ETIQUETA.separacion}mm;">
        ${pagina.map(f => `<div class="etiqueta corte"><div class="marco">
          <p class="inspirado">Inspirado en</p>
          <p class="nombre" style="font-size: ${tamanoNombre(f.nombre)}pt">${escapar(f.nombre)}</p>
          <p class="inspirado">de ${escapar(f.casa)}</p>
        </div></div>`).join('')}
      </div>
    </section>`;
  }
}
etiquetas += '</body></html>';
if (seleccion.length && args.includes('--combinada')) {
  fs.writeFileSync(path.join(salida, 'combinada.html'), hojaCombinada(seleccion, copias));
  console.log(`Hoja combinada: logos ${Object.entries(CANTIDAD_LOGOS).map(([ml, n]) => n + '×' + ml + 'ml').join(', ')} + ${seleccion.length * copias} etiquetas pequeñas`);
} else if (seleccion.length) {
  // --salida=nombre para no sobrescribir otra selección.
  const nombreSalida = (args.find(a => a.startsWith('--salida=')) || '--salida=etiquetas-seleccion').split('=')[1];
  fs.writeFileSync(path.join(salida, nombreSalida + '.html'), etiquetas);
  console.log(`Selección: ${seleccion.length} esencias × ${copias} copias = ${seleccion.length * copias} etiquetas`);
} else {
  fs.writeFileSync(path.join(salida, 'etiquetas.html'), etiquetas);
  console.log(`Logos: 3 hojas | Etiquetas: ${fragancias.length} esencias (${grupos[0][1].length} hombre, ${grupos[1][1].length} mujer), ${porHoja} por hoja`);
}
