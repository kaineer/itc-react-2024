import { defineConfig } from 'vite'
import { join } from 'path'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@styles': join(__dirname, "src/styles"),
    },
  },
  css: {
    scopeBehaviour: 'local',
  },
})
