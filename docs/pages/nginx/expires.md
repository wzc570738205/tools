<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-20 09:01:47
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-20 09:23:59
-->
### 启用缓存
```sh
location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|js|css)$ {
  #设置缓存上面定义的后缀文件缓存到浏览器的生存时间
  expires   3d;
}
```

### 禁用缓存
```sh
location ~ .*\.(gif|jpg|jpeg|png|bmp|swf|js|css)$ {
 #禁止缓存，每次都从服务器请求
  add_header Cache-Control no-store;
}
```
