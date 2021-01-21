import React from 'react';
import Member from './Member';


export default function Members(props){
   
     const membersList = [{
        name: 'Boar',
        surname: 'Boar',
        about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Earum laudantium accusamus voluptatem aliquid reiciendis, 
                accusantium maiores voluptates beatae architecto aliquam.`
     }, 
     {
        name: 'Fox',
        surname: 'Fox',
        about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Earum laudantium accusamus voluptatem aliquid reiciendis, 
                accusantium maiores voluptates beatae architecto aliquam.`
     },
     {
        name: 'Goose',
        surname: 'Goose',
        about: `Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Earum laudantium accusamus voluptatem aliquid reiciendis, 
                accusantium maiores voluptates beatae architecto aliquam.`
     },
]
 
        return <section className="members">
          {membersList.map((item, i)=> 
          <Member name={`${item.name} ${item.surname}`} 
          about={item.about} link={`/photos/photo-${item.name}.jpg`} 
          key={`${item}-${i}`}/>)}
        </section>
}