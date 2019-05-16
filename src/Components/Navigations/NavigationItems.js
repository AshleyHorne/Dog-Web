import React from 'react';
import classes from './NavigationItem.css';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () =>(
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active> Find A Friend</NavigationItem>
        <NavigationItem link="/">Checkout</NavigationItem>


    </ul>
);

export default navigationItems;