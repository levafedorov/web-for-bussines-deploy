import React from 'react';

// default, light, dark

const ThemeContext = React.createContext({
      theme: 'default',
      change: ()=>{},
});

export default ThemeContext;