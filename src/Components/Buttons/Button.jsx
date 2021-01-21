import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss'


export default function Button(props){

let className = "btn ";
className += `${props.class} `;
return <button type='button' className={className} onClick={props.fn} data-theme={props.theme}>
    {props.children}
</button> }


Button.propTypes = {
    fn: PropTypes.func.isRequired,
    class: PropTypes.string
}