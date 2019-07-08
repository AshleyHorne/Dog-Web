import React, {Component} from 'react';

import dogo from '../../Asset/Image/dog-picture.jpg';
import SocialItems from '../../Components/SocialLinks/SocialItems';
import { CoverageMap } from 'istanbul-lib-coverage';



class Backdrop extends Component {
  render() {
    return (
      <div >
      <img  src = {dogo} 
      style={{ 
        objectFit:"cover",
      
      width:"99%",
     opacity: "1",
      marginTop:"250px",
      maxHeight:"455px",
      marginLeft: "0px",
      borderColor: "Black",
      borderStyle: "double",
      borderWidth:  "6px"
        }}
        alt="image"
        />
        <SocialItems/>
    </div>
    );
  }
}




export default Backdrop;