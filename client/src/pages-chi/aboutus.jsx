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
                        <h1>PentaGO! <br/>英國物業領航</h1>
                        <p>跟進買賣前後服務 <br className="break"/>助您置業無後顧之憂</p>
                    </div>
                </section>
                <section className="service1">
                    <img alt="" src={require('../images/about2.jpg')}/>
                    <div>    
                        <h1>我們的服務</h1>
                        <p>PentaGo! 提供最強英國物業分析，專業駐英團隊實地搵樓，專攻二手物業，一站式服務尋找物業、買賣協商、設計裝修、改建增值、驗樓報告、法律支援、按揭顧問及租賃管理等。</p>
                    </div>
                </section>
                <section className="service2">
                    <div className="content">    
                        <h1>準備置業</h1>
                        <div><i class="fas fa-home"></i><p>搜羅低於市價BMV (Below Market Value) 優質物業</p></div>
                        <div><i class="fas fa-pound-sign"></i><p>與當地房地產中介進行買賣協商</p></div>
                        <div><i class="far fa-newspaper"></i><p>提供驗樓服務及報告 監督修葺樓宇結構</p></div>
                    </div>
                    <img alt="" src={require('../images/about3.jpg')}/>
                </section>
                <section className="service3">
                    <img alt="" src={require('../images/about4.jpg')}/>
                    <div className="content">
                        <h1>置業完成</h1>
                        <div><i className="fas fa-ruler-combined"></i><p>專業室內設計 度身訂造不同方案</p></div>
                        <div><i className="fas fa-tools"></i><p>擴建及改造 提升物業回報</p></div>
                        <div><i className="fas fa-chart-line"></i><p>洽談租客 追逐長期穩定收益</p></div>
                    </div>
                </section>
                <Footer/>
                </div>
            </div>
        )
    }
}

export default Aboutus;
