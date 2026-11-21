// Servidor estático sin dependencias para hosting Node (Voriam / Pterodactyl).
// Sirve la build de Angular y devuelve index.html para las rutas de la SPA.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const PORT = Number(process.env.SERVER_PORT || process.env.PORT || 3000);
const ROOT = path.resolve(__dirname, process.env.STATIC_DIR || 'dist/perfumeria-landing/browser');

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.webmanifest': 'application/manifest+json',
  '.pdf': 'application/pdf',
};

function send(res, file, status = 200) {
  const ext = path.extname(file).toLowerCase();
  // Los archivos con hash de Angular se pueden cachear mucho tiempo; index.html no.
  const cache = ext === '.html' ? 'no-cache' : 'public, max-age=604800';
  res.writeHead(status, { 'Content-Type': TYPES[ext] || 'application/octet-stream', 'Cache-Control': cache });
  fs.createReadStream(file).pipe(res);
}

http
  .createServer((req, res) => {
    let urlPath;
    try {
      urlPath = decodeURIComponent(new URL(req.url, 'http://x').pathname);
    } catch {
      res.writeHead(400).end('Bad request');
      return;
    }
    const file = path.join(ROOT, urlPath);
    if (!file.startsWith(ROOT)) {
      res.writeHead(403).end('Forbidden');
      return;
    }
    fs.stat(file, (err, st) => {
      if (!err && st.isFile()) return send(res, file);
      if (!err && st.isDirectory()) {
        const idx = path.join(file, 'index.html');
        if (fs.existsSync(idx)) return send(res, idx);
      }
      // Rutas sin extensión → la SPA; archivos inexistentes → 404.
      if (path.extname(urlPath)) {
        res.writeHead(404).end('Not found');
        return;
      }
      send(res, path.join(ROOT, 'index.html'));
    });
  })
  .listen(PORT, '0.0.0.0', () => {
    console.log(`Ankara Perfumería sirviendo ${ROOT} en el puerto ${PORT}`);
  });
