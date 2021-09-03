import React from 'react';
import Header from './header';
import Footer from './footer';

class Details extends React.Component {
    constructor(){
        super();
    }

    render(){
    const propertyDetail = this.props.location.state;
    return (
        <div>
            <Header />
           <div className="overlap">
                <section id="back">
                    <a href="/properties"><i className="fas fa-arrow-left"></i> Look at other properties</a>
                </section>
                <section id="detail-layout">
                    <div id="detail-img" className="detail-content">
                        <img alt="" src={propertyDetail.imagepath}/>
                    </div>
                    <div id="detail-title">
                        <h1>{propertyDetail.title}</h1>
                        <h2>{propertyDetail.address}</h2>
                        <h3>£{propertyDetail.price}</h3>
                        <div id="agent-contacts">
                            <h1>Contact Our Agent</h1>
                            <div>
                                <img alt="" src={require('../images/whatsapp.png')}/>
                                <p>+852 51133670</p>
                            </div>
                            <button>Email agent</button>
                        </div>
                    </div>
                    <div id="detail-data" className="detail-content">
                        <h1>Overview</h1>
                        <span><i className="fas fa-bed"></i>{propertyDetail.bedroom} bedroom(s)</span>
                        <span><i className="fas fa-shower"></i>{propertyDetail.bathroom} bathroom(s)</span>
                        <span><i className="fas fa-expand-arrows-alt"></i>{propertyDetail.area} sq. ft</span>
                    </div>
                    <div id="detail-features" className="detail-content">
                        <h1>Features</h1>
                        <ul>
                            {propertyDetail.features.map((features,i) => <li key={i}><i className="fas fa-check"></i>{features}</li>)}
                        </ul>
                    </div>
                    <div id="detail-description" className="detail-content">
                        <h1>Description</h1>
                        <p>{propertyDetail.description}</p>
                    </div>
                </section>
                <Footer />
            </div>   
       </div>
    );
}
}

export default Details;