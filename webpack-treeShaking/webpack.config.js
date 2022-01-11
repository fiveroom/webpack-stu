// 使用多入口
const { resolve, join } = require('path');
const webpack = require('webpack')
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require('purgecss-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const glob = require('glob-all')
const CompressionPlugin = require("compression-webpack-plugin");
const InlineChunkHTMLPlugin = require('react-dev-utils/InlineChunkHtmlPlugin')

module.exports = {
    entry: {
        'index': './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
    },
    devtool: 'source-map',
    mode: 'development',
    optimization: {
        usedExports: true,
        minimize: true,
        // minimizer: [
        //     new TerserPlugin({
        //         parallel: true,
        //     }),
        // ],
        runtimeChunk: {
            name: 'runtime',
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new PurgecssPlugin({
            // 需要做tree shaking的路径，使用glob
            paths: glob.sync([
                `${join(__dirname, 'src')}/**/*`,
                `${__dirname}/**/*.html`
            ], { nodir: true }),
            safelist: () => {
                return {
                    standard: ['html']
                }
            }
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new CompressionPlugin({
            test: /\.(css|js)$/
        }),
        new InlineChunkHTMLPlugin(HtmlWebpackPlugin, [/^runtime.*\.js$/])
        // new webpack.optimize.ModuleConcatenationPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
                sideEffects: true
            }
        ]
    }
}
