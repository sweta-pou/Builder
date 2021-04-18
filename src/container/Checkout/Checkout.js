import React,{Component} from 'react';
import CheckoutSummary from '../../components/order/checkout/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../../components/order/contactdata/ContactData';
import {connect} from 'react-redux';
class Checkout extends Component{
    checkoutCancelHandler=()=>{
        this.props.history.goBack();
    }
    checkoutContinueHandler=()=>{
        this.props.history.replace('/checkout/info');
    }
    render(){
        console.log("checkout renderrrred");
        return(
            <div>
                <CheckoutSummary ingredients={this.props.ingredients} checkoutCancled={this.checkoutCancelHandler} 
                checkoutContinue={this.checkoutContinueHandler}/>
               <Route path="/checkout/info" component={ContactData}/>
            </div>
        );
    }
}
const MapStateToProps=(state)=>{
    return{
        ingredients:state.ingredients,
        total:state.total
    }
}

export default connect(MapStateToProps)(Checkout);