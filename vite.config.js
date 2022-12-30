// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  root: "src",

  // Input file
  entry: "./index.html",

  // Output directory
  outDir: "dist",

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
    rollupOptions: {
      input: {
        app: "/index.html",
      },
      output: {
        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",

        assetFileNames: ({ name }) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? "")) {
            return "assets/images/[name]-[hash][extname]";
          }

          if (/\.css$/.test(name ?? "")) {
            return "assets/css/[name]-[hash][extname]";
          }

          // default value
          // ref: https://rollupjs.org/guide/en/#outputassetfilenames
          return "assets/[name]-[hash][extname]";
        },
      },
    },
  },
});
