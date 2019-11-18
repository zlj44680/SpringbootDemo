import React from 'react';
import {Button} from 'antd'; 
import { Input } from 'antd';
import {Link} from "react-router-dom";
var LoginCss1=require('./login1.css');




export default class Login1 extends React.Component{
    render(){
        
        return(
            <div className={LoginCss1.background} >
                <div className={LoginCss1.login}>
                   <span className={LoginCss1.a1}>登录页面</span> 
                </div>
                <div className={LoginCss1.username}>
                    <span className={LoginCss1.text}>用户名: </span>
                    <div className={LoginCss1.u1}><Input placeholder="请输入用户名"  size="large"/></div>

                </div>
                <div className={LoginCss1.password}>
                <span className={LoginCss1.text}>密码 : </span>
                    <div className={LoginCss1.u2}>  <Input.Password placeholder="请输入密码"  size="large"/></div>

                </div>
                
                <div className={LoginCss1.Button}> 
                <Link to="/admin">
                <Button shape="round" size="large" href to="/">登录</Button></Link>
                
               

                </div>


                
                
            </div>
        )
    }
}