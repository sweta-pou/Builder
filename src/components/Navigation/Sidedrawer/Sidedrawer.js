import React from 'react';
import Logo from'../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from'./sidedrawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxilairy';
const sidedrawer=(props)=>{
    let attachedClasses=[classes.Sidedrawer,classes.Close];
    if (props.show) {
        attachedClasses = [classes.Sidedrawer,classes.Open];
        console.log("sideDrawer");
    }
    return(
        <Aux>
            <Backdrop show={props.show} clicked={props.closed}/>
       <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
        <Logo/>

        </div>
        <nav>
            <NavigationItems />
        </nav>
    </div>
        </Aux>
    
    )
}


export default sidedrawer;