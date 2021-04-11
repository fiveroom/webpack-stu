const path = require('path');
const yaml = require('yamljs');
const json5 = require('json5')
module.exports = {
    entry: {
        app: './index.js'
    }, // 入口
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist/'
    },
    mode: "none",
    module: {
        // 链中的每个 loader 都将对资源进行转换 链会逆序执行
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                use: [
                    'file-loader'
                ]
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
            // {
            //     test: /\.css$/,
            //     use: [
            //         'style-loader',  // 将css样式写入应用 style标签中
            //         'css-loader'  // 读取css文件中内容
            //     ]
            // },
            {
                test: /\.yaml$/i,
                type: 'json',
                use: 'yaml-loader',
            }, {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ]
    }
}