const path = require('path');

module.exports = {
    entry: './src/id3.ts',
    output: {
        filename: 'id3.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'id3'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            loader: 'ts-loader'
        }]
    },
    mode: 'production'
}