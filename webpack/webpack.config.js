const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const uglifyPlugin = require('uglifyjs-webpack-plugin');

module.exports= {
    entry: {
        app:'./src/index.js',
        vender:'./src/vender.js'
    },
    output: {
        filename: '[hash]-[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase:'./dist'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader', 'css-loader'
            ]
        }]
    },
    //plugin section
    plugins: [
        new HTMLWebpackPlugin({
            title: 'My App'
        }),
        new CleanWebpackPlugin(['dist/*.*'],{dry:false}),
        new uglifyPlugin()
    ]
}