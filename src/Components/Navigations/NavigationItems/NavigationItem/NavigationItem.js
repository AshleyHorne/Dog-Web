import React from 'react';

import classes from './NavigationItem.css';


const navigationItem = ( props ) => (
    <li className={classes.NavigationItem}>
        <a 
            href={props.link} 
            className={props.active ? classes.active : null}
        >
            {props.children}
        </a>
        <div style={{position:"absolute", justifyContent: "center", 
        display: "flex", 
        backgroundImage: 'http://artpointgallery5.com/images/dog-paw-print-clipart-5.png'}}/>
    </li>
);

export default navigationItem;