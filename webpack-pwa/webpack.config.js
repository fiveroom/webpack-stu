// 使用多入口
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');


module.exports = {
    entry: './index.js',
    output: {
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'pwa',
            template: 'index.html'
        }),
        /**
         * 1、帮助serviceworker快速启动
         * 2、删除旧的serviceworker
         * 
         * 功能：生成一个serviceworker配置文件
         * 
         * sw代码必须运在服务器上
         */
        new WorkboxWebpackPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    mode: 'none',
}