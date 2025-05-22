import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import pkg from "./package.json";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    define: {
        "import.meta.env.VITE_VAR_1": `"[vite.config.ts]var_1"`,
        __APP_INFO__: JSON.stringify({
            name: pkg.name,
            version: pkg.version,
            customConfig: pkg.customConfig
        }),
    },
});
