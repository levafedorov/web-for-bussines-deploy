import React from 'react';



export default function GalleryItem(props){

   const {photo, title, width, active} = props;

    
   const bgImageStyle = {
       width: `${width}%`,
       backgroundImage: `url("${photo}")`
   }

   const titleUp = {
       top:0
   }

   return <div className="gallery-item" style={bgImageStyle}>
       <div className="title" style={active ? titleUp : null}>
           <h3>{title}</h3>
       </div>
   </div>
}


GalleryItem.defaultProps = {
     photo: '',
     title: 'No photo',
     width: "0",
     active: true
}
