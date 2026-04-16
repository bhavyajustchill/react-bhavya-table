import fs from 'fs';

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

// React 19 default peer deps
pkg.peerDependencies['react'] = "^18.2.0 || ^19.0.0";
pkg.peerDependencies['react-dom'] = "^18.2.0 || ^19.0.0";

if (!pkg.scripts) pkg.scripts = {};
pkg.scripts['build:lib'] = 'vite build';

pkg.main = 'dist/bhavya-table.cjs';
pkg.module = 'dist/bhavya-table.mjs';
pkg.exports = {
  ".": {
    "import": "./dist/bhavya-table.mjs",
    "require": "./dist/bhavya-table.cjs",
    "default": "./dist/bhavya-table.mjs"
  },
  "./style.css": "./dist/bhavya-table.css"
};
pkg.files = ["dist"];

fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
