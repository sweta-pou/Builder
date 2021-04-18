import React, {Component} from 'react';
import Button from '../../UI/Button/Button';
import classes from './contactData.module.css';
import axios from '../../../axios-orders';
import Spinner from '../../UI/Spinner/Spinner';
import Input from '../../UI/input/input';
import {connect} from 'react-redux';
class ContactData extends Component{
    state={
        orderform:{
            name:{
                elementtype:"input",
                elementConfig:{
                    type:"text",
                    placeholder:"your name"
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            address:{
                elementtype:"input",
                elementConfig:{
                    type:"text",
                    placeholder:" address"
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            contact:{
                elementtype:"input",
                elementConfig:{
                    type:"number",
                    placeholder:"contact"
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            email:{
                elementtype:"input",
                elementConfig:{
                    type:"email",
                    placeholder:"email"
                },
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false
            },
            deliveryMethod: {
                elementtype: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'}
                    ]
                },
                validation:{
                    required:false
                },
                value: '',
                valid:true
            }
            
        },
        loading:false,
        formIsValid:false
    }
    checkValidity(value,rule){
        let isValid=true;
        if(rule.required){
            isValid = value.trim() !== ''&& isValid;
        }
        return isValid;
    }
    orderHandler=(event)=>{
        event.preventDefault();
        this.setState({loading:true});
        let fromdata ={};
        for(let key in this.state.orderform){
            fromdata[key]=this.state.orderform[key].value;
        }
        let orders ={
            ingredient:this.props.ingredients,
            totalPrice:this.props.total.toFixed(2),
            orderData:fromdata
        }
        axios.post( '/orders.json', orders )
            .then( response => {
                this.setState( { loading: false, purchasing: false } );
                this.props.history.push('/');
            } )
            .catch( error => {
                this.setState( { loading: false, purchasing: false } );
            } );
    }
    onchageHandler=(event,id)=>{
        
        let updatedForm =
            {...this.state.orderform}
        
        let updatedElement=
            {...this.state.orderform[id]}
        
        updatedElement.value=event.target.value;
        updatedElement.valid = this.checkValidity(updatedElement.value,updatedElement.validation);
        updatedElement.touched =true;
        updatedForm[id]=updatedElement;
        let formIsValid = true
        for(let key in updatedForm){
           formIsValid = updatedForm[key].valid && formIsValid;
        }
        console.log(formIsValid);
        this.setState({orderform:updatedForm,formIsValid:formIsValid});
    }
    render(){
    let formData =[];
     for(let key in this.state.orderform){
         formData.push({
             id:key,
             config:this.state.orderform[key]
         })
     }
        
        let form =(
                <form onSubmit={this.orderHandler}>
                    {formData.map(form=>(
                    <Input elementtype={form.config.elementtype} 
                     elementconfig={form.config.elementConfig} value={form.configvalue} 
                     key={form.id}
                     invalid={!form.config.valid}
                     shouldValidate ={form.config.validation}
                     touched={form.config.touched}
                     changed={(event)=>this.onchageHandler(event,form.id)}/>

                    ))}
                    
                   <Button  btnType="Success" disabled={!this.state.formIsValid} >ORDER</Button>
                   

                </form>
        )
        if(this.state.loading){
            form =<Spinner />
        }
        return(
            <div className={classes.ContactData}>
                <h4>Your Details!!</h4>
                {form}
            </div>
        )
    }

}
const MapStateToProps=(state)=>{
    return{
        ingredients:state.ingredients,
        total:state.total
    }
}
export default connect(MapStateToProps)(ContactData);