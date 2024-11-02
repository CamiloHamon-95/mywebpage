import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/

export default defineConfig({

    plugins: [
      svgr(),
      react()
    ],

    preview: {
      host: true,
      port: 4000
    }
});

/*
export default defineConfig({
  plugins: [
    svgr(),
    react()
  ],
});
*/
