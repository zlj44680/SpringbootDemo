import React from 'react';
import { Modal, Button } from 'antd';
import { Pagination } from 'antd'
var SolodoutCss=require('./solodout.css');



export default class Solodout extends React.Component{
    state = {
        ModalText: '确认下架',
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
          ModalText: '确认下架',
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
    ModalText: '确认下架',
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
      ModalText: '确认下架',
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
    console.log('确认下架');
    this.setState({
      visible: false,
    });
  };

    
    render(){
        const { visible, confirmLoading, ModalText } = this.state;
        return(
            <div>
                
                <div  className={SolodoutCss.a1}>
                    <div className={SolodoutCss.p1}></div>
                    <br></br>
                    <div className={SolodoutCss.t1}>
                        商品名： 礼服

                    </div>
                    <div className={SolodoutCss.d1}>
                    <Button type="primary" onClick={this.showModal} size="large">
         下架
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
                <div  className={SolodoutCss.a2}>
                    <div className={SolodoutCss.p2}></div>
                    <br></br>
                    <div className={SolodoutCss.t2}>
                        商品名： 鞋子

                    </div>
                    <div className={SolodoutCss.d2}>
                    <Button type="primary" onClick={this.showModal} size="large">
         下架
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
                <div  className={SolodoutCss.a3}>
                    <div className={SolodoutCss.p3}></div>
                    <br></br>
                    <div className={SolodoutCss.t3}>
                        商品名： 书

                    </div>
                    <div className={SolodoutCss.d3}>
                    <Button type="primary" onClick={this.showModal} size="large">
         下架
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
                <div className={SolodoutCss.e}><Pagination defaultCurrent={1} total={50} /></div>
            </div>
        )

    }

}