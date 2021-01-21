import React, {Component} from 'react';
import './ContactPart.scss';
import ContactTextIntro from './ContactTextIntro';
import PageThemes from '../PageContexts/PageThemes';
import Form from './Form';
import Button from '../Buttons/Button';
import XRegExp from 'xregexp';


export default class ContactPart extends Component{

    state = {
      form: {name: '',
        phone: '+420',
        category:'First',
        city:'Praha',
        mail:'',
        message:'',},
      errObj:{
        name: '',
        phone: '',
        category:'',
        city:'',
        mail:'',
        message:''
      }
    }
   
   setFormState = (obj, name) => {
    this.setState({[name]: Object.assign(this.state[name], obj)});
   }

   

  sendForm = (ev) => {
   const  {name, phone, category, city, mail, message} = this.state.form;

   const unicodeWord = XRegExp('^\\pL+$', 'x');
   const phoneReg = new RegExp('^[+][0-9]{10,}');
   const mailReg = new RegExp('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$');

   let toSend = true;
   let errObj = {};

   function validate(key, elem, regexp, message){
    if(!elem){
        errObj[key] = `PLease fill ${key} field`;
        toSend = false;
    }else if(regexp && !regexp.test(elem.split(' ').join(''))){ 
        errObj[key] = message;
        toSend = false;
    }else{ errObj[key] = '';}  
   }

   validate('name', name, unicodeWord, 'the field has to contain only letters');
   validate('phone', phone, phoneReg, 'the field has to contain more then 10 digits and code of the state');
   validate('mail', mail, mailReg, 'incorrect form of the eMail');
   validate('category', category);
   validate('city', city);

   if(toSend){
       alert(JSON.stringify(this.state.form));
   }else{
         this.setFormState(errObj, 'errObj');
   }
}



static contextType = PageThemes;

    render(){
      let className = "contact-page stretched transition-all "
      className += this.context.theme;

        const categories = ['Fisrt', 'Second', 'Third'];
        const cities = ['Praha', 'Brno', 'Plzen', 'Ostrava', 'Olomouc'];
        return <div className={className} id="contacts">
          <div className="bg">
          <div className="contact-place">
              <ContactTextIntro/>
              <Form categories={categories} cities={cities} setFormState={this.setFormState} errObj={this.state.errObj} {...this.state.form} />
              <Button class={'contact-part-btn'} fn={this.sendForm}>Contact us</Button>
              </div>
          </div>
        </div>
    }
}
