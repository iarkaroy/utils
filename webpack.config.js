var webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: __dirname,
        filename: './dist/[name].js'
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    }
}