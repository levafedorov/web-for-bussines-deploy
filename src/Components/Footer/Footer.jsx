import React, {Component} from 'react';
import './Footer.scss';
import InfoMenu from './InfoMenu';
import Contacts from './Contacts';
import Positioner from '../Page/Positioner';
import PageThemes from '../PageContexts/PageThemes';

export default class Footer extends Component{

static contextType = PageThemes;


   render(){
    let className = "page-footer stretched transition-all "
    className += this.context.theme;  

    const contactsInfo = [{
        info: '+42042312212',
        link: '/icons/tel.png'
    },
    {
        info: 'Wenceslas Square 831/21',
        link: '/icons/map.png'
    }
]
    const menuInfo = {
        content: ['Lorem ipsum', 'dolor sit'],
        information: ['Lorem ipsum', 'onsectetur adipisicing elit'],
        legal:['Lorem ipsum dolor', 'consectetur adipisicing', 'Deleniti'],
        help:['Lorem ipsum', 'Deleniti, reprehenderit']
    }
   
   const socialMedia = {
       google: '/icons/google.png',
       instagram: '/icons/instagram.png',
       facebook: '/icons/facebook.png',
       twitter:'/icons/twitter.png'
   }

    return <div className={className}>
         <section className="main-footer-part">
             <Positioner>
             <InfoMenu menuInfo={menuInfo}/>
             <Contacts contactsInfo={contactsInfo }/>
             </Positioner>
         </section>
         <section className='footer-bottom'>
         <Positioner>
         <p className='copy-right'>Copyright <span style={{verticalAlign: 'super'}}>&copy;</span> All rights reserved</p>
         <div className="social-medias">
         <a href="#" className='google' style={{backgroundImage: `url(${socialMedia.google})`}}></a>
         <a href="#" className='twitter' style={{backgroundImage: `url(${socialMedia.twitter})`}}></a>
         <a href="#" className='instagram' style={{backgroundImage: `url(${socialMedia.instagram})`}}></a>
         <a href="#" className='facebook' style={{backgroundImage: `url(${socialMedia.facebook})`}}></a>  
         </div>
         </Positioner>
         </section>
        </div>
   }
}
