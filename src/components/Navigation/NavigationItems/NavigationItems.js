import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';
import classes from './navitems.module.css';
const navitems =()=>(
<ul className={classes.NavigationItems}>
<NavigationItem link="/" exact active>Burger Builder</NavigationItem>
<NavigationItem link="/orders">Orders</NavigationItem>

</ul>
)

export default navitems;