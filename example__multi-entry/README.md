# 基于 React 的多入口 WebApp 架构方案

## 一、背景

随着业务发展，App 中需要承载越来越多的功能模块（如活动页、用户中心、支付流程、运营页面等）。这些模块具有以下特点：

- 功能相对独立
- 迭代频率高
- 需要快速上线与调整
- 部分场景需要跨端复用（H5 / WebView）

传统方案中，若采用单一 Web 应用（SPA），会逐渐暴露出问题：

- 应用体积膨胀，首屏加载性能下降
- 各功能模块耦合严重，维护成本高
- 构建与发布粒度过粗，影响迭代效率

因此，需要一种既能 **复用代码**，又能 **保持模块独立性** 的架构方案。

## 二、目的

本方案目标是构建一套：

> “单项目、多入口、模块解耦、性能可控”的 WebApp 架构体系

### 2.1 架构目标

- 支持多个功能模块独立入口访问
- 降低模块间耦合，提高可维护性
- 保证良好的首屏加载性能
- 支持灵活部署与扩展

### 2.2 工程目标

- 单仓库管理（Monorepo 形态）
- 多入口构建（Multi-entry）
- 公共能力复用（shared）
- 构建产物可按模块拆分

## 三、方案设计

### 3.1 核心设计思想

本方案核心是：

> 一个 WebApp 项目，但由多个独立入口页面组成

每个入口页面对应一个业务模块：

- 独立加载
- 独立运行
- 共享基础能力

### 3.2 整体结构设计

```
webapp/
 ├── apps/                 # 各业务模块
 │    ├── activity/
 │    ├── profile/
 │    ├── payment/
 │
 ├── shared/               # 公共模块
 │    ├── components/
 │    ├── hooks/
 │    ├── utils/
 │
 ├── activity.html         # 多入口 HTML
 ├── profile.html
 ├── payment.html
```

### 3.3 多入口机制

使用 Vite 进行多入口构建：

```ts
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        activity: resolve(__dirname, 'activity.html'),
        profile: resolve(__dirname, 'profile.html'),
        payment: resolve(__dirname, 'payment.html')
      }
    }
  }
})
```

#### 构建产物

```
dist/
 ├── activity.html
 ├── profile.html
 ├── payment.html
 ├── assets/
```

#### 访问方式

```
/activity.html?id=123
/profile.html
/payment.html
```

### 3.4 入口与模块映射

每个入口对应一个独立 React 应用：

```tsx
// src/apps/activity/main.tsx
ReactDOM.createRoot(document.getElementById('root')!).render(
  <ActivityApp />
)
```

#### 设计原则

- 每个入口只负责一个业务模块
- 不跨入口共享运行时状态
- 避免跨模块直接依赖

### 3.5 公共能力复用（Shared）

#### 目录

```
shared/
 ├── components/     # UI 组件库
 ├── hooks/          # 通用 Hooks
 ├── utils/          # 工具函数
```

#### 内容范围

- UI 组件库
- 通用 Hooks
- 网络请求封装
- 工具函数

#### 设计原则

- 无业务耦合
- 可复用
- 稳定接口

### 3.6 资源与性能优化

#### 1. 代码拆分

每个入口生成独立资源：

```
activity.[hash].js
profile.[hash].js
payment.[hash].js
```

#### 2. 公共依赖抽离

将通用依赖打包为：

```
vendor.js
```

#### 3. 缓存策略

| 资源类型 | 策略 |
|---------|------|
| HTML | 短缓存 |
| JS/CSS | 强缓存（hash） |

### 3.7 部署与扩展

#### 部署方式

- 静态资源部署至 CDN
- 每个入口独立访问

#### 扩展能力

当业务规模扩大，可演进为：

- 子应用拆分
- 微前端架构（如 qiankun）

## 四、整体架构

### 4.1 架构分层

```
┌───────────────────────┐
│      浏览器 / WebView  │
└──────────┬────────────┘
           │
┌──────────▼────────────┐
│      多入口 WebApp     │
│  - activity App        │
│  - profile App         │
│  - payment App         │
└──────────┬────────────┘
           │
┌──────────▼────────────┐
│      Shared 层         │
│  - components          │
│  - hooks               │
│  - utils               │
└───────────────────────┘
```

### 4.2 运行机制

1. 用户访问某个入口 URL（如 `activity.html`）
2. 加载对应 HTML
3. 启动对应 React 应用
4. 渲染业务页面
5. 按需调用 shared 能力

## 五、方案优势

### 5.1 技术优势

- **模块解耦**：各功能独立运行
- **性能优良**：避免加载无关代码
- **结构清晰**：入口与业务一一对应
- **易于扩展**：支持后续演进

### 5.2 工程优势

- 单仓库管理，降低维护成本
- 公共能力复用，减少重复开发
- 构建清晰，调试简单

### 5.3 业务价值

- 提升开发效率
- 加快功能上线速度
- 降低系统复杂度
- 支持多端复用

## 六、结论

本方案通过“**单项目 + 多入口**”的设计，在避免传统 SPA 架构问题的同时，实现了：

- 模块独立性
- 代码复用能力
- 性能与可维护性的平衡

适用于 App 内嵌 Web、运营页面、业务模块化等典型场景。

## 七、一句话总结

> 将 Web 应用从“一个大应用”拆分为“多个独立入口的小应用集合”，但仍保持工程上的统一管理。

---

## 快速开始

### 安装依赖

```shell
pnpm i
```

### 开发模式

```shell
pnpm dev
```

### 访问各入口

```
http://localhost:5173/activity.html?id=123
http://localhost:5173/profile.html
http://localhost:5173/payment.html
```

### 生产构建

```shell
pnpm build
```

构建产物位于 `dist/` 目录，包含各入口 HTML 及对应的静态资源。
