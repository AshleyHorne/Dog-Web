import React, {Component} from 'react';


import profile from '../../Asset/Image/dogo-logo.png';



class DogLogo extends Component {
    render() {
      return (
       <div >
         <img  src = {profile} 
         style={{ 
          borderRadius:"50%", 
          width: "12%", 
          height: "auto",
          minHeight: "60px",
          marginLeft:"575px",
          borderColor: "#BC986A",
          borderStyle: "double",
          borderWidth:  "10px"
           }}
           alt="image"
           />
       </div>
      );
    }
  }

  


export default DogLogo;