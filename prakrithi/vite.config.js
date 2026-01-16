import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/prakrithi-clothing/', // 👈 EXACT repo name
  plugins: [react()],
})
