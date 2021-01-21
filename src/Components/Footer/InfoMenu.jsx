import React from 'react';



export default function InfoMenu(props){

   const {menuInfo} = props;

   return <div className="info-menu">
    { Object.keys(menuInfo).map(item => {
      return<div className="info-menu-item" key={item}>
           <h3>{item}</h3>
           <ul>
           {menuInfo[item].map(item => <li key={item}><a href="#">{item}</a></li>)}
           </ul>
           </div>
    }) }   
   </div>
}