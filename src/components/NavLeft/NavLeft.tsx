/*
 * @Description: 侧边导航组件
 * @Author: 王振
 * @Date: 2021-08-30 14:26:28
 * @LastEditors: 王振
 * @LastEditTime: 2021-08-30 14:39:52
 */
import React, { useState, useEffect } from 'react';
import moduleCss from './NavLeft.module.less';
import MenuConfig from '@/assets/js/menuConfig';
import { NavLink } from 'react-router-dom';
import { Menu } from 'antd';
const { SubMenu } = Menu;

const NavLeft: React.FC = () => {
  const [currentKey, setCurrentKey] = useState('');
  const [MenuTreeNode, setMenuTreeNode] = useState();

  //  菜单渲染
  const renderMenu = (data: any) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {renderMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.key}>
          <NavLink to={item.key}>{item.title}</NavLink>
        </Menu.Item>
      );
    });
  };

  const handleClick = ({ item, key }) => {
    if (key === currentKey) {
      return false;
    }
    // // 事件派发，自动调用reducer，通过reducer保存到store对象中
    // const { dispatch } = this.props;
    // dispatch(switchMenu(item.props.title));
    setCurrentKey(key);
  };

  useEffect(() => {
    setMenuTreeNode(renderMenu(MenuConfig));
    setCurrentKey(window.location.hash.replace(/#|\?.*$/g, ''));
  }, []);

  return (
    <div>
      <div className={moduleCss.logo}>
        <img src="logo192.png" alt="" />
        <h1>三米商城</h1>
      </div>
      <Menu onClick={handleClick} selectedKeys={[currentKey]} theme="dark">
        {MenuTreeNode}
      </Menu>
    </div>
  );
};

export default NavLeft;
