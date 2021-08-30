/*
 * @Description: 全局根组件
 * @Author: 王振
 * @Date: 2021-08-26 09:16:09
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-30 14:42:37
 */
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Login from '@/views/Login';
import { Admin } from '@/layout';

const App: React.FC = () => {
  return (
    <HashRouter>
      <Route exact path="/login" component={Login} />
      <Route path="/admin" render={() => <Admin></Admin>} />
    </HashRouter>
  );
};

export default App;
