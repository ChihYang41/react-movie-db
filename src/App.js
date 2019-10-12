import React from 'react';
import { Layout as AntdLayout } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import './App.scss';

import Header from './containers/Header';
import Routes from './components/Routes/Routes';
const { Content, Footer } = AntdLayout;

function App(){
  return (
    <AntdLayout className="layout">
      <div className="main-backdrop"/>
        <BrowserRouter>
          <Header/>
          <Content style={{ minHeight: '83vh', marginTop: '70px'}}>
            <div style={{ padding:'0 24px', minHeight: '280px' }}>
              <Routes />
            </div>
          </Content>
        </BrowserRouter>
      <Footer style={{ textAlign: 'center' }}>©2019 Created by ChihYang41</Footer>
    </AntdLayout>
  );
}

export default App;