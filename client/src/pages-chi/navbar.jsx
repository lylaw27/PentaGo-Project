import React from 'react';

class Navbar extends React.Component{
    state = {
        Drawer: false
    };
    drawerToggleClickHandler = () => {
        this.setState({Drawer: !this.state.Drawer});
    };
    
    render(){
        let drawerClasses = 'navdrawer';
        if(this.state.Drawer){
            drawerClasses = 'drawer-open navdrawer';
        }
        return(
            <div id="navbar">
                <div id="navbutton" onClick={this.drawerToggleClickHandler}>
                    <i className="fas fa-bars"/>
                </div>
                <div className={drawerClasses}>
                    <div id="links">
                        <a href="/">主頁</a>
                        <hr/>
                        <a href="/properties">尋找物業</a>
                        <hr/>
                        <a href="https://pentago-property.com/blog">網誌</a>
                        <hr/>
                        <a href="/seminar">活動</a>
                        <hr/>
                        <a href="/aboutus">關於我們</a>
                        <hr/>
                        <a href="/contactus">聯絡我們</a>
                        <hr/>
                    </div>
                    <div id="icons">
                        <a href="https://www.facebook.com/PentaGo-%E8%8B%B1%E5%9C%8B%E7%89%A9%E6%A5%AD%E9%A0%98%E8%88%AA-101672148357502/?view_public_for=101672148357502"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.instagram.com/pentagoproperty/"><i className="fab fa-instagram"></i></a>
                        <a href="https://api.whatsapp.com/send?phone=85251133670"><i className="fab fa-whatsapp"></i></a>
                        <a href="mailto:cs@pentagoproperty.com"><i className="far fa-envelope"></i></a>
                    </div>
                    <div id="lang">
                        <span onClick = {this.props.chgln}>EN</span><span>|</span><span>繁</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;