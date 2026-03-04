// @ts-nocheck
import { defineConfig } from 'vite'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Plugin to resolve figma:asset/ imports to local files in public/assets/
// Maps Figma hash filenames → human-readable names in public/assets/
function figmaAssetPlugin() {
  // Hash → readable filename mapping (add new entries here when importing new Figma assets)
  const hashMap: Record<string, string> = {
    '123d065eb40be6b6b2cea93d0a1224194ad9841b.png': 'nubank.png',
    '9d52d65b353dfdc54492a54b714ea6cfdbc63b0d.png': 'picpay.png',
    '76ef527c08d294d42c2c0ae679bcd99eada38b8c.png': 'itau.png',
    '2340e96d4c1baa8ad37a87322e9414aba2edb5f4.png': 'thoughtworks.png',
    '8e15a58e102e76a08fc486407a04b2c36dfdd2c8.png': 'btg.png',
    'ad36f843da7b646a2eff56520cf4f93255ce96ee.png': 'ccee.png',
    '2abfb6dc43d519dc9ecb81c7a661178efa25f0cd.png': 'pucrs.png',
    '1c19751b3b45b9008ee38dba6462c907bba152ad.png': 'uscs.png',
  }

  return {
    name: 'figma-asset-resolver',
    resolveId(source: string) {
      if (source.startsWith('figma:asset/')) {
        const hashFilename = source.replace('figma:asset/', '')
        const readableName = hashMap[hashFilename] || hashFilename
        const localPath = path.resolve(__dirname, 'public/assets', readableName)
        if (!fs.existsSync(localPath)) {
          console.warn(`[figma-asset] Missing file: public/assets/${readableName} (hash: ${hashFilename})`)
        }
        return { id: `/assets/${readableName}`, external: true }
      }
      return null
    },
  }
}

export default defineConfig({
  // base: '/resume-figma-make/',  // uncomment only for GitHub Pages
  plugins: [
    figmaAssetPlugin(),
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})