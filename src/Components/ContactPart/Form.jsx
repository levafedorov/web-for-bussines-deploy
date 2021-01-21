import React, {Component} from 'react';
import ErrorInForm from './ErrorInForm';
import PropTypes from "prop-types";




export default class Form extends Component{ 
     

   

   textHandler = (ev) => {
       const target = ev.target;
       this.props.setFormState({[target.name]: target.value}, 'form');
      
   }

    render(){
        const {name, message, phone, city, category, mail, errObj} = this.props;
        
      

return <form action="" method="" className="contact-form">
          <div className="sides">
                <div className="left-side">

                    <div className={`name-container container ${errObj.name ? 'error' : null}`}>
                        {errObj.name ? <ErrorInForm message={errObj.name}/> : null}
                        <input type="text" id="name" name="name" value={name} onChange={this.textHandler} placeholder="Name" className="form-input"/>
                    </div>  

                    <div className={`phone-container container ${errObj.phone ? 'error' : null}`}>
                        {errObj.phone ? <ErrorInForm message={errObj.phone}/> : null}
                        <input type="tel" id="phone-number" name="phone" value={phone} onChange={this.textHandler} className="form-input"/>
                    </div>  

                </div>

                    <div className="right-side">
                        
                            <div className="category-container container">
                                <select name="category" id="category" value={category} onChange={this.textHandler} className="form-input">
                        {this.props.categories.map(item => <option value={item} key={item}>{item}</option>)}
                                </select>
                            </div>    

                            <div className="city-container container">
                                <select name="city" id="city" value={city} onChange={this.textHandler}>
                        {this.props.cities.map(item => <option value={item} key={item}>{item}</option>)}
                                </select>
                            </div> 

                  </div>

          </div>

            <div className={`mail-container container ${errObj.mail? 'error' : null}`}>
            {errObj.mail ? <ErrorInForm message={errObj.mail}/> : null}
            <input type="mail" id="mail" name="mail" placeholder="mail@mail" value={mail} onChange={this.textHandler} className="form-input"/>
            </div>

            <div className="message-container container">
                <textarea name="message" id="message" cols="30" rows="10" placeholder="...message" value={message} onChange={this.textHandler} className="form-input">
                  
               </textarea>
            </div>
    </form>
    }
}

Form.propTypes = {
    form: PropTypes.objectOf(PropTypes.string),
    errObj: PropTypes.objectOf(PropTypes.string)
}

Form.defaultProps = {
    categories: ["First", "Second", "Third"],
    cities:["Praha", "Brno", "Plzen"]
}