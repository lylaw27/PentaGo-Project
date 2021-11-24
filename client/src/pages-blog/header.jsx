import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
render(){
  return (
    <header>
        <Link to='/'><img className="logo" alt="" src={require('../images/logo.svg')}/></Link>
    </header>
  );
}
}

export default Header;
