// vite.config.js
import { defineConfig } from "vite";
import { resolve, parse } from "path";

export default defineConfig({
  base: "/",
  root: resolve(__dirname, "src"),
  // Input file
  entry: "./index.html",
  // File patterns to include in the build
  assets: ["src/**/*.png", "src/**/*.css"],

  server: {
    port: 3000,
    open: "/index.html",
  },
  preview: {
    port: 8080,
  },

  build: {
    chunkSizeWarningLimit: 1600,
    outDir: "../dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        app: "/index.html",
      },
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/img/[name]-[hash][extname]";
          }
          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
