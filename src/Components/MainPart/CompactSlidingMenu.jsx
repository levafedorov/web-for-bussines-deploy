import React, {Component} from 'react';
import './SlidingMenu.scss'
import slidingMenuHOC from './slidingMenuHOC';
import PropTypes from 'prop-types';


 class CompactSlidingMenu extends Component{
    
 
    render(){
       
  
        const {items, position} = this.props;

        return <nav className="main-menu compact" style={position}>
            <ul className="menu-list">
    { Object.keys(items).map(item => <li key={item}><a href={items[item]}>{item}</a></li>) }
            </ul>
            <button type='button' className="menu-down-btn">
              &darr;
            </button>
        </nav>
    }

}

CompactSlidingMenu.defaultProps = {
    items: {first:'first', second:'second', third:'third'},
  }
  
  
  CompactSlidingMenu.propTypes = {
      items: PropTypes.objectOf(PropTypes.string),
      position: PropTypes.object
  }
  



export const CompactSlidingMenuImpl = slidingMenuHOC(CompactSlidingMenu);
export const CompactSlidingMenuTest = CompactSlidingMenu;