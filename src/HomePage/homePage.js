import React from 'react';
import { API, Input, enterButton, Divider, Icon, Avatar, Carousel, Menu, Pagination, Tabs, } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky'
import {Link} from 'react-router-dom';
var HomePageCss = require('./homePage.css')




const { Search } = Input;

const { TabPane } = Tabs;

const renderTabBar = (props, DefaultTabBar) => (
    <Sticky bottomOffset={80}>
        {({ style }) => (
            <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
        )}
    </Sticky>
);

export default class HomePage extends React.Component{
    render(){

        return(
            <div className={HomePageCss.background}>
            <div className={HomePageCss.header}>
              闲置租赁平台

                <div className={HomePageCss.ul}>
                    <li><Avatar icon="user" /></li>
                    <Link to="/login"><li ><a href="../html/Login.html"  >登陆</a></li></Link>
                    <Link to="/register"><li><a href="../html/Register.html" >注册</a></li></Link>
                   <Link to='/shoppingcart'> <li><a href="" >购物车</a></li></Link>
                   <Link to='/order'><li><a>订单</a></li></Link>
                </div>
                <div className={HomePageCss.container} >

                <Link to ="/classify"><input type="text" className={HomePageCss.search} placeholder="搜索" />
                    <input type="button" className={HomePageCss.btn} value="搜索" /></Link>

                </div>
                <Divider type="horizontal" />
            </div>

            <div className={HomePageCss.carousel}>

                <Carousel autoplay>
                    <div className={HomePageCss.a}>
                        <h3>衣着</h3>
                    </div>
                    <div className={HomePageCss.b}>
                        <h3>电器</h3>
                    </div>
                    <div className={HomePageCss.c}>
                        <h3>用具</h3>
                    </div>
                    <div className={HomePageCss.d}>
                        <h3>装饰</h3>
                    </div>
                </Carousel>
            </div>
            <Divider orientation="left"> 热门物品 </Divider>
            <div className={HomePageCss.body}>

                <div className={HomePageCss.text} >


                <Link to="/commdity3"> <div className={HomePageCss.A}>
                    <div className={HomePageCss.e}>

                        </div>

                      专辑￥20每天
                    </div></Link>

                    <Link to="/commdity3"><div className={HomePageCss.B}>
                        <div className={HomePageCss.g}>
                        </div>
                        专辑￥0每天
                    </div></Link>
                    
                    <Link to="/commdity3"> <div className={HomePageCss.C}>
                        <div className={HomePageCss.i}>

                    </div>
                        专辑 ￥21每天
                    </div></Link>

                    <Link to="/commdity3"><div className={HomePageCss.D}>
                        <div className={HomePageCss.j}>

                        </div>
                        专辑 ￥2每天
                    </div></Link>

                    <Link to="/commdity3"> <div className={HomePageCss.E}>
                        <div className={HomePageCss.k}>

                        </div>
                        书刊 ￥4每天
                    </div></Link>

                    <Link to="/commdity3"> <div className={HomePageCss.F}>
                        <div className={HomePageCss.l}>

                        </div>
                        书刊 ￥2每天
                    </div></Link>

                    <Link to="/comdity3"> <div className={HomePageCss.G}>
                        <div className={HomePageCss.m}>

                        </div>
                        书刊 ￥2每天
                    </div></Link>

                    <Link to="/commdity3"><div className={HomePageCss.H}>
                        <div className={HomePageCss.n}>

                        </div>
                        书刊 ￥2每天
                        </div></Link>
                </div>




            </div>
            <div>

                <Pagination size="small" total={50} />

            </div>
            <div>
                <Divider orientation="left">欢迎使用</Divider>
            </div>
            <div>
                <StickyContainer>
                    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
                        <TabPane tab="微信" key="1" style={{ height: 100 }}>
                            <a> 选择绑定</a>
                        </TabPane>
                        <TabPane tab="支付宝" key="2">
                            选择绑定
                        </TabPane>
                        <TabPane tab="QQ" key="3">
                            选择绑定
                        </TabPane>
                    </Tabs>
                </StickyContainer>
            </div>
            <div className={HomePageCss.footer}>
                <div className={HomePageCss.copyright}>
                    <p className={HomePageCss.p}>联系邮箱：1538558990@qq.com</p>
                    <div className={HomePageCss.img}>
                        <i className={HomePageCss.icon}></i><span>联系地址：西南交通大学希望学院</span>
                    </div>

                    <div className={HomePageCss.img}>
                        <i className={HomePageCss.icon1}></i><span>联系电话：18990671773</span>
                    </div>

                    <div className={HomePageCss.img}>
                        <i className={HomePageCss.icon2}></i><span>联系电话：18990671773</span>
                    </div>
                </div>
            </div>

        </div>

        )
    }
}