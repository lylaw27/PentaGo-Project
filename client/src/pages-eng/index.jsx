import React from 'react';
import {Link} from 'react-router-dom';
import Header from './header.jsx';
import Footer from './footer.jsx';
import axios from 'axios';

class FeaturedList extends React.Component{
  constructor(){
    super();
    this.state = {
        propertyList:[
        {
            _id: '', 
            imagefile: '',
            title: '', 
            address: '',
        }
        ]
    }
  }
  getPropertyList(){
    axios.get('/api/propertyListings')
        .then((res) => {
          let propertyList = res.data
          this.setState({propertyList})
          console.log('Data has been received!');
        })
        .catch(()=>{
            console.log('Error getting data!')
        })
  }
  componentDidMount(){
      this.getPropertyList();
  }
  render(){
    return(
      this.state.propertyList.map((property,i) =>
            <Link to={`/properties/${property._id}`} className="col" key={i}>
                <img alt="" src={property.imagefile}/>
                <div className="description">
                    <h3>{property.title}</h3>
                    <p>{property.address}</p>
                </div>
            </Link>
    )
    )
  }
}



class Home extends React.Component{
  render(){
    return(
    <div>
      <Header chgln={this.props.chgln}/>
      <div className="overlap">
      <div id="background">
        <div className="filter">
          <div id="title">
              <h1 id="eng">PentaGO!</h1><h2>Your No.1 UK <br/>Property Navigator</h2>
              <p>With active listings all around the UK. PentaGo! provides the best options for your dream home.</p>
          </div>
        </div>
      </div>
      <section id="featured">
        <h1>Featured Properties</h1>
        <div id="newproperty">
        <FeaturedList/>
        </div>
      </section>
      <section id="gridsec">
        <img id="img1" alt="" src={require('../images/grid1.jpg')}/>
        <img id="img2" alt="" src={require('../images/grid2.jpg')}/>
        <img id="img3" alt="" src={require('../images/grid3.jpg')}/>
        <img id="img4" alt="" src={require('../images/grid4.jpg')}/>
        <img id="img5" alt="" src={require('../images/grid5.jpg')}/>
        <div id="gridcol">
            <h1>WE PROVIDE UPGRADES<br/> TO YOUR PROPERTIES</h1>
        </div>
        <div id="gridrow">
            <h1>SIMPLY PENTAGO!</h1>
            <p>Plan your future with PentaGo! PentaGo! offers a myriad kinds of properties ranging from cottages to mansions. Just simply search on PentaGo and you are one step closer to buying your dream house!</p>
        </div>
      </section>
      <section id="mobilegrid">
        <div className="filter">
          <br/><h1>Plan your future with PentaGo!</h1>
          <br/>
          <p> PentaGo! offers a myriad kinds of properties ranging from cottages to mansions.</p>
          <br/>
          <p>Just simply search on PentaGo! and you are one step closer to buying your dream house!</p>
        </div>
      </section>
      <section id="rowsec">
        <h1>How To Invest In UK Properties?</h1>
        <p>Our professional analysts offer seminars and one-on-one consultations to new investors like you.</p>
        <br/>
        <button>Sign Up</button>
    </section>
    
    <Footer/>
    </div>
    </div>
    )
  }
}

export default Home;