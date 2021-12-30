// 使用多入口
const {resolve} = require('path');

module.exports = {
    entry: {
        'string/string': './src/string/string.ts',
        'tree/tree': './src/tree/tree.ts',
        'index': './src/index.ts'
    },
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist'),
        library: {
            type: "umd",
            name: 'MyLibrary'
        }
    },
    resolve: {
        extensions: ['.ts'],
        alias: {
            'cn-tools': resolve(__dirname, 'src/')
        }
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                exclude: /node_modules|dist/,
                use: 'ts-loader'
            }
        ]
    },
    watch:true,
    devtool: 'source-map',
    mode: 'production'
}
