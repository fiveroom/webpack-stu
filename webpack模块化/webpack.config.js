const {resolve} = require('path');

module.exports = {
    output: {
        filename: '[name].js',
        path: resolve(__dirname, 'dist')
    },
    mode: 'development',
    devtool: "source-map"
}