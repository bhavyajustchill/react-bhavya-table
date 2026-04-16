const fs = require('fs');

const pkgStr = fs.readFileSync('package.json', 'utf8');
const pkg = JSON.parse(pkgStr);

delete pkg.private;

if (!pkg.peerDependencies) pkg.peerDependencies = {};
if (pkg.dependencies) {
  if (pkg.dependencies['react']) {
    pkg.peerDependencies['react'] = pkg.dependencies['react'];
    delete pkg.dependencies['react'];
  }
  if (pkg.dependencies['react-dom']) {
    pkg.peerDependencies['react-dom'] = pkg.dependencies['react-dom'];
    delete pkg.dependencies['react-dom'];
  }
}

if (!pkg.scripts) pkg.scripts = {};
pkg.scripts['build:lib'] = 'vite build';

pkg.main = 'dist/bhavya-table.umd.js';
pkg.module = 'dist/bhavya-table.es.js';
pkg.exports = {
  ".": {
    "import": "./dist/bhavya-table.es.js",
    "require": "./dist/bhavya-table.umd.js"
  },
  "./style.css": "./dist/style.css"
};
pkg.files = ["dist"];

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
