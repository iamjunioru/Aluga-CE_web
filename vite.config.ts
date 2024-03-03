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
              "src": "android/android-launchericon-512-512.png",
              "sizes": "512x512"
            },
            {
              "src": "android/android-launchericon-192-192.png",
              "sizes": "192x192"
            },
            {
              "src": "android/android-launchericon-144-144.png",
              "sizes": "144x144"
            },
            {
              "src": "android/android-launchericon-96-96.png",
              "sizes": "96x96"
            },
            {
              "src": "android/android-launchericon-72-72.png",
              "sizes": "72x72"
            },
            {
              "src": "android/android-launchericon-48-48.png",
              "sizes": "48x48"
            }
          ],
        "description": "O Aluga-CE é um aplicativo de locação de imóveis no interior do Ceará, oferecendo uma ampla variedade de opções. Com uma interface intuitiva e recursos de busca avançados, os usuários podem encontrar facilmente o imóvel ideal para suas necessidades."
      }
    })
  ],
})
