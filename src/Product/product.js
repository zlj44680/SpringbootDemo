import React from 'react';
var ProductCss=require('./product.css');



export default class Product extends React.Component{
    render(){
       console.log(this.props.Product)
        return(
            <div  className={ProductCss.p}>
                <label>{ this.props.Product.name}</label>
                <label>{ this.props.Product.price}</label>
                <label>{ this.props.Product.describe}</label>
                <label>{this.props.Product.picture}</label>
            </div>
        )
    }
}