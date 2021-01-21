import React, {Component} from 'react';
import Positioner from '../Page/Positioner';
import PageThemes from '../PageContexts/PageThemes';
import CentredContainer from './CentredContainer';
import IntroContent from './IntroContent';
import Members from './Members';
import './TeamLeadersPart.scss';

export default class TeamLeadersPart extends Component{
   
   static contextType = PageThemes;
   

    render(){
        
       

        let className = "team-leaders-part stretched transition-all "
        className += this.context.theme;

        return <div className={className} id="about">
                <Positioner>
                <CentredContainer>
                <IntroContent />
                 <Members/>   
                </CentredContainer> 
                </Positioner>
               </div>
    }
}