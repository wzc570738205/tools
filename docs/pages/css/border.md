<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-19 17:31:14
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-19 17:50:31
-->
用css来实现一个带脚边的边框
```css
background: linear-gradient(270deg, #1f6fb6, #1f6fb6) 0 0 no-repeat,
    linear-gradient(180deg, #1f6fb6, #1f6fb6) 0 0 no-repeat,
    linear-gradient(270deg, #1f6fb6, #1f6fb6) 100% 0 no-repeat,
    linear-gradient(180deg, #1f6fb6, #1f6fb6) 100% 0 no-repeat,
    linear-gradient(270deg, #1f6fb6, #1f6fb6) 0 100% no-repeat,
    linear-gradient(180deg, #1f6fb6, #1f6fb6) 0 100% no-repeat,
    linear-gradient(270deg, #1f6fb6, #1f6fb6) 100% 100% no-repeat,
    linear-gradient(270deg, #1f6fb6, #1f6fb6) 100% 100% no-repeat;
background-size: 2px 8px, 8px 2px, 2px 8px, 8px 2px;
```

[源码地址](https://codepen.io/wzc570738205/pen/poPgvdY)

<border />
