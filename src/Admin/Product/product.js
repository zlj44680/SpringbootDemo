import React from 'react';
import { Checkbox, Row, Col, Pagination } from 'antd';

var ProductCss=require('./product.css')


function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }
  
  



export default class Product extends React.Component{
    render(
        
    ){
        
        return(
            <div>
                  <div className={ProductCss.title}>商品详情</div>
                 <div className={ProductCss.a1}>_______________________________________________________________________________________________________________________________________________________________________________________________________</div>
                 <div className={ProductCss.b}>
                 <div className={ProductCss.d1}><Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      
      <Col span={8}>
        <Checkbox value="B">待取货</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">待归还</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">空闲</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">已超时</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
  </div>
            
                 <div className={ProductCss.p1} ></div>
                 <div className={ProductCss.b1}>商品：小礼服</div>
                 <div className={ProductCss.b2}></div>
                 </div>
                  <br></br><br></br><br></br><br></br><br></br><br></br>
                 <div className={ProductCss.a1}>_______________________________________________________________________________________________________________________________________________________________________________________________________</div>
                 <div className={ProductCss.b}>
                 <div className={ProductCss.d2}><Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      
      <Col span={8}>
        <Checkbox value="B">待取货</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">待归还</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">空闲</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">已超时</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
  </div>
                 <div className={ProductCss.p2} ></div>
                 <div className={ProductCss.b1}>商品:鞋子</div>
                 <div className={ProductCss.b2}></div>
                 </div>
                 <br></br><br></br><br></br><br></br><br></br><br></br>                 <div className={ProductCss.a1}>_______________________________________________________________________________________________________________________________________________________________________________________________________</div>
                 <div className={ProductCss.b}>
                 <div className={ProductCss.d3}><Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
    <Row>
      
      <Col span={8}>
        <Checkbox value="B">待取货</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="C">待归还</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="D">空闲</Checkbox>
      </Col>
      <Col span={8}>
        <Checkbox value="E">已超时</Checkbox>
      </Col>
    </Row>
  </Checkbox.Group>
  </div>
                 <div className={ProductCss.p3} ></div>
                 <div className={ProductCss.b1}>商品:书</div>
                 <div className={ProductCss.b2}></div>
                 </div>
                 <div className={ProductCss.e}> <Pagination defaultCurrent={1} total={50} /></div>
              </div>
        )

    }

}