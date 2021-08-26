/*
 * @Description: 路由文件
 * @Author: 王振
 * @Date: 2021-08-26 13:55:58
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-26 14:28:52
 */

import Home from '@/views/Home';

/**
 * path 跳转的路径
 * component 对应路径显示的组件
 */
const routes = [
  {
    path: '/',
    name: '首页',
    key: 'home',
    component: Home,
  },
];

export default routes;
