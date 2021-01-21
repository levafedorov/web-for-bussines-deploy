import React, {Component} from 'react';
import ThemeBar from './ThemeBar';
import Positioner from '../Page/Positioner';

export default class LogoAndThemes extends Component{
   
    render(){
        return <section className="logo-and-themes">
                  <Positioner>
                        <div className="logo">YOURCOMPANYNAME</div>
                        <ThemeBar/>
                  </Positioner>
             </section>
    }
}