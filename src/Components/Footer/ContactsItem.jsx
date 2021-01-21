import React from 'react';



export default function ContactsItem(props){
  
  const {link, info} = props;
    
  const bgIcon = {
     backgroundImage: `url(${link})`
  }

   return <li className="contacts-item info">
     <div className="icon-place" style={bgIcon}></div>
     <div className="info">{info}</div>
   </li>
}