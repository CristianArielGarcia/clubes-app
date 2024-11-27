import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    // eslint-disable-next-line no-undef
    port: process.env.VITE_PORT || 5001,
  }
})
