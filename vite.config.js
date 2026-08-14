import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Single-file build: JS, CSS and fonts are all inlined into one HTML file,
// so the landing page renders fully offline and previews inside the app.
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    target: 'es2019',
    assetsInlineLimit: 100000000,
    cssCodeSplit: false,
  },
})
