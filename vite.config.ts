import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// yarn add --dev @esbuild-plugins/node-globals-polyfill
import { NodeGlobalsPolyfillPlugin } from "@esbuild-plugins/node-globals-polyfill";
// yarn add --dev @esbuild-plugins/node-modules-polyfill
import { NodeModulesPolyfillPlugin } from "@esbuild-plugins/node-modules-polyfill";
// You don't need to add this to deps, it's included by @esbuild-plugins/node-modules-polyfill
import rollupNodePolyFill from "rollup-plugin-node-polyfills";
// https://vitejs.dev/config/
// https://medium.com/@ftaioli/using-node-js-builtin-modules-with-vite-6194737c2cd2
export default defineConfig({
  resolve: {
    alias: {
      // by node-globals-polyfill
      events: "rollup-plugin-node-polyfills/polyfills/events",
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      define: {
        global: "globalThis",
      },
      // Node.js global to browser globalThis
      // Enable esbuild polyfill plugins
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
        // not must
        NodeModulesPolyfillPlugin(),
      ],
    },
  },
  build: {
    outDir: "docs",
    rollupOptions: {
      plugins: [
        // Enable rollup polyfills plugin
        // used during production bundling
        rollupNodePolyFill(),
      ],
    },
  },
  plugins: [vue()],
});
