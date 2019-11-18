import React from 'react';
import {Button} from 'antd';
var RegisterpageCss=require('./registerpage.css');



export default class RegisterPage2 extends React.Component{
    render(){
        return(
            <div>
                <div className={RegisterpageCss.registerpage}>
                    <span className={RegisterpageCss.register}>完成注册！</span>

                </div>
                <div className={RegisterpageCss.Button}>
                    <Button shape="round" size="large">返回主页</Button>

                </div>


            </div>
        )
    }
}