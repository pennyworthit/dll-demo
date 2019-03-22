// 动态链接库构建配置文件

const path = require('path');
const webpack = require('webpack');
const DllPlugin = webpack.DllPlugin;

const publichPath = path.resolve(__dirname, '..', 'public');

module.exports = {
  // 入口文件
  entry: {
    reactFamily: [
      'react',
      'react-dom',
      'react-router-dom',
      'react-redux',
    ],
  },

  // 动态链接库输出
  output: {
    filename: 'vendor.js',
    path: path.join(publichPath, 'dll'),

    // 存放动态链接库的全局变量名称，如 react -> _dll_react
    library: '_dll_[name]',
  },
  plugins: [
    new DllPlugin({
      // 与上面 output.library 中保持一致
      // 此字段是 manifest.json 中的 name 字段值
      // 如 react.manifest.json 中，name 为 "_dll_react"
      name: '_dll_[name]',

      // 对于 react, 这个就是生成 react.manifest.json 的路径
      path: path.join(publichPath, 'dll/vendor.manifest.json'),
    }),
  ],
};
