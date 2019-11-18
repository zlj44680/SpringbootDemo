import React from 'react';
import {Button} from 'antd';
import {Link} from "react-router-dom";

var OrderCss=require('./order.css');





export default class OrderPage extends React.Component{
    
    
    
     render(
         
         
     ){
        
         
         return(
             <div>
                 <div className={OrderCss.title}>我的订单</div>
                 <div className={OrderCss.a1}>_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</div>
                 <div className={OrderCss.b}>
                 <Link to="/commdity2"><div className={OrderCss.p1} ></div></Link>
                 <div className={OrderCss.b1}>商品：小礼服</div>
                 <div className={OrderCss.b2}>状态：待取货</div>
                 </div>
                  <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                 <div className={OrderCss.a1}>_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</div>
                 <div className={OrderCss.b}>
                 <Link to="/commdity1"><div className={OrderCss.p2} ></div></Link>
                 <div className={OrderCss.b1}>商品:鞋子</div>
                 <div className={OrderCss.b2}>状态：待取货</div>
                 </div>
                 <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                 <div className={OrderCss.a1}>_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</div>
                 <div className={OrderCss.b}>
                 <Link to="/commdity3"><div className={OrderCss.p3} ></div></Link>
                 <div className={OrderCss.b1}>商品:书</div>
                 <div className={OrderCss.b2}>状态：待取货</div>
                 </div>
                 <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>

                 <div className={OrderCss.a1}>_________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________</div>
                 
                 <div className={OrderCss.b}>
              <Link to='./homepage'>  <Button shape="round" size="large" href to="/">返回首页</Button> </Link>
                </div>
                <div className={OrderCss.footer}>
        <div className={OrderCss.copyright}>
          <p className={OrderCss.p}>联系邮箱：1538558990@qq.com</p>
          <div className={OrderCss.img}>
              <i className={OrderCss.icon}></i><span>联系地址：西南交通大学希望学院</span>
          </div>
          
          <div className={OrderCss.img}>
              <i className={OrderCss.icon1}></i><span>联系电话：18990671773</span>
          </div>
            
        <div className={OrderCss.img}>
            <i className={OrderCss.icon2}></i><span>联系电话：18990671773</span>
        </div>
        </div>
        </div>

                 







             </div>
             
         )
     }
}