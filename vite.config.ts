/// <reference types="vitest" />

import { defineConfig, type AliasOptions } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
import path from 'path'

const alias: AliasOptions = { '@': path.resolve(__dirname, './src') }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA()],
  resolve: { alias },
  test: { alias, environment: 'jsdom', globals: true, reporters: 'verbose' },
})
