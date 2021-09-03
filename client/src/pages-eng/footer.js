import React from 'react';
import '../css/fix.css';

class Footer extends React.Component{
render(){
  return (
    <section id="footer">
      <div id="footerlinks">
        <a href="/">Home</a>
        <a href="/properties">Properties</a>
        <a href="/aboutus">About Us</a>
        <a href="/contactus">Contact Us</a>
      </div>
        <div id="footericons">
          <a href="https://www.facebook.com/PentaGo-%E8%8B%B1%E5%9C%8B%E7%89%A9%E6%A5%AD%E9%A0%98%E8%88%AA-101672148357502/?view_public_for=101672148357502"><i className="fab fa-facebook-f"></i></a>
          <a href="https://www.instagram.com/pentagoproperty/"><i className="fab fa-instagram"></i></a>
          <a href="https://api.whatsapp.com/send?phone=85251133670"><i className="fab fa-whatsapp"></i></a>
          <a href="mailto:cs@pentagoproperty.com"><i className="far fa-envelope"></i></a>
        </div>
        <p><i className="fas fa-map-marker-alt"></i>14/F, One Hysan Avenue, Causeway Bay, Hong Kong</p>
        <p id="copyright">Copyright © 2020 Pentago Property Limited. All rights reserved.</p>
    </section>
  );
}
}

export default Footer;
