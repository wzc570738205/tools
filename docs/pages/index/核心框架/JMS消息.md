## 插件说明
消息队列核心包，集成阿里和rocketmq两个体系，对外统一一套参数，本项目基于springboot，集成了apachemq和阿里巴巴的ons，在通过配置进行的时候很容易集成。

## 如何应用

1. 在pom文件中引入依赖，当前版本`1.0.0.RELEASE`

```
<dependency>
	<groupId>com.ichinae.core.plugins</groupId>
	<artifactId>ichinae-core-plugins-jms</artifactId>
	<version>1.0.0</version>
</dependency>
```

2. 在application.yml中配置mq的相应配置
```
mq:
  producer:
    enable: true
    nameaddr: http://MQ_INST_1445820840606424_BaSysZxM.mq-internet-access.mq-internet.aliyuncs.com:80
    drive: AliProducer
    group: GID_task-dev
    accessKey: LTAI0xIlAuoGvQKi
    secretKey: 0JaSglnMVyAy1T8y1mEi5fFqHbntgS
    sender:
      topic: task-dev
      tags: task-dev
  consumer:
    enable: true
    nameaddr: http://MQ_INST_1445820840606424_BaSysZxM.mq-internet-access.mq-internet.aliyuncs.com:80
    drive: AliConsumer
    group: GID_task-dev
    tag: task-dev
    topic: task-dev
    accessKey: LTAI0xIlAuoGvQKi
    secretKey: 0JaSglnMVyAy1T8y1mEi5fFqHbntgS

```

3. 在应用中创建注入读取配置，其中
```
import MessageSender;
import MqFactory;
import com.ichinae.core.plugins.jms.mq.*;
import MqConsumerConfig;
import MqProducerConfig;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MqProducerConfiguration {
    @Bean("alimqProducerConfig")
    @ConfigurationProperties(prefix = "mq.producer")
    @ConditionalOnProperty(name = "mq.producer.enable",havingValue="true")
    protected MqProducerConfig alimqProducerConfig() {
        return new MqProducerConfig();
    }

    @Bean("alimqProducer")
    @ConditionalOnProperty(name = "mq.producer.enable",havingValue="true")
    protected MqProducer alimqProducer(MqProducerConfig alimqProducerConfig) {
        return MqFactory.buildProducer(alimqProducerConfig);
    }

    @Bean("alimqSender")
    @ConditionalOnProperty(name = "mq.producer.enable",havingValue="true")
    @ConfigurationProperties(prefix = "mq.alimq.producer.sender")
    protected MessageSender alimqSender(MqProducer alimqProducer) {
        return new MessageSender(alimqProducer);
    }
}


import MessageSender;
import MqFactory;
import com.ichinae.core.plugins.jms.mq.*;
import MqConsumerConfig;
import MqProducerConfig;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MqConsumerConfiguration {

    @Bean("alimqConsumerConfig")
    @ConfigurationProperties(prefix = "mq.consumer")
    @ConditionalOnProperty(name = "mq.consumer.enable",havingValue="true")
    protected MqConsumerConfig alimqConsumerConfig() {
        return new MqConsumerConfig();
    }

    @Bean("alimqConsumer")
    @ConditionalOnProperty(name = "mq.consumer.enable",havingValue="true")
    protected MqConsumer alimqConsumer(MqConsumerConfig alimqConsumerConfig) {
        MessageProcessor implConsumer = new ConsumerMessageAliImpl();
        return MqFactory.buildConsumer(alimqConsumerConfig, implConsumer);
    }
}

 用户实现MessageProcessor的接口类ConsumerMessageAliImpl。
```

4. 在应用中开始使用
```
发送
    @Autowired
    @Qualifier("alimqSender")
    private MessageSender alimqSender;

    public void sendMessageAli() {
        try {
            Long deliverTime = System.currentTimeMillis() + 1000 * 15;
            SendResponse sendCallback = alimqSender.sendSync("发送aliMq消息".getBytes(), deliverTime);
            System.out.println(sendCallback);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    
```
```
消费
public class ConsumerMessageAliImpl implements MessageProcessor {
    private Logger log = LoggerFactory.getLogger(ConsumerMessageAliImpl.class);

    @Override
    public boolean process(MqMessage msgs) {
        String message = new String(msgs.getBody());
        log.info("ali的消息" + message);
        return true;
    }
}
```

## 注意事项
在使用过程中需要注意有如下问题:
1. mq中一个group在一个jvm中只能有1个实例。否则会以最后启动的为准。
2. mq消费消息订阅到的是topic，tag使用的是过滤，即有消息（topic1，tag1），
  有两个消费者订阅分别是（topic1，tag）和（topic，tag1）此时这两个消费者
  均会对该消息有响应，第一个会因为订阅不是自己的tag而被过滤掉，第二个会正常消费。
3. 同一个消费者组内订阅关系必须一致，例如两个消费者订阅分别为（topic，tag1），（topic，tag2）
  此时会按照启动顺序，最后启动的消费者生效，之前的会无效。
```