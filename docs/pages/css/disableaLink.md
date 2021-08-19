<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-19 15:24:16
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-19 15:50:02
-->
当你不想将一些网站的链接放置在你的网站内你可以这么屏蔽,这个常用与博客类网站。

比如你在`知乎`里写博客，想放`csdn`的链接，那么`知乎`就可以用下面的方式把你的链接屏蔽掉
```css
a[href*=".aliyun.com/minisite/goods?"], 
a[href="http://gk.link/a/103EK"], 
a[href="https://start.aliyun.com/"], 
a[href^="https://cloud.tencent.com/"], 
a[href^="https://openwrite.cn/"], 
a[href="https://s.click.taobao.com/cTAwFvu"], 
a > img[src*=".sinaimg."][src$=".gif"][style*="width:960"], 
a > img[width="960"][src*=".alicdn.com/"], 
a > img[width="960"][src*=".sinaimg."], 
a > img[width="980"][src*=".sinaimg."], 
a[href*=".umeng.com"]:not([href="http://www.umeng.com/"]) > img, 
a[href*="https://www.zhidmai.com"], 
a[href^="http://www.upupoo.com"], 
a[href*="/cpro."], 
a[href*="/cpro/"] {
  display: none !important;
}
```