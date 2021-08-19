<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-19 16:04:51
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-19 16:21:57
-->
你想禁用某个ui里自带的hover属性的时候，如果你不想重写，你可以这么操作
```css
div{pointer-events:none}
div:hover{color:red;}
```
```html
<div>Hover over me</div>
```
