import React from 'react';
import SocialItems from '../SocialLinks/SocialItems';
import ToolBar from '../Navigations/Toolbar/Toolbar';
import Searchbar from '../Searchbar/SearchBar';
import Backdrop from '../../UI/Backdrop/Backdrop';





const Layout = (props) => (
    
    <div>
       
    
          <ToolBar/>
      
        <main>
       <div>
       <Backdrop />

           <div><Searchbar/></div>

       </div>
          {/* Add a div with the background image  and add the search bar and main items */}
                        {props.children}
   
          

        </main>
        
       
        <footer>
        
            
        <div><SocialItems/></div>
            
        
    </footer>
    </div>
);

export default Layout;