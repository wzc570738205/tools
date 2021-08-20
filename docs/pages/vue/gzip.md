<!--
 * @FileDescription: 
 * @Author: wangzhichiao<https://github.com/wzc570738205>
 * @Date: 2021-08-20 09:11:09
 * @LastEditors: wangzhichiao<https://github.com/wzc570738205>
 * @LastEditTime: 2021-08-20 09:21:09
-->
### 下载依赖
```sh
"compression-webpack-plugin": "^5.0.1",
```

### vue.config.js
```js
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i
module.exports = {
    configureWebpack: {
		plugins: [
		  new CompressionWebpackPlugin({
			filename: '[path].gz[query]',
			algorithm: 'gzip',
			test: productionGzipExtensions,
			threshold: 10240,
			minRatio: 0.8
		  })
		]
	}
}
```