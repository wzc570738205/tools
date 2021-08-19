

欢迎加入前端交流群：[749539640](//shang.qq.com/wpa/qunwpa?idkey=f528775f242a7c39fe8512383febb8990e621bf97354c2fb82f6832097b7c501) 

svn其实也和github一样有自己的钩子，我们先看下效果

<elimg url='https://gitee.com/Wzhichao/img/raw/master/uPic/LvGpOP59%20.png' />

## 钉钉机器人配置（webhook生成）

> 设置=>添加机器人

<elimg url='https://gitee.com/Wzhichao/img/raw/master/uPic/nZFDbj40%20.png' />

> 添加自定义机器人，这里的关键词添加`#`即可

<elimg url='https://gitee.com/Wzhichao/img/raw/master/uPic/J4KTp031%20.png' />

复制webhook

<elimg url='https://gitee.com/Wzhichao/img/raw/master/uPic/Dj1ANe58%20.png' />

## svn设置

我们进入到svn的服务器代码目录，会看到有个hooks的文件夹

<elimg url='https://gitee.com/Wzhichao/img/raw/master/uPic/vHYxvF27%20.png' />

目前svn提供了5个hooks，今天我们只介绍```post-commit```[参考](https://www.kancloud.cn/i281151/svn/197125)

它在事务完成后运行，创建一个新的修订版本。大多数人用这个钩子来发送关于提交的描述性电子邮件，或者作为版本库的备份。版本库传给程序两个参数：到版本库的路径和被创建的新的修订版本号。退出程序会被忽略。

接下来我们进入hooks文件夹，执行
```sh
vim post-commit
```
如果没有会自动新建此文件

键入代码

```sh
#!/bin/bash
# svn中变量1为仓库路径，2为提交版本号

REPOS="$1"
REV="$2"

# 设置默认字符集，否则post信息到钉钉时中文乱码
export LANG=en_US.UTF-8

# 下方svnlook命令获取相应的结果
time=$(date +%F/%T)
AUTHOR=$(/bin/svnlook author -r ${REV} ${REPOS})
CHANGEDDIRS=$(/bin/svnlook dirs-changed $REPOS)
MESSAGE=$(/bin/svnlook log -r $REV $REPOS)

CONTENT=提交时间：${time}\\n提交版本：#${REV}\\n提交者：${AUTHOR}\\n提交备注：${MESSAGE}\\n修改目录：$CHANGEDDIRS
curl 'https://oapi.dingtalk.com/robot/send?access_token=这里输入你的webhooks的token' \
   -H 'Content-Type: application/json' \
   -d '{"msgtype": "text",
        "text": {
             "content":"'$CONTENT'"
        }
      }'
```
> 我说一下之前钉钉webhoos生成时候安全设置的`#`号和上述代码中提交版本后的`#`对应了起来

最后测试效果！每次提交代码都会触发postcommit hook自动推送信息到钉钉

<elimg url='https://gitee.com/Wzhichao/img/raw/master/uPic/LvGpOP59%20.png' />
