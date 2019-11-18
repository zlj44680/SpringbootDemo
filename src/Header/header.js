import React from 'react';
// import './header.css'模块化后不需要，用var引入

var  HeaderCss = require('./header.css')

export default class DefaultHeader extends React.Component{
    render(){

        return(
        <div>
                 <div className={HeaderCss.header}>
                    这是一个标签
                </div>
                 <div>
                     又是一个标签
                    </div>
        </div>
        )
    }
}