export const testState = {
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

export  const testFormFilled = {
    form: {name: 'Hello There',
        phone: '+420775645657',
        category:'First',
        city:'Praha',
        mail:'qwery@qwery',
        message:'Message',},
    errObj:{
        name: '',
        phone: '',
        category:'',
        city:'',
        mail:'',
        message:''
    }
        }

export  const testFormErrors = {
    form: {name: 'Hello There',
        phone: '+420775645657',
        category:'First',
        city:'Praha',
        mail:'qwery@qwery',
        message:'Message',},
    errObj:{
        name: 'Error here',
        phone: 'Error here',
        category:'Error here',
        city:'Error here',
        mail:'Error here',
        message:'Error here'
    } }

export const defaultState = {
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
    
export const validObjects = [{
    name: 'Gven Borš',
    phone: '+420445665345',
    category:'First',
    city:'Praha',
    mail:'qwery@gmail.com',
    message:'+71912205321',},
    {name: ' Fedorov  Lev',
    phone: '+783456723322',
    category:'second',
    city:'Brno',
    mail:'fls---@mail.ru',
    message:'Hello there',},
    {name: 'Bilbo Baggins',
    phone: '+3112231234454',
    category:'Third',
    city:'Plzen',
    mail:'asds_asdy@yandex.ru',
    message:'Hello there',
}];

export const invalidObjects = [{
    name: 'Kivi123',
    phone: '+420445665345',
    category:'First',
    city:'Praha',
    mail:'qwery@gmail.com',
    message:'+71912205321',},
    {name: 'Fedorov Lev',
    phone: '+7834534',
    category:'second',
    city:'Brno',
    mail:'mail.ru',
    message:'',},
    {name: 'Nota fa--*',
    phone: '+3112231234454',
    category:'Third',
    city:'Plzen',
    mail:'asdsasdy@yandex.ru',
    message:'', }];
            

export const tryStateObj = { 
    name: 'Name',
    phone: '+420745234',
    category:'Second',
    city:'Brno',
    mail:'qwert@qwery',
    message:'Message here hello'  }