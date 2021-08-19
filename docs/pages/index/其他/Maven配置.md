<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-12-04 14:20:26
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-12-04 14:20:27
-->
## 私有Nexus说明 
集团搭建了私有Nexus仓库，我们的核心框架，插件等均在私服上进行归档，大家需要修改本地maven的配置文件settings.xml，更新仓库地址为集团私有nexus。

服务账号配置如下：
```
  <servers>
    <server>
      <id>zdxf</id>
      <username>zdxf</username>
      <password>zhongdianxingfa@xian</password>
    </server>
  </servers>
```
镜像地址如下：
```
    <mirror>
      <id>nexus-central</id>
      <name>central</name>
      <url>http://47.105.123.78:8000/repository/maven-public/</url>
      <mirrorOf>*</mirrorOf>
    </mirror>
```
## settings.xml参考代码
使用中根据实际情况修改localRepository配置，指向本地Maven仓库。
```
<?xml version="1.0" encoding="UTF-8"?>
<settings xmlns="http://maven.apache.org/SETTINGS/1.1.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.1.0 http://maven.apache.org/xsd/settings-1.1.0.xsd">
  
  <localRepository>D:\Work\maven\maven-dependcies</localRepository>

  <servers>
    <server>
      <id>zdxf</id>
      <username>zdxf</username>
      <password>zhongdianxingfa@xian</password>
    </server>
  </servers>

  <mirrors>
    <mirror>
      <id>nexus-central</id>
      <name>central</name>
      <url>http://47.105.123.78:8000/repository/maven-public/</url>
      <mirrorOf>*</mirrorOf>
    </mirror>
    <mirror>
      <id>nexus-aliyun</id>
      <mirrorOf>central</mirrorOf>
      <name>Nexus aliyun</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
	<mirror>
		<id>aliyunmaven</id>
		<mirrorOf>*</mirrorOf>
		<name>阿里云spring插件仓库</name>
		<url>https://maven.aliyun.com/repository/spring-plugin</url>
	</mirror>

      <mirror>
      <id>nexus-center</id>
      <mirrorOf>central</mirrorOf>
      <name>Nexus center</name>
      <url>http://repo.spring.io/plugins-release/</url>
    </mirror>
    <mirror>
      <id>ui</id>
      <mirrorOf>central</mirrorOf>
      <name>Human Readable Name for this Mirror.</name>
      <url>http://uk.maven.org/maven2/</url>
    </mirror>
    <mirror>
      <id>jboss-public-repository-group</id>
      <mirrorOf>central</mirrorOf>
      <name>JBoss Public Repository Group</name>
      <url>http://repository.jboss.org/nexus/content/groups/public</url>
    </mirror>
  </mirrors>
</settings>
```

