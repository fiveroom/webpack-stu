const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
// miniCssExtractPlugin
// css分割为单个文件
// 兼容性处理

// process.env.NODE_ENV = "development";

// 压缩css
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');


const {CleanWebpackPlugin} = require('clean-webpack-plugin');

                                    // [
                                    //     // 查看package.json浏览器环境，默认看生产环境
                                    //     // browserslist 设置兼容范围
                                        
                                    // ]

                               
module.exports = {
    entry: './index.js',
    output: {
        filename: 'js/main.js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'production',
    module: {
        rules: [{
            test: /\.css$/,
            use:
                [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [  "postcss-preset-env" ]
                            }
                        }
                    }
                ]
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '提取css文件',
            template: 'index.html'
        }),
        // new miniCssExtractPlugin(
        //     {
        //         filename: 'css/built.[hash].css'
        //     }
        // ),
        new CleanWebpackPlugin()
        // 压缩css
        // new optimizeCssAssetsWebpackPlugin()
    ],
    devServer: {
        contentBase: resolve(__dirname, 'dist'),
        port: '8080',
        hot: true,
        compress: true
    },
    // 基本配置
    devtool: 'hidden-nosources-source-map'
}
// source-map