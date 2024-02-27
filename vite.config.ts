import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      manifest: {
        "background_color": "#ffffff",
        "dir": "ltr",
        "start_url": "/",
        "display": "standalone",
        "name": "Aluga-CE PWA",
        "orientation": "any",
        "scope": "/",
        "short_name": "Aluga-CE",
        "theme_color": "#3a9aa5",
        "icons": [
          {
            "src": "https://raw.githubusercontent.com/iamjunioru/Aluga-CE_web/main/manifest-icon-512.maskable.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "maskable"
          },
          {
            "src": "https://raw.githubusercontent.com/iamjunioru/Aluga-CE_web/main/manifest-icon-192.maskable.png",
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
        "description": "pwa."
      }
  })],
})
