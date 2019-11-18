import React from 'react';
import {Button} from 'antd';
import {Link} from 'react-router-dom';
var PayCss=require('./pay.css');


export default class PayPage extends React.Component{
    render(){
        return(
            <div>
            <div>
                <p className={PayCss.text}>支付页面</p>

            </div>
             <div className={PayCss.p1} ></div>
             <div className={PayCss.a1}>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>  <br></br><br></br><br></br><br></br>  <br></br><br></br><br></br>     <br></br><br></br><br></br>   
                    <p className={PayCss.a2}>
                       付款成功后请联系WeChat：l1127762370 若遇问题也可联系。
                    </p>
                </div>
                <div className={PayCss.b}>
               <Link to ="/homepage"> <Button shape="round" size="large" href to="/">返回首页</Button></Link>
                </div>
                <div className={PayCss.footer}>
        <div className={PayCss.copyright}>
          <p className={PayCss.p}>联系邮箱：1538558990@qq.com</p>
          <div className={PayCss.img}>
              <i className={PayCss.icon}></i><span>联系地址：西南交通大学希望学院</span>
          </div>
          
          <div className={PayCss.img}>
              <i className={PayCss.icon1}></i><span>联系电话：18990671773</span>
          </div>
            
        <div className={PayCss.img}>
            <i className={PayCss.icon2}></i><span>联系电话：18990671773</span>
        </div>
        </div>
        </div>
               

             </div>

        )
    }

}