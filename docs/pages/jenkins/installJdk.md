<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-19 11:13:22
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-19 17:00:08
-->
### yum安装jdk
在linux上使用yum安装是非常粗暴无脑的，但仍然有需要注意的点，不然会掉坑里。这里说一下步骤。

1.执行命令```yum -y list java*```查看可安装java版本。执行成功后可以看见如下的结果

<elimg url='https://gitee.com/Wzhichao/img/raw/master/uPic/h1AmRk20%20.jpg' />

2.选择一个java版本进行安装，这里我们希望安装java1.8，因为我们的机器是64位的，所以选择安装java-1.8.0-openjdk-devel.x86_64。
这里有个地方要注意，上图中我用红框圈起来的两个java版本，要选择-devel的安装，因为这个安装的是jdk，而那个不带-devel的安装完了其实是jre。

3.执行命令```yum install -y java-1.8.0-openjdk-devel.x86_641```。执行完后会看见控制台刷出很多输出。
耐心等待至自动安装完成

<elimg url='https://gitee.com/Wzhichao/img/raw/master/uPic/disQBh35%20.jpg' />

4.输入```java -version```查看已安装的jdk版本，当出现如下输出表示安装成功。

<elimg url='https://gitee.com/Wzhichao/img/raw/master/uPic/HbrV5f48%20.jpg' />

5.你可能好奇，yum安装的jdk，被安装到哪里去了？你可以在```/usr/lib/jvm```目录下找到他们。

<elimg url='https://gitee.com/Wzhichao/img/raw/master/uPic/D12x2F59%20.jpg' />

至此，yum安装jdk完成