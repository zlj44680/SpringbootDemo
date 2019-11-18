import { Menu, Icon, Layout,Button } from 'antd';
import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

import Product from './Product/product';
import Solodout from './Solodout/solodout';
import Putaway from './Putaway/putaway';

var AdminCss=require('./admin.css');

const { Header, Content, Footer, Sider } = Layout;






export default class Admin extends React.Component {

  render() {
      return (
          <div className={AdminCss.p}  style={{ width: 1850, height:950,marginLeft: 5, marginTop: 20}}>
              <div className={AdminCss.title}>管理员系统</div>
          <div style={{ width: 1650, height:750,marginLeft: 110, marginTop: 40} }>  
          <BrowserRouter>
              <div style={{width:1500,marginLeft:80,borderStyle:'solid,',borderWidth:2,borderBottomStyle:'none'}} className={AdminCss.a1}>
                  <div style={{marginLeft:1430}}>
                         <Link to='./login1'><Icon type="arrow-right" style={{fontSize:20}}/>
                          <span style={{fontSize:20}}>退出</span></Link> 
                  </div>  
              </div>
          </BrowserRouter>    
              <div style={{height:700}}>
                  <BrowserRouter basename="admin">
                  <div style={{height:700,width:180,marginLeft:80,borderStyle:'solid',borderWidth:2,borderRightStyle:'none'}}>
                      <div style={{borderBottomStyle:'solid',height:50,borderWidth:2 }} >
                          <Icon type="putaway" style={{ fontSize: 20}}/>
                          <Link to="/putaway" style={{fontSize:20,color:'gray'} }>上架商品</Link>
                      </div>
                      <br></br>
                      <div style={{borderBottomStyle:'solid',borderWidth:2,height:50}}>
                          <Icon type="solodout" style={{ fontSize: 20 }}/>
                          <Link to="/solodout" style={{fontSize:20,color:'gray'}}>下架商品</Link>
                      </div>                       
                      <br></br>
                      <div style={{borderBottomStyle:'solid',borderWidth:2,height:50}}>
                          <Icon type="product" style={{ fontSize: 20 }}/>
                          <Link to="/product" style={{fontSize:20,color:'gray'}}>商品信息</Link>
                      </div>
                  </div>
                  
                  <div style={{marginLeft:260,width:1320,height:700,position:'relative',bottom:700,borderStyle:'solid',borderWidth:2}}  className={AdminCss.a1}>
                      <div style={{borderStyle:'solid,white',borderWidth:2,width:1200,height:600,marginLeft:60,marginTop:40}} className={AdminCss.a2}>
                     <Route path='/solodout' component={Solodout}></Route>
                     <Route path='/putaway' component={Putaway}></Route>
                      <Route path="/product" component={Product}></Route>
                      
                      </div>
                  </div>
                  

                  </BrowserRouter>
              </div>
              </div>
              </div>
        );
    }
}