// 使用多入口
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '按需加载',
            template: 'index.html'
        }),
    ],
    /**
     * - node_modules中代码单独打包一个chunk最终输出
     * - 自动分析多入口文件中是否包含公共的文件（体积大于 20kb）。若有会打包成一个单独的chunk
     */
    optimization:{
        splitChunks: {
            chunks: 'all'
        }
    },
    mode: 'production',
}