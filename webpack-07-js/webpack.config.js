const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './index.js',
    output: {
        filename: 'js/main.js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'development',
    module: {
        rules: [
            // 语法检查
            // eslint-loader eslint
            // 设置检查规则
            // - package.json中eslintConfig设置
            //  -   "eslintConfig": {
            //        "extends": "airbnb-base"
            //       }
            // - 检查规则之一：airbnb
            //  - eslint eslint-config-airbnb-base eslint-plugin-import
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     options: {

            //     }
            // }
            {
                /**
                 * js兼容性处理
                 * - babel-loader @babel/preset-env @babel/core
                 *   - 基本兼容处理，不能处理promise等
                 * - @babel/polyfill（已弃用）
                 *  - 全部兼容性处理,index.js引入，不是loader
                 *  - 包含全部兼容，体积大
                 * - core-js
                 *  - 按需加载
                 */
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                options: {
                    // 预设：指示babel做怎样的兼容性处理
                    presets: [[
                        "@babel/preset-env",
                        {
                            useBuiltIns: 'usage',
                            corejs: {
                                version: 3
                            },
                            // 指定兼容性做到哪个版本的浏览器
                            targets:{
                                chrome: '60',
                                firefox: '60',
                                ie: '9',
                                safari: '10',
                                edge: '17'
                            }
                        }
                    ]]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}