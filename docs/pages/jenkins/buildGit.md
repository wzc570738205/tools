
![](https://gitee.com/Wzhichao/img/raw/master/uPic/6EZtuT00%20.png)


## [jenkins介绍](https://jenkins.io/zh/)
构建伟大，无所不能

Jenkins是开源CI&CD软件领导者， 提供超过1000个插件来支持构建、部署、自动化， 满足任何项目的需要。
- 作为一个可扩展的自动化服务器，Jenkins 可以用作简单的 CI 服务器，或者变成任何项目的持续交付中心。
- Jenkins 是一个基于 Java 的独立程序，可以立即运行，包含 Windows、Mac OS X 和其他类 Unix 操作系统。
- Jenkins 可以通过其网页界面轻松设置和配置，其中包括即时错误检查和内置帮助。
- 通过更新中心中的 1000 多个插件，Jenkins 集成了持续集成和持续交付工具链中几乎所有的工具。
- Jenkins 可以通过其插件架构进行扩展，从而为 Jenkins 可以做的事提供几乎无限的可能性。
- Jenkins 可以轻松地在多台机器上分配工作，帮助更快速地跨多个平台推动构建、测试和部署。

## 安装jenkins
jenkins的安装请移步[在linux服务器上安装Jenkins](https://www.cnblogs.com/wangzhichao/p/12692185.html)

## 新建github项目
我们新建一个名为jenkins的git仓库，代码我这里选择了用[vue-cli](https://cli.vuejs.org/)简易生成了一个示例demo
![](https://gitee.com/Wzhichao/img/raw/master/uPic/ByAMEO42%20.png)

## github配置

### sercret text

注：此处需要一个对项目有写权限的账户

> 进入github --> setting --> Personal Access Token --> Generate new token
[或者点击进入](https://github.com/settings/tokens/new)

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/IYOV3G06%20.png)

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/xUqndM35%20.png)

自己先保存此`token`，如果丢失，之后再也无法找到这个`token`。

### GitHub webhooks 设置

> 进入刚才新建的jenkins仓库 --> setting --> WebHooks&Services --> add webhook --> 输入刚刚部署jenkins的服务器的IP

jenkins地址后加上```/github-webhook/```

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/QqqJoy08%20.png)

## jenkins的github配置

### 安装GitHub Plugin

> 系统管理-->插件管理-->可选插件

直接安装Github Plugin, jenkins会自动帮你解决其他插件的依赖，直接安装该插件Jenkins会自动帮你安装plain-credentials 、[Git](http://lib.csdn.net/base/git) 、 credentials 、 github-api

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/436630-ff8c8744ed7ade0d15%20.png)

### 配置GitHub Plugin

> 系统管理 --> 系统设置 --> GitHub --> Add GitHub Sever

如下图所示

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/rzzEY431%20.png)

API URL 输入 `https://api.github.com`，Credentials点击Add添加，Kind选择Secret Text,具体如下图所示。

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/5srXs406%20.png)

Secret添加刚才生成的token，id和描述随便填写

设置完成后，点击`TestConnection`,提示`Credentials
 verified for user UUserName, rate limit: xxx`,则表明有效。
 ![](https://gitee.com/Wzhichao/img/raw/master/uPic/diNJuO28%20.png)

 ### 创建一个freestyle任务
![](https://gitee.com/Wzhichao/img/raw/master/uPic/uMDxQj41%20.png)
\- General 设置
填写GitHub project URL, 也就是你的项目主页
eg. `https://github.com/your_name/your_repo_name`

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/amghlB38%20.png)

\- 配置源码管理

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/ycegOY59%20.png)

1. 填写项目的git地址, eg. `https://github.com/your_name/your_repo_name.git`
2. 添加github用户和密码
3. 选择githubweb源码库浏览器，并填上你的项目URL，这样每次构建都会生成对应的changes，可直接链到github上看变更详情

\- 构建触发器，构建环境

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/OaN2fB22%20.png)

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/FYgxXC09%20.png)

>这里如果没有node，就需要安装下node
因为Jenkins容器中只有java环境支持运行jenkins，没有node环境，但是jenkins提供在线安装nodejs。[官方文档](https://plugins.jenkins.io/nodejs)

- 下载nodejs插件并配置
- 系统管理--->管理插件--->下载NodeJS插件
- 下载的插件在：$JENKINS_HOME/plugins目录下
- 系统管理--->Global Tool Configuration--->选择需要安装的nodejs版本
- 会从nodejs官网下载安装，nodejs安装包在：$JENKINS_HOME/tools目录下

![](https://gitee.com/Wzhichao/img/raw/master/uPic/3611157-f781ebbe880aa77203%20.png)

\- 构建

![](https://gitee.com/Wzhichao/img/raw/master/uPic/0kqlIQ16%20.png)

\- 构建后操作

![img](https://gitee.com/Wzhichao/img/raw/master/uPic/3Cz30U13%20.png)

最后点击保存即可

## 测试
上传代码
查看jenkins
![](https://gitee.com/Wzhichao/img/raw/master/uPic/MrUocw40%20.png)
这样就成功了，每次提交代码到master就会进行自动构建测试代码有没有问题

下一篇我们介绍如何添加钉钉机器人提示提交信息