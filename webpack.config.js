const path = require('path');
const webpack = require('webpack');

const BUILD_DIR = path.resolve(__dirname, 'dist/');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },
  output: {
    path: BUILD_DIR,
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/,
        loaders: ['url-loader'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
        exclude: /node_modules/,
      }
    ],
  },
};
