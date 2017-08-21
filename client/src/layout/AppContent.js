import React from 'react';
import { Layout } from 'antd';

const Content = Layout.Content;

function AppContent(props) {
  const { children } = props;
  return (
    <Content id="app-content">
      {children}
    </Content>
  );
}

export default AppContent;
