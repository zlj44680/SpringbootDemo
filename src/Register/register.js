import React from 'react';
import {Button} from 'antd'; 
import {Link} from "react-router-dom";
import { Modal} from 'antd';
var RegisterCss=require('./register.css');



export default class RegisterPage extends React.Component{
    state = {
        ModalText: '恭喜您注册成功！',
        visible: false,
        confirmLoading: false,
      };
    
      showModal = () => {
        this.setState({
          visible: true,
        });
      };
    
      handleOk = () => {
        this.setState({
          ModalText: '恭喜您注册成功！',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
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
                    <input type="text" className={RegisterCss.b2} placeholder="请输入用户名" id="usr" name="username"></input>
                </div>
                <div className={RegisterCss.password}>
                    <span className={RegisterCss.c1}>密码 : </span>
                    <input type="text" className={RegisterCss.c2} placeholder="请输入密码" id="usr" name="password"></input>


                </div>
                <div className={RegisterCss.password2}>
                    <span className={RegisterCss.d1}>确认密码:</span>
                    <input type="text" className={RegisterCss.d2} placeholder="请再次输入密码" id="usr" name="password"></input>


                </div>
                <div className={RegisterCss.Button}> 
                <Button type="primary" onClick={this.showModal}  shape="round" size="large">
         注册
        </Button>
        <Link to="/homepage"><Modal
          title="闲置租赁平台"
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
