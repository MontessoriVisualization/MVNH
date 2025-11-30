// Create a SPA fallback 404.html for GitHub Pages by copying dist/index.html
const fs = require('fs');
const path = require('path');

const dist = path.join(__dirname, '..', 'dist');
const indexPath = path.join(dist, 'index.html');
const fallbackPath = path.join(dist, '404.html');

if (!fs.existsSync(dist)) {
  console.error('[spa-404] dist directory not found. Did the build run?');
  process.exit(1);
}

if (!fs.existsSync(indexPath)) {
  console.error('[spa-404] index.html not found in dist.');
  process.exit(1);
}

try {
  fs.copyFileSync(indexPath, fallbackPath);
  console.log('[spa-404] 404.html created for SPA fallback.');
} catch (err) {
  console.error('[spa-404] Failed to create 404.html:', err);
  process.exit(1);
}
