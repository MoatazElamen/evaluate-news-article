const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');


require("@babel/polyfill");
module.exports = {
    entry: ['@babel/polyfill','./src/client/index.js'],
    mode: 'development',
    devtool: 'source-map',
    stats: 'minimal',
    module: {
        rules: [
            //babel Loader that match js files as development
            {
                test:/\.js/,
                exclude:/node_modules/,
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
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        }),
               // workbox-webpack-plugin
        new WorkboxPlugin.GenerateSW()
 
    ]
}
