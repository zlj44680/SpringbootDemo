import React from 'react';
import './frist.css';
import {Link} from 'react-router-dom';
import {Icon} from'antd';
var FristCss = require('./frist.css')

export default class DefaultFrist extends React.Component {

    render() {

        return (
        <div className={FristCss.div}>
        <div className={FristCss.Img}>
          <div className={FristCss.text}>欢迎光临</div>
          <Link to ='/homepage'><div className={FristCss.d}> <Icon type="down"   /></div></Link>
        </div>
        </div>
        )
    }
}