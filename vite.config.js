import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import process from 'node:process'
import { defineConfig } from 'vite'

// GitHub Pages serves this repository as a project site at /cegroncare/.
// Set VITE_BASE_PATH=/ when building for a custom domain or a user/organisation site.
const basePath = process.env.VITE_BASE_PATH || '/cegroncare/'

// https://vite.dev/config/
export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss()],
})
