/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2019-11-18 15:27:18
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-20 09:38:17
 */
/*
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2019-11-18 15:27:18
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2020-11-26 18:52:31
 */
module.exports = {
  title: "常用知识整理", // 显示在左上角的网页名称以及首页在浏览器标签显示的title名称
  description: "个人知识库", // meta 中的描述文字，用于SEO
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ["link", { rel: "icon", href: "/logo.png" }], //浏览器的标签栏的网页图标
  ],
  base: "/tools/",
  markdown: {
    lineNumbers: false,
    toc: { includeLevel: [1, 2, 3, 4] },
    extractHeaders: ["h1", "h2", "h3", "h4"],
  },
  themeConfig: {
    sidebarDepth: 2,
    logo: "/logo.png",
    lastUpdated: "lastUpdate", // string | boolean
    nav: [
      { text: "首页", link: "/" },
      { text: "segmentfault", link: "https://segmentfault.com/u/wangzc996" },
      { text: "github", link: "https://github.com/wzc570738205" },
    ],
    sidebar: {
      // '/pages/html/': [
      //     {
      //         title: '', // 必要的
      //         collapsable: true, // 可选的, 默认值是 true,
      //         sidebarDepth: 1, // 可选的, 默认值是 1
      //         path: '/pages/html/.md',
      //     },
      // ],
      "/pages/": [
        {
          title: "关于我", // 必要的
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 0, // 可选的, 默认值是 1
          path: "/pages/aboutme.md",
        },
        {
          title: "css", // 必要的
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1,
          children: [
            ["/pages/css/disableaLink.md", "禁用a标签在自己网站的显示方法"],
            ["/pages/css/gridBackground.md", "用css实现背景线网格"],
            ["/pages/css/disableHover.md", "如何禁用css hover"],
            ["/pages/css/textHidden.md", "html单行、多行文本溢出隐藏"],
            ["/pages/css/border.md", "实现一个带脚边的边框"],
            ["/pages/css/gradientprogressbar.md", "css渐变进度条"],
          ]
        },
        {
          title: "jenkins", // 必要的
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 2,
          children: [
            ["/pages/jenkins/installJdk.md", "在linux服务器上安装jdk"],
            ["/pages/jenkins/install.md", "在linux服务器上安装Jenkins"],
            ["/pages/jenkins/sendEmail.md", "jenkins构建成功后邮件发送文件"],
            ["/pages/jenkins/buildGit.md", "使用jenkins自动构建github项目"],
            ["/pages/jenkins/svnDing.md", "svn实现钉钉代码提交通知"],
            ["/pages/jenkins/cicd.md", "[Jenkins进阶]-前端CI/CD"],
          ]
        },
        {
          title: "nginx", // 必要的
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1,
          children: [
            ["/pages/nginx/install.md", "如何在Centos 7上安装和管理Nginx"],
            ["/pages/nginx/expires.md", "nginx缓存的开启和禁用"],
            ["/pages/nginx/gzip.md", "nginx开启gzip"],
          ]
        },
        {
          title: "vue", // 必要的
          collapsable: true, // 可选的, 默认值是 true,
          sidebarDepth: 1,
          children: [
            ["/pages/vue/removelog.md", "打包去除生产环境console.log"],
            ["/pages/vue/gzip.md", "vue打包开启gzip"],
          ]
        },
      ],
      // '/pages/index/': [
      //     {
      //         title: '介绍', // 必要的
      //         collapsable: true, // 可选的, 默认值是 true,
      //         sidebarDepth: 1, // 可选的, 默认值是 1
      //         path: '/pages/index/介绍.md',
      //     },
      //     {
      //         title: '核心框架',
      //         collapsable: true,
      //         sidebarDepth: 1,
      //         children: [
      //             ['核心框架/集团核心基础框架.md', '集团核心基础框架'],
      //             ['核心框架/链路监控.md', '链路监控'],
      //             ['核心框架/Redis缓存.md', 'Redis缓存'],
      //             ['核心框架/多数据源.md', '多数据源'],
      //             ['核心框架/工具类.md', '工具类'],
      //             ['核心框架/内存缓存.md', '内存缓存'],
      //             ['核心框架/JMS消息.md', 'JMS消息'],
      //             ['核心框架/流程引擎.md', '流程引擎']
      //         ],
      //     },
      //     {
      //         title: '脚手架',
      //         collapsable: true,
      //         sidebarDepth: 1,
      //         children: [
      //             ['脚手架/前端手册.md', '前端手册'],
      //             ['脚手架/后端手册.md', '后端手册'],
      //         ],
      //     },
      //     {
      //         title: '公共服务',
      //         collapsable: true,
      //         sidebarDepth: 1,
      //         children: [
      //             ['公共服务/支付服务.md', '支付服务'],
      //             ['公共服务/通知服务.md', '通知服务'],
      //             ['公共服务/单点登录服务.md', '单点登录服务'],
      //             ['公共服务/数据转换平台服务.md', '数据转换平台服务'],
      //         ],
      //     },
      //     {
      //         title: '公共组件',
      //         collapsable: true,
      //         sidebarDepth: 1,
      //         children: [
      //             ['公共组件/报表组件.md', '报表组件'],
      //         ],
      //     },
      //     {
      //         title: '其他',
      //         collapsable: true,
      //         sidebarDepth: 1,
      //         children: [
      //             ['其他/nginx配置.md', 'nginx配置'],
      //             ['其他/Maven配置.md', 'Maven配置']
      //             //['其他/Jenkins配置.md', 'Jenkins配置'],
      //         ],
      //     },
      // ],
    },
  },
};
