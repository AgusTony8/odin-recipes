const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    module: {
    rules: [
        {
        //add css file
        //npm install --save-dev style-loader css-loader
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.html$/i,
        loader: "html-loader",
        },
        //add images
        {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        }
    ]},
    entry: {
    index: './src/index.js',
    },
    devtool: 'inline-source-map',
    devServer: {
    static: './dist',
    },
    plugins: [
    new HtmlWebpackPlugin({
        title: 'Odin-Recepies',
        template:'./src/index.html'
    }),
    ],
    output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    },
    optimization: {
    runtimeChunk: 'single',
    },
    };