import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx,css}',
    './**/*.vue', // Just in case
  ],
  plugins: [vue(), tailwindcss(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  theme: {
    extend: {
      colors: {
        'clinic-blue': '#0077B6',
        'clinic-light-blue': '#E0F4FF',
        'clinic-dark': '#005a8b',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
})
