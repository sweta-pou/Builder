import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css'
const checkoutSumary =(props)=>(
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!!</h1>
      <div style={{width:'100%',margin:'auto'}}>
      <Burger ingredients={props.ingredients}/>
      <Button btnType="Danger" click={props.checkoutCancled}>CANCEL</Button>
      <Button btnType="Success" click={props.checkoutContinue}>CONTINUE</Button>
      </div>
      

    </div>
);
export default checkoutSumary;