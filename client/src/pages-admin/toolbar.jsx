import React from "react";

class Toolbar extends React.Component{
    render(){
        return(
        <header id='adminHeader'>
            <PrevPage pathname={this.props.pathname}/>
            <a id="adminLogo" href="/admin"><img className="logo"  alt="" src={require('../images/logo.svg')}/></a>
            <div id="toolbar">
                <p>Hello, Ken !</p> 
            </div>
        </header>
        )
    }
}

class PrevPage extends React.Component{
    render(){
    if(this.props.pathname !=='signOut'){
        return(
            <a href="/admin" id="signOut">
                <i className="fas fa-arrow-left"></i> Back To Admin Page
            </a>
        )
    }
    else{
       return(
        <a href="/" id="signOut">
            <i className="fas fa-arrow-left"></i> Sign out
        </a>
        ) 
    }
}
}
export default Toolbar;