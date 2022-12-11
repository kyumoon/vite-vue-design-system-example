import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      // @/xxxx => src/xxxx
      {
        find: /^@\/(.+)/,
        replacement: `${resolve(__dirname, "src")}/$1`,
      },
    ],
  },
  plugins: [vue(), visualizer()],
});
