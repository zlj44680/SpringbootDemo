import React from 'react';
import { Modal, Button } from 'antd';
import { Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader } from 'antd';
import { Upload, Icon, message } from 'antd';

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



function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

export default class Putaway extends React.Component{
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
      
        }
        fetch("/user/goods",{
          mothod:"post",
          headers:{
            "Content-Type" :"application/json"


          },
          data: JSON.stringify(data)
          
        }).then(response=>response.json())
        .then(result=>{
          if(result.state==2){
            message.info("已存在")
          }else if(result.state===1){
            message.info("上架成功")

          }
        })    
      
      }
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
      state = {
        loading: false,
      };
    
      handleChange = info => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
            this.setState({
              imageUrl,
              loading: false,
            }),
          );
        }
      };
    
    
    
    
    render(){
        const { visible, confirmLoading, ModalText } = this.state;
        const uploadButton = (
          <div>
            <Icon type={this.state.loading ? 'loading' : 'plus'} />
            <div className="ant-upload-text">Upload</div>
          </div>
        );
        const { imageUrl } = this.state;
        return(
            <div>
                <div className={PutawayCss.p}>
                   <div className={PutawayCss.a1} name="username" value={this.state.username} onChange={e=>this.changeValue(e)}> 上传商品图片</div>
                   <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload>
                   

                </div>
                <div className={PutawayCss.n}>
                <InputGroup compact name="username" value={this.state.username} onChange={e=>this.changeValue(e)}>
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
      name="username" value={this.state.username} onChange={e=>this.changeValue(e)}
    />


                     </div>
                     <div className={PutawayCss.c}>
        <Button type="primary" onClick={this.upload()} size="large">
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