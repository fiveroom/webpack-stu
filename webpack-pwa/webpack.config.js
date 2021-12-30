// 使用多入口
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'js/[name].[contenthash:10].js',
        path: resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'pwa',
            template: './index.html'
        }),
        // 告诉webpack哪些库不用打包，同时使用名称也要改变
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: resolve(__dirname, 'dll/mainfest.json')
        }),
        // 将某个文件打包出去，并在html中自动引入
        new AddAssetHtmlWebpackPlugin({
            filepath: resolve(__dirname, 'dll/jquery.js')
        })
        /**
         * 1、帮助serviceworker快速启动
         * 2、删除旧的serviceworker
         * 
         * 功能：生成一个serviceworker配置文件
         * 
         * sw代码必须运在服务器上
         */
        // new WorkboxWebpackPlugin.GenerateSW({
        //     clientsClaim: true,
        //     skipWaiting: true
        // })
    ],
    mode: 'production',
    // 忽悠打包，需要手动引入
    // externals: {
    //     // 忽略库名 -- npm 包名
    //     // 键名为页面引入时的名字，值是包名
    //     myJquery: 'jQuery'
    // }
}