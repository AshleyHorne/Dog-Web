import React, {Component} from 'react';

import classes from '../Logo/Logo.css';
import profile from '../../Asset/Image/dogo-logo.png';



class DogLogo extends Component {
    render() {
      return (
       <div >
         <img  src = {profile} 
         style={{ 
           borderRadius:"50%", 
           width: "100px", 
           minHeight: "50px",
           marginLeft: "585px",
           borderColor: "Black",
           borderStyle: "double",
            borderWidth:  "10px"

           }}/>
       </div>
      );
    }
  }

  


export default DogLogo;