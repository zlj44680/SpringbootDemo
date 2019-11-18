
import React from 'react';
import { Layout, Menu, Icon } from 'antd';
import {Link} from "react-router-dom";


const { Header, Sider, Content } = Layout;
var CommdityCSS4=require('./commdity4.css');



export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div className={CommdityCSS4.a}>
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
         <div className={CommdityCSS4.b}><Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item></div>
            <div className={CommdityCSS4.b}><Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item></div>
            <div className={CommdityCSS4.b}><Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item></div>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '14px 6px',
              padding: 24,
              background: '#fff',
              minHeight: 280,
            }}
          >
           <div  className={CommdityCSS4.t}> 
          
           </div>
          </Content>
        </Layout>
      </Layout>
      </div>
    );
  }
}
