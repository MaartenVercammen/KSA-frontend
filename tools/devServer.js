/* eslint-disable import/no-extraneous-dependencies */
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.dev');

const bundler = webpack(config);

const server = new WebpackDevServer({
  historyApiFallback: true,
  host: process.env.FRONTEND_DEV_HOST || 'localhost',
  hot: true,
  port: process.env.FRONTEND_DEV_PORT || 3000,
  static: {
    directory: path.join(__dirname, '/public'),
  },
  proxy: {
    '/uploads/images': `${process.env.DEV_SERVER_URL}`,
    '/pdf': `${process.env.DEV_SERVER_URL}/uploads`,
    '/api': `${process.env.DEV_SERVER_URL}`,
  },
}, bundler);

server.start();
