import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'BhavyaTable',
      formats: ['es', 'cjs'],
      fileName: (format) => `bhavya-table.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: (id) => {
        // Externalize all dependencies to prevent Rollup from injecting CJS __require wrappers
        if (
          id.startsWith('react') || 
          id === 'jspdf' || 
          id === 'jspdf-autotable' || 
          id === 'axios' || 
          id.startsWith('bootstrap')
        ) {
          return true;
        }
        return false;
      },
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
