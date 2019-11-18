import React from 'react';
import {Button} from 'antd'; 
import {Link} from "react-router-dom";

var ClassifyCss =require('./classify.css');



export default class ClassifyPage extends React.Component{
    render(){
        return(
            <div>
              <div className={ClassifyCss.title}>商品分类</div>
              <div className={ClassifyCss.b1}>
             <Link to="/commdity2"><Button shape="round" size="large" >演出礼服</Button></Link> 
                  


              </div>
              <div className={ClassifyCss.b2}>
             <Link to="/commdity1"><Button shape="round" size="large" >鞋子</Button></Link> 
                  


              </div>
              <div className={ClassifyCss.b3}>
             <Link to="/commdity3"><Button shape="round" size="large" >书刊</Button></Link> 
                  


              </div>
              <div className={ClassifyCss.b4}>
             <Link to="/commdity1"><Button shape="round" size="large" >日常服饰</Button></Link> 
                  


              </div>
              <div className={ClassifyCss.b5}>
             <Link to="/commdity1"><Button shape="round" size="large" >正装</Button></Link> 
                  


              </div>
              <div className={ClassifyCss.b6}>
             <Link to="/commdity1"><Button shape="round" size="large" >CD</Button></Link> 
                  


              </div>
              <div className={ClassifyCss.b7}>
             <Link to="/commdity1"><Button shape="round" size="large" >电脑</Button></Link> 
                  


              </div>
              <div className={ClassifyCss.b8}>
             <Link to="/commdity1"><Button shape="round" size="large" >手机</Button></Link> 
                  


              </div>
              <div className={ClassifyCss.b9}>
             <Link to="/commdity1"><Button shape="round" size="large" >摄影设备</Button></Link> 
                  


              </div>
              <div className={ClassifyCss.d1}>推荐商品</div>
              <div>
              <div className={ClassifyCss.c1}>
                 <Link to="/commdity1"> <div className={ClassifyCss.p1}></div></Link>
                  <div className={ClassifyCss.t1}>Nike Air More UpeteMpo Supreme 皮蓬 大AIR 红色仅有43码 </div>

              </div>
              <div className={ClassifyCss.c2}>
                 <Link to="/commdity2"> <div className={ClassifyCss.p2}></div></Link>
                  <div className={ClassifyCss.t2}>【小Q家】 黑色复古显瘦年会聚会晚礼服公主蓬蓬裙宴会演出小礼服 </div>

              </div>
              <div className={ClassifyCss.c3}>
                 <Link to="/commdity3"> <div className={ClassifyCss.p3}></div></Link>
                  <div className={ClassifyCss.t3}> 时间的礼物 弗雷德里克巴克曼</div>

              </div>

              </div>
              <div className={ClassifyCss.footer}>
        <div className={ClassifyCss.copyright}>
          <p className={ClassifyCss.p}>联系邮箱：1538558990@qq.com</p>
          <div className={ClassifyCss.img}>
              <i className={ClassifyCss.icon}></i><span>联系地址：西南交通大学希望学院</span>
          </div>
          
          <div className={ClassifyCss.img}>
              <i className={ClassifyCss.icon1}></i><span>联系电话：18990671773</span>
          </div>
            
        <div className={ClassifyCss.img}>
            <i className={ClassifyCss.icon2}></i><span>联系电话：18990671773</span>
        </div>
        </div>
        </div>

             

              

            </div>
        )
    }

}