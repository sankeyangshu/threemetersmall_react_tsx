/*
 * @Description: 后台管理系统默认模版
 * @Author: 王振
 * @Date: 2021-08-30 13:35:05
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-30 14:41:20
 */

import React from 'react';
import { Col, Row } from 'antd';
import moduleCss from './Admin.module.less';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavLeft from '@/components/NavLeft';

const Admin: React.FC = () => {
  return (
    <Row className={moduleCss.container}>
      <Col span="4" className={moduleCss.nav_left}>
        <NavLeft />
      </Col>
      <Col span="20" className={moduleCss.main}>
        <Header />
        <Row className={moduleCss.content}></Row>
        <Footer />
      </Col>
    </Row>
  );
};

export default Admin;
