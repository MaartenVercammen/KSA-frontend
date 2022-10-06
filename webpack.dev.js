/* eslint-disable import/no-extraneous-dependencies */
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  mode: 'development',
  target: 'web',
  output: {
    filename: 'main.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({ // Create HTML file that includes references to bundled CSS and JS.
      template: 'src/index.html',
      // favicon: 'src/favicon.png',
    }),
    new Dotenv({
      path: '.env.dev', // Path to .env file (this is the default)
    }),
  ],
  optimization: {
    // Readable IDs are better for debugging
    moduleIds: 'named',
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
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'autoprefixer',
                  'postcss-nesting',
                ],
              },
              sourceMap: true,
            },
          },
        ],
      },

      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
};
