import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carrega as variáveis de ambiente baseado no modo (development/production)
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  
  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['lucide-react'],
    },
    server: {
      port: 3000,
      strictPort: true // Não tenta outras portas se 3000 estiver em uso
    },
    // Garante que as variáveis de ambiente sejam expostas ao cliente
    define: {
      'import.meta.env': JSON.stringify(env)
    },
    resolve: {
      alias: [
        { find: '@', replacement: path.resolve(__dirname, 'src') },
        { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') }
      ]
    },
    build: {
      assetsDir: 'assets',
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]'
        }
      }
    }
  };
});
