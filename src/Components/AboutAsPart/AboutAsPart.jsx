import React, {Component} from 'react';
import './AboutAsPart.scss';
import Positioner from '../Page/Positioner';
import ImagePlace from './ImagePlace';
import AboutUsPlace from './AboutUsPlace';
import PageThemes from '../PageContexts/PageThemes';
import PropTypes from "prop-types";

export default class AboutAsPart extends Component{

    static contextType = PageThemes;

    render(){
        let className = "about-as-part stretched transition-all "
        className += this.context.theme;

        return <div className={className} id="testimonials">
            <Positioner>
            <ImagePlace/>
            <AboutUsPlace />
            </Positioner>
        </div>
    }
}

// AboutAsPart.contextTypes = {
//     theme: PropTypes.string,
//     change: PropTypes.func
// }