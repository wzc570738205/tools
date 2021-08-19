### 单行溢出隐藏
```css
div {
    width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```
### 多行溢出隐藏
```css
div {
    width: 150px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
}
```

<textHidden></textHidden>

***注：***

`-webkit-line-clamp`用来限制在一个块元素显示的文本的行数。 为了实现该效果，它需要组合其他的`WebKit`属性。常见结合属性：

`display: -webkit-box; `必须结合的属性 ，将对象作为弹性伸缩盒子模型显示 。

`-webkit-box-orient `必须结合的属性 ，设置或检索伸缩盒对象的子元素的排列方式 。