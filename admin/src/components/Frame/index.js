import React from 'react';
import { Layout } from 'antd'
import SlideMenu from "./SlideMenu";
import Logo from '../../assets/logo.jpg'
import { getToken } from '../../utils/auth'
import { Redirect, Switch, Route } from 'react-router-dom';

import Welcome from "../../pages/Welcome";

const { Header, Footer, Sider, Content } = Layout;

function Frame(props) {
  console.log(!getToken());
  if (!getToken()) {
    return <Redirect to='/login' />
  }
  return (
    <Layout style={{ height: '100%' }}>
      <Header style={{ height: '80px', display: 'flex', alignItems: 'center', background: '#fff' }}>
        <img style={{ height: '60px', marginRight: '100px' }} src={Logo} alt='logo'></img>
        <h2>名单收集后台管理系统</h2>
      </Header>
      <Layout>
        <Sider width={256} theme='dark'>
          <SlideMenu />
        </Sider>
        <Layout>
          <Content>
            <Switch>
              <Redirect from='/' exact to='/home' />
              <Route path='/home' component={Welcome} />
            </Switch>
          </Content>
          <Footer style={{ background: '#ccc', textAlign: 'center' }}>
            by@天津农商银行
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default Frame