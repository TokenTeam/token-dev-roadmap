# Token-Dev-RoadMap

Token团队培养方案仓库[阅读链接](https://tokenteam.github.io/token-dev-roadmap/#/)

## 项目说明

本项目基于`vuepress`搭建,项目配置文件位于`docs/.vuepress/config.js`,[vuepress参考文档](https://vuepress.vuejs.org/zh/)

## 编写说明

文档位于`docs`文件夹下，按照类别进行归档。文档负责与跟进记录见[维护追踪表](tracking.md)

`docs`文件夹下的分类中，`README.md`为该类型的概览描述，细分点为同一目录下点`md`文件

除了`README.md`文件外，其他文件文件名均为小写，使用连字符`-`替代空格。

## 开发配置

环境要求:`Node.js>=8.6`

```shell
# 安装依赖
yarn install    # 或者 npm install

# 本地运行
yarn start      # 或者 npm run start

# 构建发布
yarn build      # 或者 npm run build

# 详细的命令配置见package.json中的script属性
```