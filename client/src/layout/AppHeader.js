import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header id="app-header">
      <div id="brand-logo" />
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">
          <Icon type="plus" />
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="bell" />
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="setting" />
        </Menu.Item>
      </Menu>
    </Header>
  );
}

AppHeader.propTypes = {};
export default AppHeader;
