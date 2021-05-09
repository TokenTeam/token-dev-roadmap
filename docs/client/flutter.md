---
autoPrev: ios
---

# Flutter

Flutter是谷歌推出的跨平台UI框架，目前团队的掌上吾理app的Android端就是用Flutter混合栈做的。考虑到ios开发招新的门槛限制，团队选择Flutter作为移动端开发的备选方案，以防之后ios开发的断代。

## dart语言入门

### Week1

运行dart代码需要dart sdk，这里推荐直接下载Flutter sdk，因为下载Flutter sdk会自带dart sdk。这里推荐[Flutter中文网](https://flutterchina.club/)，你可以点击快速开始，跟随文档，搭建好环境，并成功运行Flutter的Hello World（计数器）。到这之后，请你停下，开始学习dart语言的基本语法。

很幸运，[dart中文网](https://www.dartcn.com/)也提供了很详细的教程，跟随[概览](https://www.dartcn.com/guides/language/language-tour)，你将了解dart语言的基本语法和常用内建类型。

- 基本数据类型
- 编码规范
- 运算符
- 流程控制
- 函数

之后是面向对象的部分

- 对象
- 继承和多态
- 抽象类和接口
- mixin混入

## dart进阶

### Week1

- 异常处理
- 集合（List、Set、Map）
- 泛型
- 异步编程（事件循环、Future、Stream、isolate）
- 网络编程（http库、dio库）

学完这里，可以尝试使用dio库写一个本地预处理课表文件，并提交服务器解析的demo，只需要在本地创建一个dart项目即可，不需要创建flutter项目

## Flutter入门

### Week1

- 一切皆为组件，理解StatelessWidget和StatefulWidget的区别
- 学习使用基本布局组件（线性布局、堆叠布局、弹性布局、流式布局）
- 基本组件的使用（文本、按钮、图片、输入框）
- 列表组件（线性列表、网格列表）

在学习完基本组件的使用后，就可以开始写一些页面 demo，这里推荐youtube上 [The Flutter Way - YouTube](https://www.youtube.com/channel/UCJm7i4g4z7ZGcJA_HKHLCVw)的视频，由于需要科学上网，我这里也转载了几个到B站。[地址](https://space.bilibili.com/44799291/channel/detail?cid=136674&ctype=0)

当然，flutter中的组件有很多，官方文档由于墙的问题，查阅也不是很方便，这里推荐一个国内的网站[flutter老孟](http://laomengit.com/)，这个网站可以很方便的查看相关组件的使用方法。

### Week2

在能够flutter开发基本页面UI之后，你还需要了解数据持久化保存和状态管理、路由管理相关的知识。

#### 持久化

- json转换（[Instantly parse JSON in any language | quicktype](https://app.quicktype.io/)）

- 键值对存储shared_preferences（[shared_preferences | Flutter Package (flutter-io.cn)](https://pub.flutter-io.cn/packages/shared_preferences)）

- sqlite插件（[sqflite | Flutter Package (flutter-io.cn)](https://pub.flutter-io.cn/packages/sqflite)）

#### 路由管理

- flutter自带路由管理
- fluro路由框架（[fluro | Flutter Package (flutter-io.cn)](https://pub.flutter-io.cn/packages/fluro)）

#### 状态管理

状态管理涉及的东西比较多，你需要知道单页面跨组件状态传递和更新，还有全局状态管理的一些手段，也需要了解局部刷新的等等方法，这里比较难列举完全，故只列举几个全局状态管理的手段。相关的插件可以去[here](https://pub.flutter-io.cn/)了解

- Provider官方推荐
- Bloc
- event_bus 全局状态通知
