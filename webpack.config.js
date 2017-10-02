const webpack = require('webpack');
const createBabelConfig = require('./babelrc');
const path = require('path');

const ROOT = path.resolve('./');
const DIST = path.resolve('./dist');
const SRC = path.resolve('./src');

const clientConfig = {
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    },
    entry: path.resolve(SRC + '/client.js'),

    output: {
        path: DIST,
        filename: 'bundle.js',
    },

    resolve: {
        alias: {
            components: path.resolve(SRC + '/components'),
        },
    },

    module: {
        rules: [
            {
                test: /\.(html)$/,
                loader: 'file-loader?name=[name].[ext]',
            },
            {
                test: /\.js$/,
                include: [SRC],
                loader: 'babel-loader',
                query: createBabelConfig(),
            },
        ],
    },
};

module.exports = [clientConfig];
