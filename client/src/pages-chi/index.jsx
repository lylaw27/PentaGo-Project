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
              <h1 id="eng">PentaGO!</h1><h1>英國物業領航</h1>
              <h3>由您角度出發<br id="break"/> 搜羅英倫特式家居</h3>
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
        <h1>精選物業</h1>
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
                      <h3>2 bed, semi-detached house</h3>
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
            <h1>靈活改建方案<br/>提升物業價值</h1>
        </div>
        <div id="gridrow">
            <h1>PentaGo! 協助策劃您的未來</h1>
            <p>全方位搜索英倫各類型物業，配合專業設計或改造，拼湊出您心目中的置業藍圖。</p>
        </div>
      </section>
      <section id="mobilegrid">
        <div className="filter">
          <h1>靈活改建方案<br/>提升物業價值</h1>
          <h1>協助策劃您的未來</h1>
          <p>全方位搜索英倫各類型物業<br/>配合專業設計或改造<br/>拼湊出您心目中的置業藍圖</p>
        </div>
      </section>
      <section id="rowsec">
        <h1>如何籌劃合適<br/>置業方案?</h1>
        <p>我們提供專業分析<br/>安排一對一顧問咨詢<br/>及小型研討會交流</p>
        <br/>
        <button>立即登記</button>
    </section>
    
    <Footer/>
    </div>
    </div>
    )
  }
}

export default Home;