import React from 'react';
import Toolbar from '../Navigations/Toolbar/Toolbar';




const Layout = (props) => (
    
    <div>
       <Toolbar/>
      
        <main>
            
            {props.children}
    
          

        </main>
        
        <footer>
        
            
        
            
        
    </footer>
    </div>
);

export default Layout;