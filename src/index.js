import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import HomePage from './HomePage/homePage';
import {BrowserRouter,Route} from 'react-router-dom';
import LoginPage from './Login/login';
import RegisterPage from './Register/register';
import RegisterPage2 from './Register/registerpage';
import CommdityPage1 from './Commdity/commdity1';
import PayPage from './Pay/pay';
import CommdityPage2 from './Commdity/commdity2';
import CommdityPage3 from './Commdity/commdity3';
import OrderPage from './Order/order';
import BuyPage from './Buy/buy';
import ClassifyPage from './Classify/classify';
import SiderDom from './Commdity/commdity4';

import EditableTable from './Admin/admin';
import DefaultFrist from './Frist/frist';
import DefaultShoppingCart from './Shoppingcart/shoppingcart';
import Login1 from './Login1/login1';




class IndexPage  extends React.Component{
    render(){


        return(
            <div>
             <BrowserRouter basename='react-example'>
             
             
             <Route path="/homepage"    component={HomePage}></Route>
             <Route path="/login" component={LoginPage}></Route>
             <Route path="/register" component={RegisterPage}></Route>
             <Route path="/registerpage" component={RegisterPage2}></Route>
             <Route path="/commdity1" component={CommdityPage1}></Route>
             <Route path="/pay" component={PayPage}></Route>
             <Route path="/commdity2" component={CommdityPage2}></Route>
             <Route path="/commdity3" component={CommdityPage3}></Route>
             <Route path="/order" component={OrderPage}></Route>
             <Route path="/buy" component={BuyPage}></Route>
             <Route path="/classify" component={ClassifyPage}></Route>
             <Route path="/commdity4" component={SiderDom}></Route>
             <Route path="/admin" component={EditableTable}></Route>
             <Route path="/frist" component={DefaultFrist}></Route>
             <Route path="/shoppingcart" component={DefaultShoppingCart}></Route>
             <Route path="/login1" component={Login1}></Route>
             
             
             
             
             
             
             </BrowserRouter>                
            </div>
        )
    } 
}



//直接在HTML上渲染
ReactDOM.render(<IndexPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
