const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');
require("@babel/polyfill");
module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            //babel Loader that match js files as development
            {
                test:/\.js$/,
                exclude:/node_module/,
                loader:'babel-loader'
            },
            // Loaders for
            //    1. converting sass => css
            //    2. Turns css into commonjs
            //    3. Inject styles into DOM
            {
                test:/\.scss$/,
                loaders:["style-loader","css-loader","sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })
        // workbox-webpack-plugin
        ,new WorkboxPlugin.GenerateSW()
    ],
    optimization: {
        // Optimization for JS and CSS
        minimize: true,
    }
}
