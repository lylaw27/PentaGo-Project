import React from 'react';
import Header from './header';
import Footer from './footer';

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
              <p>With active listings all around in the UK. PentaGo provides the best options like your dream home.</p>
          </div>
        </div>
        <section id="searchbox">
            <form action="/action_page.php">
                <label htmlFor="City">Location</label>
                <select id="City" name="City">
                    <option value="Birmingham">Birmingham</option>
                    <option value="Bristol">Bristol</option>
                    <option value="London">London</option>
                    <option value="Liverpool">Liverpool</option>
                    <option value="Manchester">Manchester</option>
                </select>

                <label htmlFor="Price">Price</label>
                <select id="Price" name="Price">
                  <option value="£50K">£50K - £300K</option>
                  <option value="£100K">£300K - £700K</option>
                  <option value="£1M">£700K - £1M</option>
                </select>

                <label htmlFor="Bedrooms">Bedrooms</label>
                <select id="Bedrooms" name="Bedrooms">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3+</option>
                </select>
            
                <label htmlFor="Area">Area</label>
                <select id="Area" name="Area">
                  <option value="1">500 ft sq</option>
                  <option value="2">1000 ft sq</option>
                  <option value="3">2000 ft sq+</option>
                </select>
              
                <input type="submit" value="Submit"/>
            </form>
        </section>
      </div>
      <section id="featured">
        <h1>Featured Properties</h1>
          <div id="newproperty">
              <div className="col">
                  <img alt="" src="/listimg/listimg1.jpg"/>
                  <div className="description">
                      <h3>3 bed end terrace house</h3>
                      <p>Knott Oaks, Witney, Oxfordshire</p>
                  </div>
              </div>
              <div className="col">
                  <img alt="" src="/listimg/listimg2.jpg"/>
                  <div className="description">
                      <h3>2 bed semi-detached house</h3>
                      <p>Wilkinson Avenue, Paddington</p>
                  </div>
              </div>
              <div className="col">
                  <img alt="" src="/listimg/listimg3.jpg"/>
                  <div className="description">
                      <h3>3 bed detached house</h3>
                      <p>Marrow Drive, Liverpool</p>
                  </div>
              </div>
              <div className="col">
                  <img alt="" src="/listimg/listimg4.jpg"/>
                  <div className="description">
                      <h3>2-bed Semi-detached House</h3>
                      <p>Bosworth Drive, Birmingham</p>
                  </div>
            </div>
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
            <p>Plan your future with PentaGo! PentaGo offers myriad kinds of properties ranging from cottages to mansions. Just simply search on PentaGo and you are one step closer to buying your dream house!</p>
        </div>
      </section>
      <section id="mobilegrid">
        <div className="filter">
          <br/><h1>Plan your future with PentaGo!</h1>
          <br/>
          <p> PentaGo offers myriad kinds of properties ranging from cottages to mansions.</p>
          <br/>
          <p>Just simply search on PentaGo and you are one step closer to buying your dream house!</p>
        </div>
      </section>
      <section id="rowsec">
        <h1>How To Invest In UK Properites?</h1>
        <p>We offer seminars and one-on-one consultations to new investors from our professional analysts.</p>
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