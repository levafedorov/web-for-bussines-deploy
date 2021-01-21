import React from 'react';
import ContactsItem from './ContactsItem';


export default function contacts(props){
  
  const {contactsInfo} = props;

   return <div className="contacts">
    <ul className="contacts-list">
    { contactsInfo.map((item, i) => <ContactsItem info={item.info} link={item.link} key={'item' + i}/>)}
    </ul>
   </div>
   
}