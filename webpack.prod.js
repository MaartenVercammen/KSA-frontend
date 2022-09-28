const { merge } = require('webpack-merge')
const common = require('./webpack.common')
const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = merge(common, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, './dist/build/'),
        filename: 'main.js',
        publicPath: '/',
    },
    plugins: [
        new Dotenv({
            path: './.env.production', // Path to .env file (this is the default)
        }),
    ],
})
