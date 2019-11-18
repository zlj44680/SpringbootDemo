import React from 'react';
import {Link} from 'react-router-dom';
import './shoppingcart.css';

import { Divider, Checkbox, InputNumber,Pagination, Button ,Icon} from 'antd';
var ShoppingCartCss = require('./shoppingcart.css')
function onChange(e) {
    console.log(`checked = ${e.target.checked}`);
}

function showTotal(total) {
    return `Total ${total} items`;
  }
  


export default class DefaultShoppingCart extends React.Component {

    render() {

        return (
            <div className={ShoppingCartCss.All}>
               <h2 >     我的购物车</h2>
              <div className={ShoppingCartCss.head}> 
               <Link to='/homepage'> <div className={ShoppingCartCss.head1}>返回 </div></Link>
                <Link to='/homepage'> <div className={ShoppingCartCss.head1}>首页</div></Link>
               
              </div>
                 <Divider  orientation="left">详情</Divider>
               <div className={ShoppingCartCss.body}>

                    <div className={ShoppingCartCss.A}>
                   
                        
                        
                            <div className={ShoppingCartCss.a1}></div>
                            <div className={ShoppingCartCss.a}>
                            <p>商品名称：书</p>
                            <p>价格：1元/天</p>
                            <p>数量：<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></p>
                            <p>天数：<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></p>
                            </div>
                            <div className={ShoppingCartCss.a2} >
                                <Checkbox onChange={onChange}>选择</Checkbox>
                            
                        </div>
                    </div>

                    <div><Divider dashed /></div>



                    <div className={ShoppingCartCss.B}>
                    <div className={ShoppingCartCss.b1}>
                            </div>
                        <div className={ShoppingCartCss.b}>
                            
                            <p>商品名称：礼服</p>
                            <p>价格：100/天</p>
                            <p>数量：<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></p>
                            <p>天数：<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></p>
                            </div>
                            <div className={ShoppingCartCss.b2} >
                                <Checkbox onChange={onChange}>选择</Checkbox>
                            
                        </div>
                    </div>

                    <div><Divider dashed /></div>

                    <div className={ShoppingCartCss.C}>
                    <div className={ShoppingCartCss.c1}>
                            </div>
                        <div className={ShoppingCartCss.c}>
                            
                            <p>商品名称：鞋子</p>
                            <p>价格：100/天</p>
                            <p>数量：<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></p>
                            <p>天数：<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></p></div>
                            <div className={ShoppingCartCss.c2} >
                                <Checkbox onChange={onChange}>选择</Checkbox>
                            
                        </div>
                    </div>

                    <div><Divider dashed /></div>

                    <div className={ShoppingCartCss.D}>
                    <div className={ShoppingCartCss.d1}>
                            </div>
                        <div className={ShoppingCartCss.d}>
                           
                            <p>商品名称：书</p>
                            <p>价格：1元/天</p>
                            <p>数量：<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></p>
                            <p>天数：<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></p></div>
                            <div className={ShoppingCartCss.d2} > 
                                <Checkbox onChange={onChange}>选择</Checkbox>
                            
                        </div>
                    </div>
                    <div><Divider dashed /></div>

                    <div className={ShoppingCartCss.E}>
                    <div className={ShoppingCartCss.e1}>
                            </div>
                        <div className={ShoppingCartCss.e}>
                            
                            <p>商品名称：日常衣服</p>
                            <p>价格：50/天</p>
                            <p>数量：<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></p>
                            <p>天数：<InputNumber min={1} max={10} defaultValue={3} onChange={onChange} /></p></div>
                            <div className={ShoppingCartCss.e2} >
                                <Checkbox onChange={onChange}>选择</Checkbox>
                            
                        </div>
                    </div>
                    <div>  <Divider></Divider></div>

                    
                        
                    <div>   
                     <Link to="/pay"><Button left="1005px">确认购买</Button></Link> 
                    </div> 
                     
                    
                </div>

                <div>
                <div className={ShoppingCartCss.footer}>
                    <div className={ShoppingCartCss.copyright}>
                        <p className={ShoppingCartCss.p}>联系邮箱：1538558990@qq.com</p>
                        <div className={ShoppingCartCss.img}>
                            <i className={ShoppingCartCss.icon}></i><span>联系地址：西南交通大学希望学院</span>
                        </div>

                        
                    </div>
                </div>
                </div>

                
            </div>
        )
    }
}