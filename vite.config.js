import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  server: {
    port: 5501,
    open: true
  },
  build: {
    rollupOptions: {
      external: ["react-router-dom"],
    },
  },
});
