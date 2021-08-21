# 后端

__后端板块主要分为技术路线，系统设计。__

## 技术路线

##### 此处默认你拥有一定的开发经验，比如开发过基于c，cpp，java的学生管理系统

### 语言选择：

- #### java

- #### Golang

- #### c#

### java

- Java的应用强到离谱，但是由于其臃肿和历史原因，我们的项目对其使用在逐步减少。

Java是一种广泛使用的计算机编程语言，拥有跨平台、面向对象、泛型编程的特性，广泛应用于企业级Web应用开发和移动应用开发。我们主要使用的版本为java11，具体安装jdk流程见百度。windows用户可以直接使用[[Microsoft Build of OpenJDK](https://www.microsoft.com/openjdk)].

开发使用ide推荐为[IntelliJ IDEA Ultimate](https://www.jetbrains.com/idea)，可以使用学生认证使用专业版进行开发。（tips：社区版不支持很多java特性，不建议使用）

我们目前的java项目主要是使用[Spring]([Spring | Home](https://spring.io/))技术，初学者的学习路线建议为先学好java的基本操作（类，泛型，继承，接口，反射）之后，学习有关于Spring的核心知识。其中主要需要理解和掌握DI（依赖注入）的使用和原理（大致了解）。接下来就是使用SpringBoot进行初步的项目构建，不建议再单独学习SSM框架。（冗长而且后来均可代替）

除了Spring技术之外，java后端还需要掌握基本的maven命令。能够熟悉的使用mvn命令打包java项目为jar包或者war包。

### Golang

[Golang]([The Go Programming Language (google.cn)](https://golang.google.cn/))作为目前兴起的后端语言，具有以下优势：

- 直接编译成机器码，不依赖其他库，glibc的版本有一定要求，部署就是扔一个文件上去就完成了。
- 静态类型语言，但是有动态语言的感觉，静态类型的语言就是可以在编译的时候检查出来隐藏的大多数问题，动态语言的感觉就是有很多的包可以使用，写起来的效率很高。
- 语言层面支持并发，这个就是Go最大的特色，天生的支持并发，我曾经说过一句话，天生的基因和整容是有区别的，大家一样美丽，但是你喜欢整容的还是天生基因的美丽呢？Go就是基因里面支持的并发，可以充分的利用多核，很容易的使用并发。

#### go语言设置

下载：https://golang.google.cn/dl/

注意：不要使用ubuntu的包管理器安装golang，这个版本太低了，请从官网下载，目前版本是1.16，有更新可以重写前面的版本号，安装方法请查看官方文档，例如https://golang.google.cn/dl/ ，几乎适用于所有linux发行版。

- ##### goproxy设置

  ```shell
  go env -w GOPROXY="goproxy.cn,direct"
  ```

- ##### tidy

  项目迭代过程中随时执行 go mod tidy 命令，及时清理go.mod文件中不需要的package，避免污染go.mod文件。

- ##### IDE

  IDE推荐VS Code或者GoLand

- ##### 使用golangci-lint

  建议使用golangci-lint作为开发时lint工具。

#### C#

[c#]([C# docs - get started, tutorials, reference. | Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/))是由微软推出的Java改良版（逃）。具有极其优秀的语言特性和极其舒适的[文档](https://docs.microsoft.com/zh-cn/dotnet/csharp/)，这个文档非常全面，几乎你发现的任何问题都可以在这个文档上找到你需要的答案。但是由于其原文是由英文编写，所以中文版本是由机器翻译而来的，很多时候会显得比较晦涩难懂，所以建议有能力的同学直接阅读英文原版。

- ##### 安装

  c#的安装非常简单，只用百度(Google)->[.net安装](https://dotnet.microsoft.com/) 即可。在下载时建议仔细看清楚下载的版本，目前最新的稳定版为.net5.0，不要下载.net Framework4.8 !!!

- ##### IDE

  ide的选择推荐使用vs，如果是linux或者mac用户，推荐rider。

- __掌上吾理__的后端使用的时[asp.net](https://docs.microsoft.com/zh-cn/aspnet/core/web-api/?view=aspnetcore-5.0))进行构建，推荐初学者先看文档的教学然后再进行项目的搭建。请使用文档上的命名规范，后期我们也会规范c#的lint操作。

