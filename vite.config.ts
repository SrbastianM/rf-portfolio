import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/rf-portfolio',
  plugins: [react(), tailwindcss()],
  build: {
    commonjsOptions: {esmExternals: true}
  }
})
