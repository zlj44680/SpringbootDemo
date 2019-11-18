import React from 'react';

import Product from '../Product/product';
import Item from 'antd/lib/list/Item';
var BuyCss=require('./buy.css');



export default class BuyPage extends React.Component{

    getProductList(){
        let dataList=[{
            id:1,
            name:"鞋子",
            price:"6897.00",
            describe:"",


        },
        {
            id:2,
            name:"书",
            price:"18.00",
            describe:"",


        },
        {
            id:3,
            name:"裙子",
            price:"898.00",
            describe:"",
            picture:"鞋子.JPG"


        },
    ]






        return dataList;
    }
    render(){
        let dataList = this.getProductList();
        
        return(
            
            dataList.map((item,i)=>(
                <Product Product={item}></Product>
            ))
           
           
        )
        
    }
}