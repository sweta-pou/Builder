import React ,{Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxilairy';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
// import { object } from 'prop-types';
import axios from '../../axios-orders';
import Modal from'../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/reducers/actions';


class BurgerBuilder extends Component{
    state={
        purchasing:false,
        loading:false
    }
   
    purchaseset(ingredient){
        
     const Sum = Object.keys(ingredient).map(ig=>{
            return ingredient[ig];
        }).reduce((Sum,curr)=>{
            return Sum+curr
        },0);
         return Sum>0;
        }
    // componentDidMount(){
    //     axios.get("/ingredients.json").then(Response=>{
            
    //         this.setState({ingredients:Response.data});
    //     }).catch(error=>{console.log(error);})
        
    //     console.log("BURGER BUILDER DID MOUNT");
    // }
    
    purchaseHandler=()=>{
        this.setState({purchasing:true});
    }
    closePurchase=()=>{
        this.setState({purchasing:false});
    }
    countinuePurchase=()=>{
        this.props.history.push('/checkout');
    }
        
    
render(){
    const Disable ={
        ...this.props.ingredients
    }
    for(let key in Disable){
        Disable[key] = Disable[key] <= 0;
    }
    let Ordersummary= <Spinner/>
    if(this.props.ingredients)
    {
       Ordersummary= <OrderSummary ingredients={this.props.ingredients} 
                       close={this.closePurchase} 
                       continue={this.countinuePurchase} 
                       total={this.props.total} />
    }
    if(this.state.loading){
        Ordersummary =<Spinner />
    }
    let BurgerSumary= <Spinner/>
    if(this.props.ingredients){
        BurgerSumary=(<Aux>
            <Burger ingredients={this.props.ingredients} />
           <BuildControls ingredientAdded={this.props.ingredientAddedHandler} ingredientDelete ={this.props.ingredientDeleteHandler}
            Disabled={Disable} price={this.props.total} purchasable={this.purchaseset(this.props.ingredients)}
                purchasing={this.purchaseHandler}/>
              </Aux>)
    }
    console.log("BURGER");
    
return(
    <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.closePurchase}>
        {Ordersummary}
        </Modal>
         {BurgerSumary}
    </Aux>
)}}
const MapStateToProps=(state)=>{
    return{
        ingredients:state.ingredients,
        total:state.total
    }}
const MapDispatcherToProps =(dispatch)=>{
    return{
        ingredientAddedHandler:(name)=>dispatch({type:actionTypes.ADD_INGREDIENTS,name:name}),
        ingredientDeleteHandler:(name)=>dispatch({type:actionTypes.REMOVE_INGREDIENTS,name:name})
    }
}
export default connect(MapStateToProps,MapDispatcherToProps)(WithErrorHandler(BurgerBuilder,axios));