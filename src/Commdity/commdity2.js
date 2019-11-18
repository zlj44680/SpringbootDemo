import React from 'react';
import {Button} from 'antd'; 
import {Link} from "react-router-dom";
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { Divider } from 'antd'
var CommdityCss2 =require('./commdity2.css');


export default class CommdityPage2 extends React.Component{
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
      };
    
      like = () => {
        this.setState({
          likes: 1,
          dislikes: 0,
          action: 'liked',
        });
      };
    
      dislike = () => {
        this.setState({
          likes: 0,
          dislikes: 1,
          action: 'disliked',
        });
      };
    render(){
        const { likes, dislikes, action } = this.state;

    const actions = [
      <span>
        <Tooltip title="Like">
          <Icon
            type="like"
            theme={action === 'liked' ? 'filled' : 'outlined'}
            onClick={this.like}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
      </span>,
      <span>
        <Tooltip title="Dislike">
          <Icon
            type="dislike"
            theme={action === 'disliked' ? 'filled' : 'outlined'}
            onClick={this.dislike}
          />
        </Tooltip>
        <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
      </span>,
      <span>Reply to</span>,
    ];
        return(
            <div>
                <div>
                    <p className={CommdityCss2.text}>商品</p>
                </div>
                <div className={CommdityCss2.p1} ></div>
                <div className={CommdityCss2.a1}>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>  <br></br><br></br><br></br><br></br>  <br></br><br></br><br></br>    
                    <p className={CommdityCss2.a2}>
                        【小Q家】 黑色复古显瘦年会聚会晚礼服公主蓬蓬裙宴会演出小礼服
                    </p>
                    <p className={CommdityCss2.a2}>
                      100元/天
                    </p>
                </div>
                <div className={CommdityCss2.b}>
                <Link to="/pay"><Button shape="round" size="large" href to="/">立即购买</Button></Link>
                </div>
                <div> <Divider orientation="left">评论</Divider></div>

<Comment
actions={actions}
author={<a>Han Solo</a>}
avatar={
  <Avatar
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    alt="Han Solo"
  />
}
content={
  <p>
    We supply a series of design principles, practical patterns and high quality design
    resources (Sketch and Axure), to help people create their product prototypes beautifully
    and efficiently.
  </p>
}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
    <span>{moment().fromNow()}</span>
  </Tooltip>
}
/>
<Comment
actions={actions}
author={<a>Han Solo</a>}
avatar={
  <Avatar
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    alt="Han Solo"
  />
}
content={
  <p>
    We supply a series of design principles, practical patterns and high quality design
    resources (Sketch and Axure), to help people create their product prototypes beautifully
    and efficiently.
  </p>
}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
    <span>{moment().fromNow()}</span>
  </Tooltip>
}
/>
<Comment
actions={actions}
author={<a>Han Solo</a>}
avatar={
  <Avatar
    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    alt="Han Solo"
  />
}
content={
  <p>
    We supply a series of design principles, practical patterns and high quality design
    resources (Sketch and Axure), to help people create their product prototypes beautifully
    and efficiently.
  </p>
}
datetime={
  <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
    <span>{moment().fromNow()}</span>
  </Tooltip>
}
/>
                <div className={CommdityCss2.footer}>
        <div className={CommdityCss2.copyright}>
          <p className={CommdityCss2.p}>联系邮箱：1538558990@qq.com</p>
          <div className={CommdityCss2.img}>
              <i className={CommdityCss2.icon}></i><span>联系地址：西南交通大学希望学院</span>
          </div>
          
          <div className={CommdityCss2.img}>
              <i className={CommdityCss2.icon1}></i><span>联系电话：18990671773</span>
          </div>
            
        <div className={CommdityCss2.img}>
            <i className={CommdityCss2.icon2}></i><span>联系电话：18990671773</span>
        </div>
        </div>
        </div>
               

            </div>  
        )
    }
}