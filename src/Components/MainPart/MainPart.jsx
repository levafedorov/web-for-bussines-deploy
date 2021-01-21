import React, {Component} from 'react';
import Header from '../Header/Header';
import MainScreen from './MainScreen';
import PageThemes from '../PageContexts/PageThemes';
import './MainPart.scss'

export default class MainPart extends Component{
   
   static contextType = PageThemes;
   

    render(){
        
        const {slidingMenu} = this.props; 

        let className = "main-part stretched transition-all "
        className += this.context.theme;

        return <div className={className} id='home'>
                <Header/>
                <MainScreen>
               <div className="sliding-menu-place">{slidingMenu}</div> 
                </MainScreen>   
               </div>
    }
}