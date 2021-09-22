import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

class Contactus extends React.Component{
    render(){
        return(
            <div>
                <Header chgln={this.props.chgln}/>
                <div className="overlap">
                <section id="main">
                    <div id="filter">
                        <div>
                            <h1>Contact Us</h1>
                        </div>
                        <div id="contacts">
                            <div id="box">
                                <h2>Drop your queries here!</h2>
                                <form action="/action.php">
                                    <input type="text" id="fname" name="firstname" placeholder="Name"/>
                                    <input type="text" id="email" name="email" placeholder="Email"/>
                                    <textarea id="queries" name="queries" placeholder="Your query..."></textarea>
                                    <input type="submit" value="Submit"/>
                                </form>
                            </div>
                            <div id="map">
                                <h2>Our location</h2>
                                <iframe title="Our Location" width="100%" height="70%" id="gmap_canvas" src="https://maps.google.com/maps?q=14%2FF%2C%20One%20Hysan%20Avenue%2C%20Causeway%20Bay%2C%20Hong%20Kong&t=&z=17&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                            </div>
                        </div>
                    </div>
                </section>
                <Footer/>
                </div>
            </div>
        )
    }
}

export default Contactus;