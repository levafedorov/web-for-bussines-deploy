import React, {Component} from 'react';
import GalleryIntro from './GalleryIntro';
import Gallery from './Gallery';
import PageThemes from '../PageContexts/PageThemes';
import './GalleryPart.scss';
import PropTypes, { array, arrayOf, objectOf } from 'prop-types';


export const photos = [{photo:'/photos/photo-1.jpg', title:"hello there"}, 
{photo:'/photos/photo-2.jpg', title:"hello there"},
{photo:'/photos/photo-3.jpg', title:"hello there"}];



export class GalleryPart extends Component{


   static contextType = PageThemes;
 

   render(){
   let className = "gallery-part stretched transition-all "
   className += this.context.theme;  
    
   

    return <div className={className} id="portfolio">
        <GalleryIntro />
        <Gallery photos={photos}/>
        </div>
   }
}

GalleryPart.contextTypes = {
    theme: PropTypes.string,
    change: PropTypes.func
}

// GalleryPart.propTypes = {
//    photos: arrayOf(objectOf(PropTypes.string)).isRequired
// }

 