<!--
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2020-11-27 09:03:22
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-12-18 16:57:36
-->
## 代理设置
项目中基础功能接口使用`api`作为`BASE_API`请求

`nginx.conf`配置，`alias`根据具体服务器文件位置进行配置
```
server {
    listen       8066;
    server_name  commonFronted;

    location /commonFronted {
        alias     /store0/commonFronted;
        index     index.html;
    }
    # 代理的path需要和后端的server path一致或者为父级path，不然会导致set cookie因为作用域问题设置失败
    location ^~/common-backend/ {
        proxy_pass http://47.105.123.78:8089/common-backend/;
        proxy_set_header  Host $host;
        proxy_set_header  X-Real-IP $remote_addr;
        proxy_set_header  X-Forwarded-Proto https;
        proxy_set_header  X-NginX-Proxy true;
        proxy_buffers 256 4k;
        proxy_max_temp_file_size 0k;
        proxy_connect_timeout 30;
        proxy_send_timeout 60;
        proxy_read_timeout 60;
        proxy_next_upstream error timeout invalid_header http_502;            
    }
}
```

 