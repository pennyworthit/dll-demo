const path = require('path');
const webpackConfig = require('./webpack.config');

const publichPath = path.resolve(__dirname, '..', 'public');

module.exports = {
  ...webpackConfig,
  devServer: {
    port: 8080,
    contentBase: publichPath,
    compress: true,
  },
};