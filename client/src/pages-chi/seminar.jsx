import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';

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
