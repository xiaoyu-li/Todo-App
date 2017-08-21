import React from 'react';
import { Layout } from 'antd';

import AppHeader from './AppHeader';
import AppContent from './AppContent';
import Todo from '../components/Todo';

import '../styles/layout.css';

const Content = Layout.Content;

function AppFrame() {
  return (
    <Layout>
      <AppHeader />
      <Content>
        <Layout id="app-frame">
          <AppContent>
            <Todo />
          </AppContent>
        </Layout>
      </Content>
    </Layout>
  );
}

export default AppFrame;
