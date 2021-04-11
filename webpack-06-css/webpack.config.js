const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
// miniCssExtractPlugin
// css分割为单个文件
// 兼容性处理

// process.env.NODE_ENV = "development";

// 压缩css
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    entry: './index.js',
    output: {
        filename: 'js/main.js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'none',
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                // "style-loader",
                {
                    // 分割为单个css文件
                    loader: miniCssExtractPlugin.loader
                },
                "css-loader",
                {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    // 查看package.json浏览器环境，默认看生产环境
                                    // browserslist 设置兼容范围
                                    "postcss-preset-env",
                                    {
        
                                    }
                                ]

                            ]
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
        new miniCssExtractPlugin({
            filename: 'css/built.css'
        }),
        // 压缩css
        new optimizeCssAssetsWebpackPlugin()
    ]
}