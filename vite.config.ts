import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },

  // pdfjs-dist@4 ships ESM that relies on top-level await; allow it in the build target.
  build: {
    target: "esnext",
  },

  esbuild: {
    target: "esnext",
  },

  plugins: [
    react()
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});