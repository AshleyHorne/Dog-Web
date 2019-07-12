import React, {Component} from 'react';

import dogo from '../../Asset/Image/dog-picture.jpg';
import SocialItems from '../../Components/SocialLinks/SocialItems';




class Backdrop extends Component {
  render() {
    return (
      <div >
      <img  src = {dogo} 
      style={{ 
      
      opacity: "0.7",
      display: "block",
      marginTop:"230px",
      marginLeft:"1%",
      width:"97%",
      
      
      maxHeight: "450px",
      
      
      borderColor: "Black",
      borderStyle: "double",
      borderWidth:  "7px"
        }}
        alt="image"
        />
        <SocialItems/>
    </div>
    );
  }
}




export default Backdrop;