import React, {Component} from 'react';

import dogo from '../../Asset/Image/dog-picture.jpg';





class Backdrop extends Component {
  render() {
    return (
      <div >
      <img  src = {dogo} 
      style={{ 
  
      opacity: "0.7",
      marginLeft:"13%",
      width:"67%",
      maxHeight: "450px",
      borderStyle: "double",
      backgroundColor: "white",
      borderWidth:  "35px 80px",
      
        }}
        alt="image"
        />
    </div>
    );
  }
}




export default Backdrop;