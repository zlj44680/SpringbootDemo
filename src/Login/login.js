import React from 'react';
import {Button,message} from 'antd'; 
import { Input } from 'antd';
import {Link} from "react-router-dom";
var LoginCss=require('./login.css');




export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
      }
    
      
        
          changeValue=(e)=>{
            this.setState({
              [e.target.name]:e.target.value
            }
            )
    
          }
          upload = ()=>{
            
            var data ={
              "username":this.state.username,
              "password":this.state.password,
              
    
            }
            fetch("/user/login",{
              mothod:"post",
              headers:{
                "Content-Type" :"application/json"
    
    
              },
              data: JSON.stringify(data)
              
            }).then(response=>response.json())
            .then(result=>{
              if(result.state==2){
                message.info("登录成功")
              }else if(result.state===1){
                message.info("登录失败")
    
              }
            })    
          
          }
        
    render(){
        
        return(
            <div className={LoginCss.background} >
                <div className={LoginCss.login}>
                   <span className={LoginCss.a1}>登录页面</span> 
                </div>
                <div className={LoginCss.username}>
                    <span className={LoginCss.text}>用户名: </span>
                    <div className={LoginCss.u1}><Input placeholder="请输入用户名"  size="large"value={this.state.username} onChange={e=>this.changeValue(e)}/></div>

                </div>
                <div className={LoginCss.password}>
                <span className={LoginCss.text}>密码 : </span>
                    <div className={LoginCss.u2}>  <Input.Password placeholder="请输入密码"  size="large"value={this.state.password} onChange={e=>this.changeValue(e)}/></div>

                </div>
                
                <div className={LoginCss.Button}> 
                <Link to="/homepage">
                <Button shape="round" size="large" href to="/"  onClick={this.upload()}>登录</Button></Link>
                
               <Link to="/register">
                <Button shape="round" size="large"  href to="/register">注册</Button></Link>

                


                </div>
                <div className={LoginCss.Button1}>
                <Link to="/homepage">
                <Button shape="round" size="large"  href to="/homepage">首页</Button></Link>
                </div>


                
                
            </div>
        )
    }
}