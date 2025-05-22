/// <reference types="vite/client" />

/// <reference types="vite/client" />

// 扩展全局变量
declare const __APP_INFO__: {
    version: string;
    name: string;
    customConfig: never;
};

// 扩展 ImportMetaEnv 接口
interface ImportMetaEnv {
    // Vite 默认环境变量
    readonly APP_TITLE: string;
}

// 扩展 ImportMeta 接口
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
