import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import frappeui from "frappe-ui/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    frappeui({
      frappeProxy:true,
      lucideIcons:true
    })
  ],
  server: {
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      "tailwind.config.js": path.resolve(__dirname, "tailwind.config.js"),
    },
  },
  optimizeDeps: {
    include: [
      "feather-icons",
      "tailwind.config.js",
      "prosemirror-state",
      "prosemirror-view",
      "lowlight",
      "interactjs",
      "debug"
    ],
  }
})
