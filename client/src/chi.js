import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Home from "./pages-chi/index";
import Aboutus from "./pages-chi/aboutus";
import Contactus from "./pages-chi/contactus.jsx";
import Properties from "./pages-chi/properties.jsx";
import Seminar from "./pages-chi/seminar.jsx"

class Chi extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' render={(props) => <Home chgln={this.props.chgln} {...props} />}/>
                    <Route exact path='/aboutus' render={(props) => <Aboutus chgln={this.props.chgln} {...props}/>}/>
                    <Route exact path='/contactus' render={(props) => <Contactus chgln={this.props.chgln} {...props}/>}/>
                    <Route exact path='/properties' component={Properties}/>
                    <Route exact path='/seminar' component={Seminar}/>
                </Switch>
            </Router>
        )
    }
}

export default Chi;