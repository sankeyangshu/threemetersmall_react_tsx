/*
 * @Description: webpack 配置文件
 * @Author: 王振
 * @Date: 2021-08-26 09:45:47
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-26 09:47:51
 */
const { override, fixBabelImports, addWebpackAlias, addLessLoader } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      localIdentName: '[local]--[hash:base64:5]',
    },
  })
);
