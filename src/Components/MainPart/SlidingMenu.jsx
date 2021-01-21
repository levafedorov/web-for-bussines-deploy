import React, {Component} from 'react';
import Positioner from '../Page/Positioner';
import './SlidingMenu.scss'
import slidingMenuHOC from './slidingMenuHOC';
import PropTypes from 'prop-types';

 class SlidingMenu extends Component{
    
   state = {
         targetPosition:0,
         targetWidth:null,
   }
  


   animTarget = (ev) => {
     
     const target = ev.target;
     const allAs = this.menuRef.querySelectorAll('a');
     const animElem = this.menuRef.querySelector('.anim-elem');
     let curIndex = [].findIndex.call(allAs, item => item === target);
     const workingArr = [...allAs].slice(0, curIndex);
     let targetPosition = 0; 
     
     allAs.forEach(item => item.classList.remove('active'));

     this.setClassNameToItem(target);

     animElem.classList.add('active');

     workingArr.forEach(item => targetPosition += item.offsetWidth);
     this.setState({targetPosition,
                    targetWidth:target.offsetWidth });

   }  
    
   setClassNameToItem = (elem, callback) => {
    setTimeout(() => {
      elem.classList.add('active');
      if(callback) callback();
      }, 300);
   }


   elemTransEnded = (ev) => {
    ev.target.classList.remove('active');
   }



    render(){
        
        const {targetPosition, targetWidth} = this.state;
        const {items, position} = this.props;
        
        const targetStyle = {transform:`translateX(${targetPosition}px)`,
                             width:targetWidth + 'px' }

        return <nav className="main-menu sliding" style={position}>
           <Positioner>
            <ul className="menu-list" ref={el => this.menuRef = el}>
            <div className="anim-elem" style={targetStyle} onTransitionEnd={this.elemTransEnded}></div>
    { Object.keys(items).map((item, i)=> <li key={item}> 
    <a href={items[item]} className={`link-${i} ${i === 0 ? 'active' : null}`} onClick={this.animTarget}>{item}</a></li>) }
            </ul>
           </Positioner>
        </nav>
    }
}


SlidingMenu.defaultProps = {
  items: {first:'first', second:'second', third:'third'},
}


SlidingMenu.propTypes = {
    items: PropTypes.objectOf(PropTypes.string),
    position: PropTypes.object
}





export const SlidingMenuTest = SlidingMenu;
export const SlidingMenuImpl = slidingMenuHOC(SlidingMenu);