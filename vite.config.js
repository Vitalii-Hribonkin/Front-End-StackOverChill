import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'es2017', // modern browsers
    assetsInlineLimit: 0, // зображення не будуть інлайнитись як base64
    minify: 'esbuild', // найшвидше та якісне стиснення
    sourcemap: false,
  },
  assetsInclude: ['**/*.webp', '**/*.avif'], // щоб Vite не ігнорував ці формати
});
