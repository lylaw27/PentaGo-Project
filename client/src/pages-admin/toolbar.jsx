import React from "react";

class Toolbar extends React.Component{
    render(){
        return(
        <header id='adminHeader'>
            <PrevPage pathname={this.props.pathname}/>
            <a id="adminLogo" href="/admin"><img alt="" src={require('../images/logo.svg')}/></a>
            <div id="toolbar">
                <a>Hello, Ken !</a>
            </div>
        </header>
        )
    }
}

class PrevPage extends React.Component{
    render(){
    if(this.props.pathname !='signOut'){
        return(
            <a href="/admin" id="signOut">
                <i className="fas fa-arrow-left"></i> Back To Property List
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