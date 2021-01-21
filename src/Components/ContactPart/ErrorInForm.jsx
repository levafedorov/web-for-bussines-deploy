import React from 'react';
import Button from '../Buttons/Button'
import { useEffect, useState } from 'react';


export default function ErrorInForm(props){
    
  


    return <p className="error-in-form">
           {props.message}
          </p>
 
}