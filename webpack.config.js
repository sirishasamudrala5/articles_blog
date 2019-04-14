'use strict';

const path = require('path');
const distDir = path.resolve(__dirname, 'dist');

const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
    output: {
        filename: 'bundle.js',
        path: distDir
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        contentBase: distDir,
        port: 6080
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",
            filename: "./index.html"
        })
    ]
};