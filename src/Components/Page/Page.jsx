import React, {Component} from 'react';
import './PageAndPositioners.scss';
import {SlidingMenuImpl} from '../MainPart/SlidingMenu';
import {CompactSlidingMenuImpl} from '../MainPart/CompactSlidingMenu';
import MainPart from '../MainPart/MainPart';
import PageThemes from '../PageContexts/PageThemes';
import TeamLeadersPart from '../TeamLeadersPart/TeamLeadersPart';
import StatisticPart from '../StatisticPart/StatisticPart';
import ContactPart from '../ContactPart/ContactPart';
import AboutAsPart from '../AboutAsPart/AboutAsPart';
import {GalleryPart} from '../GalleryPart/GalleryPart';
import Footer from '../Footer/Footer';
import '../../fonts/Athelas/style.css';
import '../../fonts/baskerville/style.css';
import '../../fonts/helvetica/style.css';
import '../../fonts/myriad/style.css';
import '../../fonts/quatro/style.css';


export default class Page extends Component{
   
  state = {
    theme: {
      theme:'default',
      change: (theme) => {
        this.setState({theme:{
            theme,
            change: this.state.theme.change
        }})
    }
    },
    compactMenu: true
 }
     


 toggleCompact = (ev) => {
    const width = window.innerWidth;

    if(width < 800 && !this.state.compactMenu){
      this.setState({compactMenu: true})

    }else if(width > 800 && this.state.compactMenu){
      this.setState({compactMenu: false})
    }
    

}



componentDidMount(){
window.addEventListener('resize', this.toggleCompact);
window.addEventListener('load', this.toggleCompact);
}

componentWillUnmount(){
window.removeEventListener('resize', this.toggleCompact);
window.removeEventListener('load', this.toggleCompact);
}




    render(){
      const {theme} = this.state;

      const  items = {
            Home: '#home',
            About: '#about',
            Services: '#services',
            Testimonials: '#testimonials',
            Portfolio: '#portfolio',
            Contacts: '#contacts',
        }

        const slidingMenu = this.state.compactMenu ? <CompactSlidingMenuImpl items={items} /> : <SlidingMenuImpl items={items} />

        return <PageThemes.Provider value={theme}>
               <div className="page">
               <MainPart slidingMenu={slidingMenu} />
               <TeamLeadersPart></TeamLeadersPart>
               <StatisticPart />
               <ContactPart />
               <AboutAsPart />
               <GalleryPart />
               <Footer />
              </div>
              </PageThemes.Provider>
    }
    
}

