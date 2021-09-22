import React from 'react';
import Toolbar from './toolbar.jsx';
import Navbar from './navbar.jsx';
class Header extends React.Component{
render(){
  return (
    <header>
        <a id="logo" href="/"><img alt="" src={require('../images/logo.svg')}/></a>
        <nav>
            <Toolbar chgln={this.props.chgln}/>
            <Navbar chgln={this.props.chgln}/>
        </nav>
    </header>
  );
}
}

export default Header;
