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
    extensions: ['.js', '.jsx', '.svg'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.styl$/,
        loaders: ['style-loader', 'css-loader', 'stylus-loader'],
      },
      {
        test: /\.css/,
        loaders: ['css-loader'],
      },
      {
        test: /\.svg/,
        loaders: ['svg-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        API_URL: JSON.stringify(process.env.API_URL),
      },
    }),
  ],
};
