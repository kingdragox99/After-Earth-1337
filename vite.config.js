// vite.config.js
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",

  // Input file
  entry: "./public/index.html",

  // Output directory
  outDir: "dist",

  // File patterns to include in the build
  assets: ["public/**/*", "src/**/*.css"],

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
        app: "./public/index.html",
      },
    },
  },
});
