import React from 'react';
import PropTypes from 'prop-types';



export default function AdventageItem(props){
     

   const backgroundImg = {
       backgroundImage : `url(/photos/${props.name.trim().replace(' ', '-')}.jpg)`
   }
   
    return <div className="adventage-item">
           <div className="item-image" style={backgroundImg}>
           </div>
           <div className="adventage">
           {props.name}
           </div>
           </div>
           
}

AdventageItem.defaultProps = {
    name:"default name"
}

AdventageItem.propTypes = {
    name: PropTypes.string
}