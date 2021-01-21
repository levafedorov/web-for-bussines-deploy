import React, {Component} from 'react';
import ThemeContext from '../PageContexts/PageThemes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Buttons/Button';
import PropTypes from 'prop-types';


export default class ThemeBar extends Component{
   
 static contextType = ThemeContext;
 
 btnHanndler = (ev) => {
      const theme = ev.currentTarget.dataset.theme;
      this.context.change(theme);
 }


    render(){
       const {btnHanndler} = this;
        return <div className='theme-bar'>
            <Button theme='default' fn={btnHanndler} class={'rounded small '}><FontAwesomeIcon icon="circle" color="grey" size="xs"/></Button>
            <Button theme='dark'   fn={btnHanndler} class={'rounded small '}><FontAwesomeIcon icon="moon" color="grey"/></Button>
            <Button theme='light' fn={btnHanndler} class={'rounded small '}><FontAwesomeIcon icon="sun" color="grey"/></Button>
        </div>
    }
}


