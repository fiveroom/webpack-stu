const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    mode: 'production',
    output: {
        filename: "[name].js",
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
    plugins: [
        new BundleAnalyzerPlugin(),
        new CompressionPlugin({
            test: /.*\.(js)$/
        })
    ]
}