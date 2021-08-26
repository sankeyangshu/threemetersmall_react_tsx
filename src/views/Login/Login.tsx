/*
 * @Description: 登录页面
 * @Author: 王振
 * @Date: 2021-08-26 13:21:20
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-26 14:57:35
 */
import React from 'react';
import ReactCanvasNest from 'react-canvas-nest';
// import moduleCss from './Login.module.less';
// import { useHistory } from 'react-router-dom';
// import { LockOutlined, UserOutlined } from '@ant-design/icons';
// import { Form, Input, Button, message } from 'antd';

const Login = () => {
  return (
    <div>
      <ReactCanvasNest
        config={{
          pointColor: '110,65,255',
          lineColor: '110,65,255',
          pointOpacity: 0.6,
        }}
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

export default Login;
