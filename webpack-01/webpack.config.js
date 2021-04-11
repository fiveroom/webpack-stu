const path = require('path');

module.exports = {
    entry: './src/index.js', // 入口
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    mode: "none"
}