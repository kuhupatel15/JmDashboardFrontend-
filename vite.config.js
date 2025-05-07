import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Render ka port ya default 5173
    host: "0.0.0.0", // Ensure external access
  },
});