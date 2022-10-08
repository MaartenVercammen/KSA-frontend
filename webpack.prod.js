/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, './dist/build/'),
    filename: 'main.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      favicon: 'src/favicon.png',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new Dotenv({
      path: '.env.production', // Path to .env file (this is the default)
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: (module) => {
            const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/)[1];
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`;
          },
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /(\.css)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[contenthash:base64:5]',
                auto: true,
              },
            },
          }, {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'postcss-nesting',
                  'cssnano',
                  'autoprefixer',
                ],
              },
            },
          },
        ],
      },
      {
        test: /\.woff2$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              mimetype: 'application/font-woff',
            },
          },
        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: /\.[jt]sx?$/,
        use: [
          {
            loader: '@svgr/webpack',
          },

        ],
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        issuer: /\.(css|ejs)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3)$/,
        use: ['file-loader'],
      },
    ],
  },
};
