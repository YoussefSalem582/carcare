import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// GitHub project Pages: https://<user>.github.io/carcare/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/carcare/',
});
