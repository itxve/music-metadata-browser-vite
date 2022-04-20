import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: "window",
  },
  build: {
    outDir: "docs",
  },
  plugins: [vue()],
});
