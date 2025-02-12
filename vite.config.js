import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: "build", // This makes sure Vite outputs to the 'build' folder
  },
  base: "/Paginated-User-List/", // Add this line
})
