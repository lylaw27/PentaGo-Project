import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

class Aboutus extends React.Component{
    render(){
        return(
            <div id="aboutus">
                <Header chgln={this.props.chgln}/>
                <div className="overlap">
                <section id="top">
                    <div>
                        <h1>About Us</h1>
                        <p>We cover all the procedures needed when purchasing a property. If you need help with property search, legal support or reconstruction,<br className="break"/><br className="break"/>PentaGO has it. All at one place.</p>
                    </div>
                </section>
                <section className="service1">
                    <img alt="" src={require('../images/about2.jpg')}/>
                    <div>    
                        <h1>Our Services</h1>
                        <p><p class="hide">We have professional teams based in the UK which provide assistance in searching for your desired houses in the UK. Our current five investment hotspots include London, Reading, Birmingham, Manchester and Leeds.</p><br className="break"/>Compare hundreds of properties at once. PentaGo! Your reliable property manager.</p>
                    </div>
                </section>
                <section className="service2">
                    <div className="content">    
                        <h1>Evaluation</h1>
                        <div><i class="fas fa-home"></i><p>Track for BMV (Below Market Value) and high quailty real estates</p></div>
                        <div><i class="fas fa-pound-sign"></i><p>Negotiate with local agencies for the best prices</p></div>
                        <div><i class="far fa-newspaper"></i><p>Offer building inpections and safety reports</p></div>
                    </div>
                    <img alt="" src={require('../images/about3.jpg')}/>
                </section>
                <section className="service3">
                    <img alt="" src={require('../images/about4.jpg')}/>
                    <div className="content">
                        <h1>Maintenance</h1>
                        <div><i className="fas fa-ruler-combined"></i><p>Design your home according to your choices</p></div>
                        <div><i className="fas fa-tools"></i><p>Expand and reconstruct your asset to raise your its value</p></div>
                        <div><i className="fas fa-chart-line"></i><p>Negotiate with tenants to pursue long-term stable income</p></div>
                    </div>
                </section>
                <Footer/>
                </div>
            </div>
        )
    }
}

export default Aboutus;
