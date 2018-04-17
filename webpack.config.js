var webpack = require('webpack');
var PACKAGE = require('./package.json');
var banner = `${PACKAGE.name}
${PACKAGE.description}
@version v${PACKAGE.version}
@author Arka Roy
@copyright ©${new Date().getFullYear()} Arka Roy
Released under the ${PACKAGE.license} license`;

module.exports = {
    entry: {
        main: './src/main.js'
    },
    output: {
        path: __dirname,
        filename: './dist/[name].js',
        library: 'utils',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin(banner)
    ]
}