// 指定输出位置

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: './index.js'
    }, // 入口
    output: {
        filename: "js/[name].js",
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist/'
    },
    mode: "none",
    module: {
        // 链中的每个 loader 都将对资源进行转换 链会逆序执行
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                loader:'file-loader',
                options: {
                    outputPath: 'images',
                    name: "[hash:10][name].[ext]"
                }
            }, {
                test: /\.s[ac]ss$/i,
                use: [
                    // // 将 JS 字符串生成为 style 节点
                    "style-loader",
                    // // 将 CSS 转化成 CommonJS 模块
                    "css-loader",
                    // // 将 Sass 编译成 CSS
                    "sass-loader"
                ]
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                use: 'yaml-loader',
            }
        ]
    },
    plugins: [
        // 默认会创建一个空的html文件，默认打包的所有资源
        new HtmlWebpackPlugin({
            // 创建一个html文件
            title: 'html plugin',
            template: './index.html',

        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        // 启用gzip压缩
        compress: true,
        port: 3000
    }
}