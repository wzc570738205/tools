<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-20 09:11:09
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-20 09:18:10
-->
### 下载依赖
```sh
"terser-webpack-plugin": "^4.1.0",
```

### vue.config.js
```js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    configureWebpack: {
		optimization: {
			minimize: process.env.NODE_ENV === 'production',
			minimizer: [
				new TerserPlugin({
					terserOptions: {
						ecma: undefined,
						warnings: false,
						parse: {},
						compress: {
							drop_console: true,
							drop_debugger: true,
							pure_funcs: ['console.log'], // 移除console
						},
					},
				}),
			],
		},
	}
}
```