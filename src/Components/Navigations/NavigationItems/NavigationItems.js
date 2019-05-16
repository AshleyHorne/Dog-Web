import React from 'react';

import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';



const navigationItems = () =>(
    <ul className ={classes.NavigationItems}>
    <NavigationItem link="/" active> Find A Friend</NavigationItem>
    <NavigationItem link="/"> Post A Pet</NavigationItem>
    <NavigationItem link="/"> Dog Community</NavigationItem>
    <NavigationItem link="/"> Contact Us </NavigationItem>
    </ul>
);

export default navigationItems;