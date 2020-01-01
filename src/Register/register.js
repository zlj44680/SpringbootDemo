import React from 'react';
import {Button, message} from 'antd'; 
import {Link} from "react-router-dom";
import { Modal} from 'antd';
var RegisterCss=require('./register.css');



export default class RegisterPage extends React.Component{
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
          "password2":this.state.password2,

        }
        fetch("/user/register",{
          mothod:"post",
          headers:{
            "Content-Type" :"application/json"


          },
          data: JSON.stringify(data)
          
        }).then(response=>response.json())
        .then(result=>{
          if(result.state==2){
            message.info("用户已存在")
          }else if(result.state===1){
            message.info("注册成功")

          }
        })    
      
      }
    
    
      
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
    
    
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      };
    render(){
        const { visible, confirmLoading, ModalText } = this.state;
        return(
            <div className={RegisterCss.background}>
                <div className={RegisterCss.Register}>
                    <span className={RegisterCss.a1}>注册</span>
                    

                </div>
                <div className={RegisterCss.username}>
                    <span className={RegisterCss.b1}>用户名：</span>
                    <input type="text" className={RegisterCss.b2} placeholder="请输入用户名" id="usr" name="username" value={this.state.username} onChange={e=>this.changeValue(e)}></input>
                </div>
                <div className={RegisterCss.password}>
                    <span className={RegisterCss.c1}>密码 : </span>
                    <input type="text" className={RegisterCss.c2} placeholder="请输入密码" id="usr" name="password"value={this.state.password} onChange={e=>this.changeValue(e)}></input>


                </div>
                <div className={RegisterCss.password2}>
                    <span className={RegisterCss.d1}>确认密码:</span>
                    <input type="text" className={RegisterCss.d2} placeholder="请再次输入密码" id="usr" name="password2"value={this.state.password2} onChange={e=>this.changeValue(e)}></input>


                </div>
                <div className={RegisterCss.Button}> 
                <Button type="primary" onClick={this.upload()}  shape="round" size="large">
         注册
        </Button>
        <Link to="/homepage"><Modal
          title=" 闲置租赁平台 "
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal></Link>

            

               <Link to="/homepage"> <Button shape="round" size="large">返回主页</Button></Link>
                

                </div>


                
            </div>
        )
    }
}
