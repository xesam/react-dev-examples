import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import { resolve } from 'path';
import { readdirSync } from 'fs';

// 获取 components 目录下的所有组件
const components = readdirSync(resolve(__dirname, 'src/components'));

// 生成入口配置
const entry = {
    index: resolve(__dirname, 'src/index.ts'),
    ...Object.fromEntries(components.map((name) => [`components/${name}/index`, resolve(__dirname, `src/components/${name}/index.tsx`)]))
};


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      include: ["src"],
      outDir: "dist/types",
      // Ensure .d.ts files are generated correctly
      staticImport: true,
      insertTypesEntry: true,
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: entry,
      name: "@mono/components",
      formats: ["es", "cjs"],
      fileName: (format, entryName) => {
        const extension = format === "es" ? ".es.js" : ".cjs.js";
        return `${entryName}${extension}`;
      },
    },
    rollupOptions: {
      // Make sure to externalize deps that shouldn't be bundled
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        // Preserve directory structure
        preserveModules: true,
        preserveModulesRoot: "src",
        // Global variables for UMD build
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
        },
      },
    },
    // Generate sourcemaps
    sourcemap: true,
    // Minify the output
    minify: "terser",
  },
});
