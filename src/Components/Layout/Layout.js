import React from 'react';
import Toolbar from '../Navigations/Toolbar/Toolbar';

import SocialItems from '../SocialLinks/SocialItems';
import Backdrop from '../../UI/Backdrop/Backdrop';


const Layout = (props) => (
    
    <div>
       <Toolbar/>
      
        <main>
            
            {props.children}
    
          
           

        </main>

        <footer>
        <nav>
            <SocialItems/>
           
            
        </nav>
    </footer>
    </div>
);

export default Layout;