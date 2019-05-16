import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
       <nav>
            <NavigationItems/>
        </nav>
        <Logo/>
    </header>
);

export default toolbar;