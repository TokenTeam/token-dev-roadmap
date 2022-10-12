---
autoPrev: README
---

# Android
Android就是安卓，那个绿色小机器人。虽然Android开发一般指安卓app应用开发，但Android实际上是一个操作系统，其涵盖的内容非常广泛，包括但不限于SDK开发，framework开发，音视频开发等。

## 语言入门
### Java
Java语法简单便于初学者学习，并且在熟悉Java后也可快速上手Kotlin。网上关于Java的学习资源太多了，这里不做推荐，找一个适合自己的就行。


初学Java首先应了解
- 基本数据类型（int，long...）
- 基础关键词用法（if，while...）

接着便可学习面向对象部分
- 类与对象
- 继承与多态
- 抽象类与接口
- 泛型与Java自带的一些泛型类（ArrayList，Map...）


初学不必对每个知识点了如指掌，只需了解知道大致如何写即可，对语言的进一步学习应伴随着项目实践。

### Kotlin
Kotlin作为Google首推的Android开发语言基本上可以说是Java的进化版，以实用作为设计原则之一的Kotllin写出的代码非常的简洁高效。

初学者推荐在使用Java开发过一个项目后再学习Kotlin，但也可以直接学习Kotlin。Kotlin的学习难度相对于Java而言要高一些，并且Kotlin中的许多语法糖和语法规则是由项目开发经验总结而来的成果，初学者在学习时可能不明就里或在使用时弄巧成拙反而导致不良的编码习惯，在学习时需要多多注意多加思考。

学习Kotlin推荐《Kotlin in Action》这本书，看英文的效果最佳。

## 安卓应用开发入门
推荐《第一行代码 Android》这本书，第二版是基于Java语言的，第三版是基于Kotlin语言的，找适合自己的版本，把书里的内容学会然后自己写个小项目练手就入门了。

也可以看看谷歌官方的[指南文档](https://developer.android.google.cn/guide)，此指南在入门后也可在后续日常学习中作为参考资料。Android Developer官网提供了丰富的入门进阶学习资料和相关文档，要学会使用。


## AOSP入门
如果在Android入门后对于Android Framework相关知识较为感兴趣，可以来看看AOSP项目。

### AOSP下载&编译&运行(不包括Linux内核)
- 在AOSP下载前，你应该有 一台运行着**Linux系统**的机器,**200GB以上**的硬盘空间以及**16GB**的内存空间
- 这篇[博客](https://blog.csdn.net/mvp_Dawn/article/details/107624203)可以解决绝大部分问题
- 有兴趣可以看看[AOSP官网](https://source.android.google.cn/)
- 为你贴心奉上[Ubuntu镜像下载网站](https://ftp.sjtu.edu.cn/ubuntu-cd/)
>- 个别可能遇到的小问题
>- [libtinfo.so.5: cannot open shared object file](https://blog.csdn.net/wxd1233/article/details/122864845)
>- [无法修正错误，因为您要求某些软件包保持现状，就是它们破坏了软件包间的依赖关系](https://blog.csdn.net/weixin_43846270/article/details/103779781)
>- 模拟器黑屏无响应，可以把虚拟机显示屏的3D图形加速关掉

#### REPO
- 用于AOSP的Git仓库管理的Python脚本

#### Makefile
- 这篇[文章](https://blog.csdn.net/haoel/article/details/2886)比较全

#### Soong
- 这个[公众号](https://mp.weixin.qq.com/s?__biz=MzU3MTkwMDU1NQ%3D%3D&chksm=fcd855efcbafdcf9a19e885a309842d51cef487ba7204a0da8f59b9ac7327e1d30b0020b9e9f&idx=1&mid=2247483915&scene=21&sn=bdfd63d0a8a8cc6a115b87d5e4ae56be#wechat_redirect)内容不错

### AOSP源码阅读
- Windows环境下推荐**Source Insight**，破解版很好找
- Linux环境下推荐**VScode**，有兴趣的可以用Vim加上cscope等一堆插件，有钱的可以试试Understand
- 当然，不下源码也可以[在线阅读](https://android-opengrok.bangnimang.net/)
- 在阅读源码之前，你最好对C,C++,JAVA,Linux以及设计模式有所了解。当然，没了解也没关系，哪里不会学哪里

```
ANDROID ---> APPLICATIONS               应用程序层（Java Kotlin）
                    |
                    |
             APPLICATION FRAMEWORK      应用程序框架层（Java -> JNI -> C++）
                    |
                    |
             LIBRARIES&ANDROID RUNTIME  系统运行库层（C库层）
                    |
                    |
             HARDWARE ABSTRACTION LAYER 硬件抽象层
                    |
                    |
             LINUX KERNEL               内核层
```

#### C/C++
- Android的Kernel以及Framework的Native层主要由其组成
- 语法很多（主要为C++和编译器宏），预定义的宏一大堆，总之看不懂的百度就对了
- 初学注意分清楚C和C++，Framework主要为C++，Kernel为C

#### JAVA
- Android的JavaFramework由其组成，主要分布于frameworks/.../java目录下
- 相比于C/C++要简单许多

#### JNI
- 了解两种注册方式，当成黑箱来看即可
- 如果想要具体的了解需要深入学习Java虚拟机

#### Linux
- 看不懂的百度就对了，最好有点操作系统相关知识（进程与线程，内核态与用户态）
- 如果想深入看Kernel层那么还是事先要有一定的基础知识

#### 设计模式
- 推荐看黑书 《设计模式--可复用面向对象软件的基础》
- 设计模式是工程经验的总结，是一种思维方式，它当然不止可以面向对象也不止书中介绍的那些模式，万万不可照本宣科生搬硬套

#### AIDL\rc文件
-  一般相关的书或者网上的博客都有详细的解释，初识的话大概了解其作用就行
-  对于AIDL的进一步认识最好在看完ServiceManager或者其他的BinderService后再进行
-  rc文件是Android一切的起点（由C++的init,parser,tokenizer解析运行），最好在了解了Android的Service和Zygote进程作用后进一步学习，当然也可以在了解上述进程的同时穿插学习

#### OpenGL ES
- 安卓GUI系统的最底层，可以当作黑箱暂时不看
- 虽然不看，但至少要了解以下概念：
>- **帧缓冲区**--通过读写它改变屏幕显示的内容
>- [**Project Butter**](https://blog.csdn.net/yangwen123/article/details/16344375)--安卓UI交互改善计划--**VSync同步**和**TripleBuffering**

#### 书籍推荐
- 推荐 **《深入理解Android内核设计思想》**
- 可以看看 **《Android进阶解密》** 以及它所在的安卓三部曲
- 通过看书可以掌握分析AOSP项目的重要脉络，避免迷失在茫茫码海中