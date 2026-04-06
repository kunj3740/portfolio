import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    esbuildOptions: {
      supported: {
        bigint: true,
      },
    },
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
});
