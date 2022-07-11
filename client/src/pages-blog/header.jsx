import React, { useState } from 'react';
import {Link} from 'react-router-dom';
const Header = () =>{
  const [displayState,setDisplayState] = useState('none');
  const navDropdown = () =>{
    if(displayState === 'none'){
      setDisplayState('block');
    }
    else{
      setDisplayState('none');
    }
  }
  return (
    <header>
        <div id="header-box">
          <Link to='/'><img className="logo" alt="" src={require('../images/logo.svg')}/></Link>
          <nav className='nav-pc'>
            <Link to="/" className='nav-item'>
                民間懶人包
            </Link>
              <Link to="/blog" className='nav-item'>
                民間博客
              </Link>
          </nav>
          <nav className='nav-mobile'>
            <div onClick={navDropdown}>
              <i className="fa-solid fa-bars"/>
            </div>
          </nav>
        </div>
        <div className='nav-dropdown' style={{display: displayState}}>
          <Link to="/" className='nav-item'>
            民間懶人包
          </Link>
          <Link to="/blog" className='nav-item'>
            民間博客
          </Link> 
        </div>
    </header>
  );
}

export default Header;
