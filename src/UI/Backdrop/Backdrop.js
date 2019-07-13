import React, {Component} from 'react';

import dogo from '../../Asset/Image/dog-picture.jpg';





class Backdrop extends Component {
  render() {
    return (
      <div >
      <img  src = {dogo} 
      style={{ 
  
      opacity: "0.7",
      marginLeft:"1%",
      width:"97%",
      maxHeight: "450px",
      borderStyle: "double",
      borderWidth:  "7px"
        }}
        alt="image"
        />
    </div>
    );
  }
}




export default Backdrop;