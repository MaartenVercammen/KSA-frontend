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
    '/images': `${process.env.DEV_SERVER_URL}/uploads`,
    '/pdf': `${process.env.DEV_SERVER_URL}/uploads`,
    '/magazine': `${process.env.DEV_SERVER_URL}`,
    '/user': `${process.env.DEV_SERVER_URL}`,
    '/auth': `${process.env.DEV_SERVER_URL}`,
    '/post': `${process.env.DEV_SERVER_URL}`,
  },
}, bundler);

server.start();
