import React from 'react';
import Header from './header';
import Footer from './footer';

function Seminar() {
    return (
        <div>
            <Header />
            <div className="overlap">
                <div id="seminar">
                    <img style={{width: "100%"}} alt="" src={require('../images/seminar.jpg')}/>
                </div> 
                <Footer />
            </div>
           
        </div>
    );
}

export default Seminar;
