import React,{Component} from 'react';
import Order from '../../components/order/order';
import axios from '../../axios-orders';
import WithErrorHandler from '../../hoc/withErrorHandler/WithErrorHandler';
class Orders extends Component{
  state={
    orders:[],
    loading:true
  }
  componentDidMount(){
    axios.get('/orders.json').then(res=>{
      
      console.log(res.data);
      const fetchedData=[];
      for(let key in res.data)
      {
        fetchedData.push({...res.data[key],id:key});
      }
      console.log(fetchedData);
      this.setState({loading:false,orders:fetchedData});
      console.log(this.state.orders);
    }).catch(err=>{
      console.log(err);
      this.setState({loading:false});
    })
  }
  render(){
      return(
      <div>
{this.state.orders.map((order=>(

  <Order key={order.id} order={order} ingredient={order.ingredient}/>)
   ))}
      </div>
      )
  }
}

export default WithErrorHandler(Orders,axios);