import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/atelier-web/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        intro: resolve(__dirname, "bonjour-html/index.html"),
      },
    },
  },
});
