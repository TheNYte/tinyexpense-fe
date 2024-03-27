import react from '@vitejs/plugin-react';
import vike from 'vike/plugin';
import {UserConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

const config: UserConfig = {
  resolve: {
    alias: {
      '#root': __dirname,
    },
  },
  plugins: [
    react(),
    vike({
      prerender: true,
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: false,
      },
      manifest: {
        short_name: 'Tinyexpense',
        name: 'Tinyexpense',
        description: 'Tinyexpense: Manage your expenses the right way!',
        icons: [
          {
            src: '/app_icon_512.svg',
            type: 'image/svg+xml',
            sizes: '512x512',
          },
          {
            src: '/app_icon_384.svg',
            type: 'image/svg+xml',
            sizes: '384x384',
          },
          {
            src: '/app_icon_192.svg',
            type: 'image/svg+xml',
            sizes: '192x192',
          },
        ],
        id: '/?source=pwa',
        start_url: '/?source=pwa',
        background_color: '#3367D6',
        display: 'standalone',
        scope: '/',
        theme_color: '#3367D6',
      },
    }),
  ],
  server: {
    https: true,
  },
};

export default config;
