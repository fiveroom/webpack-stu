module.exports = {
    mode: 'development',
    module: {
        rules: [
{
    test: /.js$/,
    exclude: /node_modules/,  // 提出nodel_modules
    use: {
        loader: "babel-loader",
        options: {
            plugins: [
                ["@babel/plugin-transform-runtime",
                    {
                        "corejs": 3,
                    }
                ]
            ]
        }
    }
}
        ]
    },
    devtool: 'source-map'
}