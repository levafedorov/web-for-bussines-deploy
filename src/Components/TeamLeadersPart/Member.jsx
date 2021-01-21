import React from 'react';


export default function Member(props){
   
      const {link, name, about} = props

        return <div className="item">
           <div className="image-place">
            <img src={link} alt="" height="570" width="448"/>
           </div>
           <article>
           <h3>{name}</h3>
            <p>{about}</p>
           </article>
        </div>
}

