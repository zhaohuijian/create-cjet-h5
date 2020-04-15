<a href="https://www.npmjs.com/package/create-cjet-h5"><img src="https://img.shields.io/npm/v/create-cjet-h5.svg" alt="npm-version"></a> <img src="https://img.shields.io/npm/dm/create-cjet-h5.svg" alt="download-num"> <img src="https://img.shields.io/badge/node-%3E=8.16.0-brightgreen.svg" alt="node"> <img src="https://img.shields.io/npm/l/create-cjet-h5.svg" alt="license"> <img src="https://img.shields.io/badge/platform-MacOS%7CLinux%7CWindows-lightgrey.svg" alt="platform">

# create-cjet-h5

零配置快速创建移动端 H5 企业级应用。

### 基本特性：

- 开发 H5 企业级应用的标准化模板
- 基于 antdMobile 基础组件库
- 使用 Less 及 cssModule 编写样式
- 使用 typescript
- 使用 svg symbol 图标解决方案
- 集成 PWA
- 支持 antd 组件主题定制
- 集成工程化开发及构建的最佳实践

### 高级特性（专业版）

- 集成 React-router 和 React-router-dom 路由方案
- 集成 Mobx 和 Mobx-react 状态管理
- 集成 react-transition-group 路由切换动画方案
- 集成众多 antdMobile 组件示例
- 集成众多完善的业务场景组件（待持续更新...）
- 集成组件化开发的最佳实践
- 集成路由配置的最佳实践
- 集成状态管理的最佳实践
- 集成代码分割及按需加载的最佳实践

## 快速开始

```bash
# 创建 企业级H5应用开发框架-基础版
npx create-cjet-h5 chanjet-mobile

# 创建 企业级H5应用开发框架-专业版
npx create-cjet-h5 chanjet-mobile --pro

cd chanjet-mobile

npm run dev #开发环境

npm run build #生产构建
```

#### 更多安装方式

您需要在本地开发计算机上安装 Node 8.16.0 或 Node 10.16.0 或更高版本（但服务器上不需要）。 您可以使用[nvm](https://github.com/nvm-sh/nvm#installation)（macOS / Linux）或[nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)在不同项目之间切换 Node 版本。

##### npm

```bash
# 创建 企业级H5应用开发框架-基础版
npm init cjet-h5 chanjet-mobile

# 创建 企业级H5应用开发框架-专业版
npm init cjet-h5 chanjet-mobile --pro
```

##### yarn

```bash
# 创建 企业级H5应用开发框架-基础版
yarn create cjet-h5 chanjet-mobile

# 创建 企业级H5应用开发框架-专业版
yarn create cjet-h5 chanjet-mobile --pro
```

将在当前文件夹中创建一个名为`chanjet-mobile`的目录。
在该目录内，它将生成初始项目结构并安装相关依赖项：

```bash
chanjet-mobile
├── README.md
├── babel.config.js
├── node_modules
├── package.json
├── tsconfig.json
├── public
│   ├── favicon.ico
│   ├── lib
│   │   ├── es6-promise.min.js
│   │   └── fastclick.js
│   └── manifest.json
└── src
    ├── App.module.less
    ├── App.tsx
    ├── index.html
    ├── index.less
    ├── index.tsx
    ├── logo.svg
    ├── react-app-env.d.ts
    └── serviceWorker.js
```

## 查看更多信息

- 企业级 H5 应用开发框架-基础版：[https://github.com/chanjet-fe/cjet-h5-template](https://github.com/chanjet-fe/cjet-h5-template)

- 企业级 H5 应用开发框架-专业版：[https://github.com/chanjet-fe/cjet-h5-pro-template](https://github.com/chanjet-fe/cjet-h5-pro-template)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, [chanjet-fe](https://github.com/chanjet-fe).
