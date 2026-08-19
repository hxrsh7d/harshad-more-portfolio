import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//
// GitHub Pages project sites are served from a sub-path
// (https://<user>.github.io/<repo-name>/), so the build needs to know
// that sub-path at build time. The deploy workflow (.github/workflows/deploy.yml)
// sets VITE_BASE_PATH automatically from the repository name — you shouldn't
// need to edit this file. Running `npm run dev`/`npm run build` locally
// without that variable falls back to "/".
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE_PATH || '/',
})
