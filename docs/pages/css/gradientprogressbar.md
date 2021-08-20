<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-20 09:36:16
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-20 09:40:03
-->
<gradientprogressbar />

[源码地址](https://codepen.io/wzc570738205/pen/MWyVNBa)

```html
<div class='wrap'>
  <div class='child'>
  </div>
</div>
```

```css
.wrap {
  width: 150px;
  height: 50px;
  border-radius: 15px;
  border: 2px solid #2e984c;
  background: #d8fad8;
  overflow: hidden;
}
.child {
  width: 150px;
  height: 50px;
  background: linear-gradient(to right, #3cc677, rgb(187 235 142 / 0.3));
  animation: atv 10s;
}
@keyframes atv {
  0% {
    width: 0px;
  }
  100% {
    width: 150px;
  }
}
```