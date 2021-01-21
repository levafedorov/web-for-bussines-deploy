import React, { Component } from 'react';
import GalleryItem from './GalleryItem';
import Button from '../Buttons/Button';
import Positioner from '../Page/Positioner';
import PropTypes from 'prop-types';

export default class Gallery extends Component{
   

  state = {
     position: 0
  }
 
 
 leftHandler = (ev) => {
   const position = this.state.position;
   const max = this.props.photos.length - 1;
   if(position){
       this.setState({position: position - 1});
   }else{
    this.setState({position: max});
   }
 }


 rightHandler = (ev) => {
  const position = this.state.position;
  const max = this.props.photos.length - 1;
  if(position !== max){
      this.setState({position: position + 1});
  }else{
    this.setState({position: 0});
  }
}

  
 render(){

   const {position} = this.state;
  

   const {photos} = this.props;
   const total = photos.length;
   const itemWidth = (100 / total).toFixed(2);
   const screen =  {width: `${total * 100}%`,
                    transform: `translateX(-${itemWidth * position}%)`};
   

   return <div className="gallery" id="gallery">
       <div className="gallery-screen">
      <div className="screen" style={screen}>
      {photos.map((item, i) => <GalleryItem {...item} width={itemWidth} active={i === position} key={'photo-' + i}/>)}
      </div>
       </div>
       <div className="gallery-control">
       <Positioner>
       <Button class="rounded square-left" fn={this.leftHandler}/>
       <Button class="rounded square-right" fn={this.rightHandler}/>
       </Positioner>
       </div>
   </div>
 }
}

Gallery.defaultProps = {
 photos: [{photo:'', title:""}]
}