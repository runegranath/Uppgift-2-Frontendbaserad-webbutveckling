import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
base: '/Uppgift-2-Frontendbaserad-webbutveckling',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./index.html"),
      },
    },
  },
});
