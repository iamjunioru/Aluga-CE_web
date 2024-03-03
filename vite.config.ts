import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        "name": "AlugaCE",
        "short_name": "AlugaCE",
        "start_url": "/",
        "display": "standalone",
        "background_color": "#ffffff",
        "lang": "pt",
        "scope": "/",
        "dir": "ltr",
        "orientation": "natural",
        "theme_color": "#0096c7",
        "icons": [
          {
            "src": "logo-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "logo-512x512.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any"
          }
        ],
        "screenshots": [
          {
            "src": "https://raw.githubusercontent.com/iamjunioru/Aluga-CE_web/main/screenshots/1280x800-screenshot.png",
            "sizes": "1280x800",
            "type": "image/png"
          }
        ],
        "description": "O Aluga-CE é um aplicativo de locação de imóveis no interior do Ceará, oferecendo uma ampla variedade de opções. Com uma interface intuitiva e recursos de busca avançados, os usuários podem encontrar facilmente o imóvel ideal para suas necessidades."
      }
    })
  ],
})
