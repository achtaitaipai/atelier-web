import { defineConfig } from "vite";
import { resolve } from "path";
import { globby } from "globby";

const paths = await globby("**/index.html", {
  ignore: ["dist/**", "node_modules/**"],
});

export default defineConfig({
  base: "/atelier-web/",
  build: {
    rollupOptions: {
      input: paths.map((p) => resolve(__dirname, p)),
    },
  },
});
