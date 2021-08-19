(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{391:function(a,t,e){"use strict";e.r(t);var r=e(45),s=Object(r.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"插件介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#插件介绍"}},[a._v("#")]),a._v(" 插件介绍")]),a._v(" "),e("p",[a._v("多数据源通过注解配置方式，给业务方法提供除主数据源外，从数据源的支持。")]),a._v(" "),e("h2",{attrs:{id:"使用说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用说明"}},[a._v("#")]),a._v(" 使用说明")]),a._v(" "),e("p",[a._v('该datasource的配置使用于一主一从类型的数据源，主数据源可读写，从数据源只读。使用方法有两种：\n1、使用注解：在方法上使用@DS("master")表示使用主库，使用@DS("其他的dataSource")表示使用【其他的dataSource】库；\n2、使用事务：在方法上不加@DS，但是加上@Transiactional则会在master库中创建事务；')]),a._v(" "),e("p",[a._v("说明master库是指spring.datasource下的库\n其他库是指用户在自己的config下读取配置生成的数据库")]),a._v(" "),e("h2",{attrs:{id:"配置步骤"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置步骤"}},[a._v("#")]),a._v(" 配置步骤")]),a._v(" "),e("ol",[e("li",[a._v("引入依赖（需指定pom中parent为framework-core/framework-cloud，或者指定下面dependency的版本号1.0.0）:")])]),a._v(" "),e("dependency",[e("groupId",[a._v("com.ichinae.core.plugins")]),a._v(" "),e("artifactId",[a._v("ichinae-core-plugins-datasource")])],1),a._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[a._v("在启动类上添加：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('@SpringBootApplication(scanBasePackages = {"com.ichinae.plugins.datasource"})\n@SpringBootApplication(exclude = {DataSourceAutoConfiguration.class})//此句避免出现循环依赖\n')])])]),e("ol",{attrs:{start:"3"}},[e("li",[a._v("添加配置信息如下：")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("### 多数据源配置，读写分离\nspring:\n  datasource:\n    url: jdbc:mysql://192.168.60.195:3306/test?characterEncoding=UTF-8&serverTimezone=Asia/Shanghai\n    username: root\n    password: root\n    driver-class-name: com.mysql.cj.jdbc.Driver\n  datasource1:\n    slave:\n      url: jdbc:mysql://192.168.60.195:3306/test1?characterEncoding=UTF-8&serverTimezone=Asia/Shanghai\n      username: root\n      password: root\n      driver-class-name: com.mysql.cj.jdbc.Driver\n\n")])])]),e("ol",{attrs:{start:"4"}},[e("li",[a._v("增加数据库配置：\n多数据源配置，读写分离")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v('@Configuration\npublic class SqlConfiguration {\n\n    @Bean(name = "slaveDataSource")\n    @ConfigurationProperties("spring.datasource1.slave")\n    public DataSource masterDataSource() {\n        return new DruidDataSource();\n    }\n}\n')])])])],1)}),[],!1,null,null,null);t.default=s.exports}}]);