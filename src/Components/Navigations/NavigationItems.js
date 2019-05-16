import React from 'react';
import classes from './NavigationItem';
import NavigationItem from './NavigationItem/NavigationItem';


const navigationItems = () =>(
    <ul className ={classes.NavigationItems}>
    <NavigationItem link="/" active> Find A Friend</NavigationItem>
    <NavigationItem link="/"> Post A Pet</NavigationItem>
    <NavigationItem link="/"> Dog Community</NavigationItem>
    <NavigationItem link="/"> Contact Us </NavigationItem>
        <li><a href="/"> A Link></a></li>
    </ul>
);

export default navigationItems;