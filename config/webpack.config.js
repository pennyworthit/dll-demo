const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const DllReferencePlugin = webpack.DllReferencePlugin;

const srcPath = path.resolve(__dirname, '..', 'src');
const buildPath = path.resolve(__dirname, '..', 'build');
const publicPath = path.resolve(__dirname, '..', 'public');

const webpackConfig = {
  mode: 'development',
  entry: [
    path.resolve(srcPath, 'index.js'),
  ],
  output: {
    path: buildPath,
    filename: 'static/js/bundle.js',
    // publicPath,
  },
  resolve: {
    extensions: ['js', 'jsx'].map(ext => `.${ext}`),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env', '@babel/react'],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(publicPath, 'index.html'),
    }),
    new DllReferencePlugin({
      manifest: path.join(publicPath, 'dll/vendor.manifest.json'),
    }),
  ],
};

module.exports = webpackConfig;