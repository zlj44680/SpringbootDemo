import React from 'react';
import {Button} from 'antd'; 
import { Input } from 'antd';
import {Link} from "react-router-dom";
var LoginCss=require('./login.css');




export default class LoginPage extends React.Component{
    render(){
        
        return(
            <div className={LoginCss.background} >
                <div className={LoginCss.login}>
                   <span className={LoginCss.a1}>登录页面</span> 
                </div>
                <div className={LoginCss.username}>
                    <span className={LoginCss.text}>用户名: </span>
                    <div className={LoginCss.u1}><Input placeholder="请输入用户名"  size="large"/></div>

                </div>
                <div className={LoginCss.password}>
                <span className={LoginCss.text}>密码 : </span>
                    <div className={LoginCss.u2}>  <Input.Password placeholder="请输入密码"  size="large"/></div>

                </div>
                
                <div className={LoginCss.Button}> 
                <Link to="/homepage">
                <Button shape="round" size="large" href to="/">登录</Button></Link>
                
               <Link to="/register">
                <Button shape="round" size="large"  href to="/register">注册</Button></Link>

                </div>


                
                
            </div>
        )
    }
}