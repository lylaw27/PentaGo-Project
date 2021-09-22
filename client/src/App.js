import React from 'react';
import './css/style.css';
import './css/about.css';
import './css/fix.css';
import './css/contact.css';
import './css/properties.css';
import './css/details.css';
import './css/upload.css';
import Chi from './chi';
import Eng from './eng';
class App extends React.Component{
        state = {lang: localStorage.getItem('lang') || 'eng'};
        
        changeLanguage = () =>{ 
            if(this.state.lang==='eng'){
                localStorage.setItem('lang','chi');
            }
            else{
                localStorage.setItem('lang','eng');
            }
            this.setState({lang: localStorage.getItem('lang')});
        }
    render(){
        if (this.state.lang==='eng') {
            return( <Eng chgln={this.changeLanguage}/>)
          } else {
            return ( <Chi chgln={this.changeLanguage}/>)
          }
    }
}

export default App;