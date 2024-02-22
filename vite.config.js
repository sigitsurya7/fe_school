import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { VitePWA } from "vite-plugin-pwa"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Zee School',
        short_name: 'ZC',
        description: 'School Management System',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/icon/maskable_icon_x96.png',
            sizes: '96x96',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icon/maskable_icon_x128.png',
            sizes: '128x128',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icon/maskable_icon .png',
            sizes: '360x360',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: '/icon/maskable_icon_x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
  server: {
    proxy: {
      '/rajaongkir': {
        target: 'https://api.rajaongkir.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/rajaongkir/, ''),
      },
      '/v1': {
        target: 'http://103.30.194.28/v1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/v1/, ''),
      },
    },
  },
})
