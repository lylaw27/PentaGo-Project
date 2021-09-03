import React from "react";

class Toolbar extends React.Component{
    render(){
        return(
            <div id="toolbar">
                <a href="/">Home</a>
                <div className="dropdown">
                    <a>Properties</a>
                    <div className="dropdown-menu">
                        <a href="/properties">Pre-owned Flats</a>
                        <a href="/properties">Pre-owned Houses</a>
                        <a href="/properties">Cottage</a>
                        <a href="/properties">Commercial</a>
                        <a href="/properties">HMO</a>
                    </div>
                </div>
                <a href="https://pentago-property.com/blog">Blogs</a>
                <a href="/seminar">Events</a>
                <a href="/aboutus">About Us</a>
                <a href="/contactus">Contact Us</a>
                <a onClick = {this.props.chgln}>繁中</a>
            </div>
        )
    }
}

export default Toolbar;