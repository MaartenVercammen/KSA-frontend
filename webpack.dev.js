const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common,{
    mode: 'development',
    output: {
        path: path.resolve(__dirname, './dist/dev/'),
        filename: 'main.js',
        publicPath: '/',
    },
    plugins: [
        new Dotenv({
            path: path.resolve(__dirname, './.env.dev') // Path to .env file (this is the default)
        }),
    ],
})
