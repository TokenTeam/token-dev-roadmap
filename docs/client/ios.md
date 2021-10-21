---
autoPrev: android
---

# iOS

## Swift
- 推荐学习方式：官方文档中文翻译版，地址：https://www.cnswift.org/
- 建议学习周期：3周-5周
- 备注：此阶段语言的学习为之后开发的基础，需要尤为认真与仔细，对于文档中的实例代码尽量可以在Playground中跟着敲一遍。Swift的语法比较多，也比较杂，学习完成了一遍之后要记得及时回来反复翻看巩固记忆。

## UIKit
- 推荐学习资料：
    - Raywenderlich网站的英文书籍UIKit入门(https://www.raywenderlich.com/books/uikit-apprentice)
    - 腾讯课堂杨帆老师的系列课程（https://ke.qq.com/course/package/18911）
    - Github上的的UIKit示例工程(https://github.com/aysilsimgekaracan/HackingWithSwift)，可以挑选自己感兴趣的跟着一起敲一敲
- 建议学习周期：5周-6周
- 备注：目前商业软件主流还是使用UIKit来进行界面开发，所以该部分内容尤为重要，这么短的时间无法让你彻底精通UIKit，因为这个框架中的东西实在是太多了，你所要做的就是掌握UIKit的核心类以及开发方式，并且在日常的开发学习生活中不断学习与完善，遇到以自己现有的知识储备无法完成的界面的时候要善于搜索和询问他人，遇到一个全新的API的时候要善于将其收集进自己的知识库

## 持久化存储
- UserDefaults
- iOS沙盒机制，文件读写
- WCDB
- FMDB

## 网络通信
- URLSession：官方提供的网络请求方式
- Alamofire：基于URLSession进行的封装，使用起来更加便捷

## SwiftUI
- 推荐学习资料：
    - Raywenderlich网站的英文书籍SwiftUI入门(https://www.raywenderlich.com/books/swiftui-by-tutorials)
    - Github上的SwiftUI示例工程(https://github.com/clarknt/100-days-of-swiftui)，可以跟着敲一敲
    - SwiftUI进阶中文书籍《SwiftUI编程思想》(https://objccn.io/products/thinking-in-swiftui)，感兴趣可以看一看，有助于你理解SwiftUI整个系统
- 建议学习周期：5周-6周
- 备注：SwiftUI是2018年苹果推出的全新UI框架，不同于UIKit，它是一个声明式的UI框架。截止至目前(2021年)SwiftUI框架还并不是很稳定，每年更新都会有较多break changes，再加上该框架只能在iOS13.0以上平台使用，商业化的软件使用的并不多。Uni团队的iOS原生开发主要基于该框架。

## Combine
- 推荐学习资料：
    - Raywenderlich网站的英文书籍Combine教程(https://www.raywenderlich.com/books/combine-asynchronous-programming-with-swift)
    - OpenCombine开源实现源代码(https://github.com/OpenCombine/OpenCombine)，感兴趣的话值得阅读
    - 一篇本人写的简短的源码解读，如果不想盯着源码看可以仔细阅读一下该篇文章，对理解Combine内部机制有很大的作用。
- 学习周期： 3周-4周
- 备注：Combine是Apple跟随SwiftUI一起推出的响应式异步框架，与很早已经存在的RxSwift有着异曲同工之妙，其中RxSwift被大量应用于当前商业化软件iOS MVVM架构模式的开发中。Uni团队的iOS原生开发需要使用到该框架。

## App架构模式
- 推荐学习资料：
    - 中文书籍《App架构》(https://objccn.io/products/app-architecture)
    - 中文书籍《SwiftUI与Combine编程》(https://objccn.io/products/swift-ui)，该书中将Combine与SwiftUI结合，讲述了如何使用Redux数据流架构模式开发App，Uni团队的iOS业务开发主要适用该模式，所以该书籍可以重点阅读
- 学习周期：3周-4周

## 语言进阶
- 推荐学习资料：
    - 中文书籍《Swift进阶》(https://objccn.io/products/advanced-swift/)
    - 中文书籍《Swifter - Swift 开发者必备 Tips》(https://objccn.io/products/swifter-tips)
    - Objective-C语言语法，任何途径学习都可以，只需要掌握基本语法
    - 视频课程-OC底层原理(https://ke.qq.com/course/314526)
- 学习周期：不限期
- 备注：该部分主要为你的就业面试以及后续职业发展做准备，所以为不限期学习。其中Objective-C底层原理为现阶段iOS招聘面试必问到的内容。

## 算法
- LeetCode
- 学习周期：不限期