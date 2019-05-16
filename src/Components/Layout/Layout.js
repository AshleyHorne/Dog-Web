import React from 'react';
import Toolbar from '../Navigations/Toolbar/Toolbar';


const Layout = (props) => (
    <div>
       <Toolbar/>
       <Backdrop show={props.show}/>
        <main>
            
            {props.children}

        </main>
    </div>
);

export default Layout;