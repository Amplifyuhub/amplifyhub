import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD
=======
import path from 'path';
>>>>>>> luiz

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
=======
  publicDir: 'public',
  envPrefix: 'VITE_',
  define: {
    'process.env': process.env
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        assetFileNames: (assetInfo: { name?: string }) => {
          const info = assetInfo.name?.split('.') || []
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          }
          return `assets/[name]-[hash][extname]`
        }
      }
    }
  }
>>>>>>> luiz
});
