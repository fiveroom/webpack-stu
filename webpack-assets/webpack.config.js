const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    output: {
        clean: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.(png|jpg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[hash][ext][query]'
                }
            },
            {
                test: /\.s(a|c)ss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: 'resolve-url-loader',
                        // options: {...}
                    }, 
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                        },
                    }
                ]
            }
        ]
    },
    mode: 'development',
    devtool: 'eval-cheap-source-map',
    devServer: {
        port: 3000
    }
}