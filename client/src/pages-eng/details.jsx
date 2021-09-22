import React from 'react';
import Header from './header.jsx';
import Footer from './footer.jsx';
import axios from 'axios';

class Details extends React.Component {
    constructor(){
        super();
        this.state = {
            _id: '',
            imagefile: '',
            title: '',
            address: '',
            bedroom: '',
            bathroom: '',
            area: '',
            feature:[],
            price: '',
            description:''
        };
        
    }
    
    getPropertyDetail = () => {
        let propertyId = this.props.match.params.propertyId
        axios.get(`/api/propertyListings/${propertyId}`)
        .then((res) => {
            this.setState(res.data)
        })
    }
    componentDidMount(){
        this.getPropertyDetail();
        window.scrollTo(0, 0);
    }
    render(){
    return (
        
        <div>
            <Header />
           <div className="overlap">
                <section id="back">
                    <a href={this.props.prevPath}><i className="fas fa-arrow-left"></i> Look at other properties</a>
                </section>
                <section id="detail-layout">
                    <div id="detail-img" className="detail-content">
                        <img alt="" src={this.state.imagefile}/>
                    </div>
                    <div id="detail-title">
                        <h1>{this.state.title}</h1>
                        <h2>{this.state.address}</h2>
                        <h3>£{this.state.price}</h3>
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
                        <span><i className="fas fa-bed"></i>{this.state.bedroom} bedroom(s)</span>
                        <span><i className="fas fa-shower"></i>{this.state.bathroom} bathroom(s)</span>
                        <span><i className="fas fa-expand-arrows-alt"></i>{this.state.area} sq. ft</span>
                    </div>
                    <div id="detail-features" className="detail-content">
                        <h1>Features</h1>
                        <ul>
                            {this.state.feature.map((feature,i) => <li key={i}><i className="fas fa-check"></i>{feature}</li>)}
                        </ul>
                    </div>
                    <div id="detail-description" className="detail-content">
                        <h1>Description</h1>
                        <p>{this.state.description}</p>
                    </div>
                </section>
                <Footer />
            </div>   
       </div>
    );
}
}

export default Details;