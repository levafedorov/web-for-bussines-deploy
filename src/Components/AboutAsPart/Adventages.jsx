import React from 'react';
import AdventageItem from './AdventageItem';

const adventageNames = ["friendly team", "involved", "assistance"];



export default function Adventages(props){
     
    

    return <div className="adventages">
        {adventageNames.map((item, i) => <AdventageItem name={item} key={`key-${i}`}/>)}
   </div>
}