import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';


import SocialItems from '../../SocialLinks/SocialItems';



const toolbar = (props) => (
    <div>
    <header className={classes.Toolbar}>
       <nav>
           
            <NavigationItems/>
            <Logo/>
        </nav>
        
    </header>
    

   
    </div>
);

export default toolbar;