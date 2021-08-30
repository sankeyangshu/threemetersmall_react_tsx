/*
 * @Description: 头部导航组件
 * @Author: 王振
 * @Date: 2021-08-30 13:52:43
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-30 14:22:30
 */
import React, { useState, useEffect } from 'react';
import moduleCss from './Header.module.less';
import dayjs from 'dayjs';
import { Col, Row } from 'antd';

const Header = () => {
  const [userName, setUserName] = useState(''); // 用户名
  const [date, setDate] = useState(''); // 时间

  useEffect(() => {
    setUserName('三棵杨树');
    setInterval(() => {
      const date = dayjs(new Date()).format('YYYY-MM-DD HH:mm:ss');
      setDate(date);
    }, 1000);
  }, []);

  return (
    <div className={moduleCss.header}>
      <Row className={moduleCss.header_top}>
        <Col span="24">
          <span>欢迎，{userName}</span>
          <a href="#" className={moduleCss.logout}>
            退出
          </a>
        </Col>
      </Row>
      <Row className={moduleCss.breadcrumb}>
        <Col span="4" className={moduleCss.breadcrumb_title}>
          首页
        </Col>
        <Col span="20" className={moduleCss.weather}>
          <span className={moduleCss.date}>{date}</span>
          <span className="weather_detail">暴雨</span>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
