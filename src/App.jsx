import React, {Component} from 'react';
import Page from "./Components/Page/Page.jsx";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSun, faMoon, faCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faSun, faMoon, faCircle);



 export default class App extends Component{
    
    render(){
       return <Page />;
    }
}


