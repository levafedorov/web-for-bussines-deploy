import React, {Component} from 'react';

export default function slidingMenuHOC(Wrapped){

 class SlidingMenuHOC extends Component{
    
    state = {
        fixed: false
    }
    

    peelOffMenu = (ref) => {
            let scrolledSpace = window.scrollY || document.documentElement.scrollTop;
            this.resizeAlg(scrolledSpace);
    }
    

    resizeAlg = (scrolledSpace) => {
         
        if(scrolledSpace > 130 && !this.state.fixed){
            this.setState({fixed: true}); 
       }
       else if(scrolledSpace < 130 && this.state.fixed){
           this.setState({fixed: false}); 
       } 

    }


    componentDidMount(){
        window.addEventListener('scroll', this.peelOffMenu);
    }
      
    componentWillUnmount(){
        window.removeEventListener('scroll', this.peelOffMenu);
    }
 

    render(){
        const position = {
            top:0,
            position: this.state.fixed ? 'fixed' : 'relative'
        }      
  
        return <Wrapped position={position} {...this.props}/>
    }
} 

return SlidingMenuHOC 
}