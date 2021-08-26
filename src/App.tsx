/*
 * @Description: 全局根组件
 * @Author: 王振
 * @Date: 2021-08-26 09:16:09
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-26 14:56:11
 */
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from '@/views/Login';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Route exact path="/login" component={Login} />
    </HashRouter>
  );
};

export default App;
