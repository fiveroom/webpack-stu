// 使用dll技术，对某些库（第三方库：jquery、react、vue）单独打包
// 以后的打包不用再次对这些库重新打包，只需使用以前打包好的
const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        jquery: ['jquery']
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dll'),
        library: '[name]_[hash:8]' // 打包库里面向外暴露出去的名字
    },
    plugins: [
        // 打包生成一个mainfest.json  --> 提供和jquery映射
        new webpack.DllPlugin({
            name: '[name]_[hash:8]', // 映射库的暴露的内容名称
            path: resolve(__dirname, 'dll/mainfest.json')
        }),
        

    ],
    mode: 'production'
}