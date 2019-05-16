import React from 'react';

import profile from '../../Asset/Image/dog-picture.jpg';
import classes from './Logo.css';


const Logo = (props) => (
    <div className={classes.Logo}>
        <img src = {profile} alt="Icon"/>
    </div>

);

export default Logo;