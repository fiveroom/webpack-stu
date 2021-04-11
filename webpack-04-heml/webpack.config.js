const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    mode: "none",
    module: {},
    plugins: [
        // 默认会创建一个空的html文件，默认打包的所有资源
        new HtmlWebpackPlugin({
            // 创建一个html文件
            title: 'html plugin',
            template: './index.html',
            
        })
    ]
}