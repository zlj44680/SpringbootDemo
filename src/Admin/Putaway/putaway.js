import React from 'react';
import { Modal, Button } from 'antd';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';

var PutawayCss=require('./putaway.css')

const { TextArea } = Input;


const InputGroup = Input.Group;
const { Option } = Select;
const options = [{
    value: '演出礼服',
    label: '演出礼服',
   

},
{
    value: '鞋子',
    label: '鞋子',

},{
    value: '书刊',
    label: '书刊',

},{
    value: '日常服饰',
    label: '日常服饰',
},{
    value: 'CD',
    label: 'CD',
},{
    value: '正装',
    label: '正装',

}

]




export default class Putaway extends React.Component{
    state = {
        dataSource: [],
      };
    
      handleChange = value => {
        this.setState({
          dataSource:
            !value || value.indexOf('@') >= 0
              ? []
              : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
        });
      };
      state = {
        ModalText: '确认上架',
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
          ModalText: 'The modal will be closed after two seconds',
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
            <div>
                <div className={PutawayCss.p}>
                   <div className={PutawayCss.a1}> 上传商品图片</div>
                   

                </div>
                <div className={PutawayCss.n}>
                <InputGroup compact>
          <Select defaultValue="分类">
            <Option value="礼服">礼服</Option>
            <Option value="书刊">书刊</Option>
            <Option value="鞋子">鞋子</Option>
            <Option value="日常服饰">日常服饰</Option>
            <Option value="CD">CD</Option>
          </Select>
          <Input style={{ width: '50%' }} defaultValue="请输入商品名" />
        </InputGroup>

                     </div>
                     <div className={PutawayCss.b}>
                     <div style={{ margin: '50px 0' }} />
    <TextArea
      placeholder="请输入商品介绍及其价格"
      autosize={{ minRows: 10, maxRows: 30 }}
    />


                     </div>
                     <div className={PutawayCss.c}>
        <Button type="primary" onClick={this.showModal} size="large">
         上架
        </Button>
        <Modal
          title="闲置租赁平台"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>{ModalText}</p>
        </Modal>
      </div>



                
            </div>
        )

    }

}