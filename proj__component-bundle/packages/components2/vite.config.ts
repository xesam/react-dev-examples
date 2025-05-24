import react from "@vitejs/plugin-react";
import * as path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "@mono/components2",
      fileName: (format) => `index.${format}.js`,
    },
    copyPublicDir: false,
    rollupOptions: {
      external: [
        "react",
        "react-dom",
        "react/jsx-runtime", // 明确排除 JSX 运行时
        "react/jsx-dev-runtime", // 开发环境 JSX 运行时
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    outDir: "dist",
  },
  plugins: [
    react(),
    dts({
      outDir: "dist/types",
      insertTypesEntry: true,
      include: ["src/**/*"],
      exclude: ["src/example/**/*", "**/*.test.*", "**/*.spec.*"],
    }),
  ],
});
