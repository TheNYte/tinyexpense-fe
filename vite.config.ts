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
    VitePWA({registerType: 'autoUpdate'}),
  ],
};

export default config;
