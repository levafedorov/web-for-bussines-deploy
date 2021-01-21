import React from 'react';
import MainPartMessage from './MainPartMessage';
import Positioner from '../Page/Positioner';


export default function MainScreen(props){
   
   
        
    
        return <div className="main-screen">
                 {props.children}
                 <div className="text-place">
                 <Positioner>
                <MainPartMessage />
                 </Positioner></div>
               </div>
    
}