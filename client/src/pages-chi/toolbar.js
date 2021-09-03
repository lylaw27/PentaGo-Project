import React from "react";

class Toolbar extends React.Component{
    render(){
        return(
            <div id="toolbar">
                <a href="/">主頁</a>
                <div className="dropdown">
                    <a>尋找物業</a>
                    <div className="dropdown-menu">
                        <a href="/properties">Pre-owned Flats</a>
                        <a href="/properties">Pre-owned Houses</a>
                        <a href="/properties">Cottage</a>
                        <a href="/properties">Commercial</a>
                        <a href="/properties">HMO</a>
                    </div>
                </div>
                <a href="https://pentago-property.com/blog">網誌</a>
                <a href="/seminar">活動</a>
                <a href="/aboutus">關於我們</a>
                <a href="/contactus">聯絡我們</a>
                <a onClick = {this.props.chgln}>ENG</a>
            </div>
        )
    }
}

export default Toolbar;