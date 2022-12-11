import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

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
  plugins: [
    dts({
      // if you need manual include
      // include: [
      //   "src/**/*.ts",
      //   "src/**/*.vue",
      //   "src/**/*.d.ts",
      //   "types/**/*.ts",
      // ],
    }),
    vue(),
  ],
  build: {
    sourcemap: true,
    lib: {
      formats: ["es"],
      entry: resolve(__dirname, "src/index.ts"),
      // name: "component-lib", //umd, iife 포멧으로 인코딩시 필요
    },
    rollupOptions: {
      external: ["vue"],
      treeshake: true,
      output: [
        {
          format: "es",
          entryFileNames: "[name].js",
          preserveModules: true,
        },
      ],
    },
  },
});
