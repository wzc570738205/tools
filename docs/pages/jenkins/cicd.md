<elimg url='https://picsum.photos/790/338'></elimg>
# 什么是前端自动化

前端自动化不是指自动生成代码，而是自动化构建项目。

**如果没有自动化， 我们的前端从开发到提测工作流程可能如下：**

1.本地机器上写代码

2.在命令行输入 npm run unit/lint，查看单元测试/eslint校验结果

3.提交代码，push 到 git 远程仓库

4.执行 npm run build，构建项目

5.ssh/ftp发包至测试服务器等各种方式

这个流程中，每一个步骤都要重复人工操作，很大增加了时间成本，不能保证操作的准确性。对于 unit 或者 build 的结果，没有一个自动的反馈机制，需要人工 check 运行结果，最后部署也是人工登录服务器执行脚本，非常繁琐。

**引入自动化以后，整个流程变成：**

1.本地机器上写代码

2.提交代码，push 到 git 远程仓库

3.git hook 触发 jenkins 的构建 job

4.jenkins job 中拉取项目代码，运行 npm run unit/lint 和 npm run build。

5.jenkins job 中执行测试服务器的部署脚本 

在 自动化流程中，只有步骤1和步骤2需要人工操作，其他步骤都是自动运行，是一个非常标准化的流程，减少了人工操作的风险，省去了重复性工作，增强了项目的可见性。
# 效果图
[![fomAnf.gif](https://z3.ax1x.com/2021/08/18/fomAnf.gif)](https://imgtu.com/i/fomAnf)
# 实现
## 流程图
<elimg url='https://image-static.segmentfault.com/408/537/4085375129-611b7032deeb1_fix732'></elimg>
- 开发人员提交代码至代码库
- 触发jenki构建任务
- 构建成功，发包至nginx服务器，更新完毕
- 构建失败，通过钉钉通知/企业微信/邮箱等等方式提醒开发人员代码构建失败

## 1.准备工作：
准备`git`项目：[https://github.com/wzc570738205/frontproject.git](https://github.com/wzc570738205/frontproject.git)

准备`钉钉群`(用来接收CI/CD结果通知)：[35669766](https://h5.dingtalk.com/circle/healthCheckin.html?corpId=ding8f5c715f4a26e7c083fa49862f85de7a&14a4b=dddf8&cbdbhh=qwertyuiop&origin=1)

准备安装了`jenkins的云服务器`：这里自行购买，安装参考[在linux服务器上安装Jenkins](https://segmentfault.com/a/1190000039956194)
## 2.接入代码提交通知
当你在往代码库推送了代码，通过git的webhook自动给钉钉发送消息
### 2.1添加钉钉群机器人(智能群助手)
<elimg url='https://image-static.segmentfault.com/295/835/295835230-611b877b09a2b_fix732'></elimg>
复制webhook，接下来会用到
<elimg url='https://image-static.segmentfault.com/857/347/857347958-611b87c71b308_fix732'></elimg>
### 2.2将钉钉webhook添加至github对应相应的webhook里
<elimg url='https://image-static.segmentfault.com/212/509/2125091110-611b885c66290_fix732'></elimg>
### 2.3 测试代码提交通知
配置完成，我们提交下代码进行测试
<elimg url='https://image-static.segmentfault.com/375/787/3757871948-611b888aef2bb_fix732'></elimg>
**至此，代码提交通知配置完成**
## 3.接入项目CI
当我们提交完代码后，我们需要校验下此次代码合并有没有致命性错误，这里我们采取简单的方法即允许`npm run build`，如果运行没有报错，那么说明此次提交是通过的。失败则说明代码有致命错误，需要进行修改
### 3.1 jenkins新建项目
**这里为简要步骤，详情请参考[使用jenkins自动构建github项目](https://segmentfault.com/a/1190000023072976)**
- 创建一个`构建一个自由风格的软件项目`的job
- 源码管理器选择git,并填入地址以及凭证(没有就新建一个）
- 构建触发器选择:GitHub hook trigger for GITScm polling
 <elimg url='https://image-static.segmentfault.com/490/309/490309930-611b8c425b3c9_fix732'></elimg>
- 添加node环境：系统管理/全局工具配置-新增nodejs，版本选择合适的即可
 <elimg url='https://image-static.segmentfault.com/145/764/1457642595-611b8c1b3fb82_fix732'></elimg>
- 构建环境选择node，勾选刚才下载的node
- 构建选择`执行shell`:
  ```sh
  npm install -g cnpm --registry=https://registry.npm.taobao.org&&
  cnpm install&&
  npm run build
  ```
  <elimg url='https://image-static.segmentfault.com/124/251/1242515974-611b8ca4590b0_fix732'></elimg>
- 构建后操作(可选)：
  <elimg url='https://image-static.segmentfault.com/318/223/3182238635-611b8d0d2be99_fix732'></elimg>
  
我们通过`jenkins`job的执行成功与失败来确定CI是否成功
#### 3.1.1 测试
再次提交代码,成功触发jenkins的job
<elimg url='https://image-static.segmentfault.com/305/940/3059406415-611b8fa47f2bf_fix732'></elimg>
构建成功
<elimg url='https://image-static.segmentfault.com/924/406/924406704-611c793369447_fix732'></elimg>
### 3.2 接入构建状态钉钉通知
- 配置钉钉自定义机器人，并选择安全设置自定义关键词，这里设置`#`即可
  <elimg url='https://image-static.segmentfault.com/186/296/1862962580-611c79cd4b200_fix732'></elimg>
- 下载jenkins插件`DingTalk`，用来进行钉钉通知  
 <elimg url='https://image-static.segmentfault.com/414/382/4143825518-611c7a1838823_fix732'></elimg>
- 配置插件=>系统管理选择钉钉,填入刚才的自定义机器人webhook地址
  <elimg url='https://image-static.segmentfault.com/378/751/3787517806-611c7a83a3f7e_fix732'></elimg>
  <elimg url='https://image-static.segmentfault.com/412/321/4123219789-611c8d0b6f36b_fix732'></elimg>
- 项目里开启机器人通知
  <elimg url='https://image-static.segmentfault.com/331/910/3319101675-611c7af644e26_fix732 '></elimg>
- 点击开始构建，进行测试
  
  <elimg url='https://image-static.segmentfault.com/317/061/3170616769-611c7be883f8f_fix732'></elimg>
  等待CI结束
  <elimg url='https://image-static.segmentfault.com/214/047/2140470404-611c7bf000390_fix732'></elimg>
  失败提醒
  <elimg url='https://image-static.segmentfault.com/194/278/1942784134-611c7c2b2bd83_fix732'></elimg>
  
**至此，CI配置结束，我们实现了代码提交钉钉提醒，以及CI通知提醒**
## 4.接入CD
在上面的步骤里我们实现了CI的操作，也就是用是否能打包生成环境的包来进行建议测试代码有没有致命性错误。这一步通过后我们需要把部署包发至`nginx`服务器
### 4.1 发包至服务器
- 安装jenkins插件`Publish Over SSH`
- 设置里配置插件,填入服务器ip，高级里使用密码，设置远程服务器文件夹`/`
  <elimg url='https://image-static.segmentfault.com/387/202/3872020142-611c7dc34ad8f_fix732'></elimg>
  点击测试连通性
  <elimg url='https://image-static.segmentfault.com/226/712/2267128736-611c7d8b5c488_fix732'></elimg>

- 项目配置
- 修改构建shell，添加压缩
```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org&&
cnpm install&&
rm -rf dist&&
npm run build&&
cd ./dist&&
tar -zcvf dist.tar.gz *
```
- 添加构建后操作`Send build artifacts over SSH`
  <elimg url='https://image-static.segmentfault.com/145/246/145246172-611c7efa52f06_fix732'></elimg>
- 服务器配置`nginx`  
```sh
location /testPage{
   alias     /home/test;
   index     index.html;
}
```

测试，构建成功后，访问[https://wangzc.wang/testPage](https://wangzc.wang/testPage)
**至此，CD整合完毕，现在只需要提交代码，即可实现自动打包，自动部署。**
