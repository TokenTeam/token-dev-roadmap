---
autoPrev: framework
---

# 前端工程化

对于一般的框架如`react`/`vue`，都提供了脚手架可以迅速创建无需自己再手动配置的项目，然后在模板项目的基础上进行开发，但是对构建工具进行系统学习和了解，也是非常必要的。

至少要看得懂[package.json](https://www.npmjs.cn/getting-started/using-a-package.json/)文件的内容。

## npm

npm 是JavaScript 世界的包管理工具，并且是Node.js 平台的默认包管理工具。通过npm 可以安装、共享、分发代码，管理项目依赖关系。

npm 由三个独立的部分组成：
- [网站](https://www.npmjs.com/) 是开发者查找包（package）、设置参数以及管理 npm 使用体验的主要途径。
- 注册表 是一个巨大的数据库，保存了每个包（package）的信息。
- [CLI](https://docs.npmjs.com/cli/v7/commands/npm) 通过命令行或终端运行，即`npm`命令。开发者通过 CLI 与 npm 打交道。

推荐阅读
- [npm中文文档 | npm中文网](https://www.npmjs.cn/)

## webpack

本质上，webpack 是一个用于现代 JavaScript 应用程序的静态模块打包工具。

当 webpack 处理应用程序时，它会在内部构建一个 依赖图(dependency graph)，此依赖图对应映射到项目所需的每个模块，并生成一个或多个 bundle。

推荐阅读
- [webpack 官方中文文档](https://webpack.docschina.org/concepts/)

## vite

Vite 自称下一代前端开发与构建工具，已经被`vue3.x`采用，用于项目的构建。

推荐阅读
- [Vite 官方中文文档](https://cn.vitejs.dev/)

## 其他脚手架工具

待补充...
