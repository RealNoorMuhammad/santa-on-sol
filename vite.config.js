import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/pump-fees': {
        target: 'https://swap-api.pump.fun',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/pump-fees/, ''),
      },
      '/api/sol-price': {
        target: 'https://frontend-api-v3.pump.fun',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/sol-price/, ''),
      },
    },
  },
})
