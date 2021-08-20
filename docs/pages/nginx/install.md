Nginx 读作 engine x， 是一个免费的、开源的、高性能的 HTTP 和反向代理服务，主要负责负载一些访问量比较大的站点。

Nginx 可以作为一个独立的 Web 服务，也可以用来给 Apache 或是其他的 Web 服务做反向代理。

相比于 Apache，Nginx 可以处理更多的并发连接，而且每个连接的内存占用的非常小。

本教程将会教您如何在 Centos 7 的服务器上安装和管理 Nginx。

开始前的准备
在开始阅读此教程之前，请确保你是以拥有 sudo 权限的用户来登录的服务器，并且服务器中没有 Apache 或是其他服务正在使用 80（HTTP） 和 443（HTTPS） 端口上，防止端口被占用，造成 Nginx 无法正常启动。

在 CentOS 中安装 Nginx
请按照下面的步骤，在 CentOS 中安装 Nginx。

1、 EPEL 仓库中有 Nginx 的安装包。如果你还没有安装过 EPEL，可以通过运行下面的命令来完成安装：
```sh
sudo yum install epel-release
```
上面代码的意思是以 sudo 权限运行安装 epel-release，如果你当前登录的用户不是 root，则会提示你输入密码来运行，输入密码时是看不到输入的内容的，所以不用担心，继续输入就行。然后回车继续运行，后面的命令中如果包含 sudo 则都表明是刚提到的意思，不再重复解释。

2、 输入以下命令来安装 Nginx：
```sh
sudo yum install nginx
```
如果这是您第一次从 EPEL 仓库中安装软件，yum 可能会提示您导入 EPEL GPG key：
```sh
Retrieving key from file:///etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
Importing GPG key 0x352C64E5:
Userid     : "Fedora EPEL (7) <epel@fedoraproject.org>"
Fingerprint: 91e9 7d7c 4a5e 96f1 7f3e 888f 6a2f aea2 352c 64e5
Package    : epel-release-7-9.noarch (@extras)
From       : /etc/pki/rpm-gpg/RPM-GPG-KEY-EPEL-7
Is this ok [y/N]:
```
类似于上面的内容，遇到这种情况，输入 y，然后 Enter（回车） 即可继续安装。

3、 等到安装完成以后，可以通过以下命令来设置开机启动和运行 Nginx 服务：

设置 Nginx 开机启动：
```sh
sudo systemctl enable nginx
```
运行以上命令以后，会输出类似以下的内容，表示创建了一个软连接来关联 Nginx，不用担心，并不是报错了，下一步就可以启动 Nginx 了。

Created symlink from /etc/systemd/system/multi-user.target.wants/nginx.service to /usr/lib/systemd/system/nginx.service.

启动 Nginx：
```sh
sudo systemctl start nginx
```
通过运行以下命令，来检查 Nginx 的运行状态：
```sh
sudo systemctl status nginx
```

然后会输出类型下面的内容
```sh
● nginx.service - The nginx HTTP and reverse proxy server
  Loaded: loaded (/usr/lib/systemd/system/nginx.service; enabled; vendor preset: disabled)
  Active: active (running) since Mon 2018-03-12 16:12:48 UTC; 2s ago
  Process: 1677 ExecStart=/usr/sbin/nginx (code=exited, status=0/SUCCESS)
  Process: 1675 ExecStartPre=/usr/sbin/nginx -t (code=exited, status=0/SUCCESS)
  Process: 1673 ExecStartPre=/usr/bin/rm -f /run/nginx.pid (code=exited, status=0/SUCCESS)
Main PID: 1680 (nginx)
  CGroup: /system.slice/nginx.service
          ├─1680 nginx: master process /usr/sbin/nginx
          └─1681 nginx: worker process
```

4、 如果你的服务器开启了防火墙，则需要同时打开 80（HTTP）和 443（HTTPS）端口

通过下面的命令来打开这两个端口：

sudo firewall-cmd --permanent --zone=public --add-service=http
sudo firewall-cmd --permanent --zone=public --add-service=https
sudo firewall-cmd --reload
国内的服务器厂商，安全组也可能会默认屏蔽这两个端口，比如 阿里云 和 腾讯云，如果在 第 5 步 时发现无法访问，可以自行百度一下如何放开这两个端口。

5、 验证 Nginx 是否成功启动，可以在浏览器中打开 http://YOUR_IP，您将看到默认的 Nginx 欢迎页面，类似于下图所示：

Welcome to Nginx

注：Nginx 的默认欢迎页有好几种样式，和你安装的版本有关，所以大家只用关注这个页面的大标题就行了 Welcome to nginx！

通过 systemctl 管理 Nginx
你可以像管理其他服务那样管理 Nginx。

启动 Nginx
```sh
sudo systemctl start nginx
```

停止 Nginx
```sh
sudo systemctl stop nginx
```

重启 Nginx
```sh
sudo systemctl restart nginx
```
修改 Nginx 配置后，重新加载
```sh
sudo systemctl reload nginx
```
设置开机启动 Nginx
```sh
sudo systemctl enable nginx
```

关闭开机启动 Nginx
```sh
sudo systemctl disable nginx
```
