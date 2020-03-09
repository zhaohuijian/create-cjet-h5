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

> More see info:[https://github.com/chanjet-fe/cjet-h5-template](https://github.com/chanjet-fe/cjet-h5-template)

## 快速开始

```bash
npx create-cjet-h5 chanjet-mobile

cd chanjet-mobile

npm run dev #开发环境

npm run build #生产环境
```

#### 更多安装方式

您需要在本地开发计算机上安装 Node 8.16.0 或 Node 10.16.0 或更高版本（但服务器上不需要）。 您可以使用[nvm](https://github.com/nvm-sh/nvm#installation)（macOS / Linux）或[nvm-windows](https://github.com/coreybutler/nvm-windows#node-version-manager-nvm-for-windows)在不同项目之间切换 Node 版本。

##### npm

```bash
npm init cjet-h5 chanjet-mobile
```

##### yarn

```bash
yarn create cjet-h5 chanjet-mobile
```

将在当前文件夹中创建一个名为`chanjet-mobile`的目录。
在该目录内，它将生成初始项目结构并安装可相关依赖项：

```bash
chanjet-mobile
├── README.md
├── babel.config.js
├── node_modules
├── package.json
├── tsconfig.json
└── src
    ├── App.module.less
    ├── App.tsx
    ├── index.html
    ├── index.less
    ├── index.tsx
    ├── logo.svg
    ├── public
    │   ├── favicon.ico
    │   ├── lib
    │   │   ├── es6-promise.min.js
    │   │   └── fastclick.js
    │   └── manifest.json
    ├── react-app-env.d.ts
    └── serviceWorker.js
```

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2020-present, [chanjet-fe](https://github.com/chanjet-fe).
