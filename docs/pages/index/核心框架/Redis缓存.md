## 插件说明
为了规范业务对redis的调用，也为了提供便捷的redis方位机制，我们提供redis插件。业务项目仅需引入此插件，无需引入其他redis依赖，即可享用单机或集群Redis使用模式。

## 如何使用
1. 在pom文件中引入依赖，目前最新版本为：1.0.1-SNAPSHOT
```
    <dependency>
        <groupId>com.ichinae.core.plugins</groupId>
        <artifactId>ichinae-core-plugins-redis</artifactId>
        <version>1.0.0</version>
    </dependency>
```
    
2. 在Application启动类中导入RedisConfig.class,该配置会自动读取yml配置文件中redis配置属性，完成reids初始化

      
```
    @Import(RedisConfig.class)
    public class DemoApplication {
        public static void main(String[] args) {
            SpringApplication.run(DemoApplication.class, args);
        }
    }
```

注:为了正确初始化redis，yml配置文件中redis配置需参照以下格式进行配置，注意：spring下。
```
spring:
  redis:
    # Redis数据存储库
    database: 3
    # Redis服务器地址
    host: 127.0.0.1
    # Redis服务器连接端口
    port: 6379
    # Redis服务器连接密码（默认为空）
    password: 123456
    # 连接池中最大空闲数，默认是 8 ，如果没有特别要求，可以不配置。
    maxactive: 20
    maxwait: 0
    maxidle: 0
    minidle: 0
    
    # 集群模式
    maxredirects: 100
    nodes: 192.168.10.54:6381,192.168.10.54:6382,192.168.10.54:6383,192.168.10.54:6384
```

使用时在调用的类中注入RedisService即可：
 ```
    @Autowired
    RedisService redisService;
```
    
3. 本工具类还提供redis自增序列号获取与任务加锁，在启动类中分别导入对应工具类即可
```
    @Import({RedisConfig.class,TaskLockUtils.class,UniqueUtils.class})
    public class DemoApplication {
        public static void main(String[] args) {
            SpringApplication.run(DemoApplication.class, args);
        }
    }
```

使用时在调用的类中注入对应的类即可：
 ```
    @Autowired
    TaskLockUtils taskLockUtils;

    @Autowired
    UniqueUtils uniqueUtils;
```
    
