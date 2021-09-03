import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Home from "./pages-eng/index";
import Aboutus from "./pages-eng/aboutus";
import Contactus from "./pages-eng/contactus";
import Properties from "./pages-eng/properties";
import Seminar from "./pages-eng/seminar"
import Details from "./pages-eng/details"
import UploadPage from "./pages-admin/upload"

class Eng extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' render={(props) => <Home chgln={this.props.chgln} {...props} />}/>
                    <Route exact path='/aboutus' render={(props) => <Aboutus chgln={this.props.chgln} {...props}/>}/>
                    <Route exact path='/contactus' render={(props) => <Contactus chgln={this.props.chgln} {...props}/>}/>
                    <Route exact path='/properties' component={Properties}/>
                    <Route exact path='/seminar' component={Seminar}/>
                    <Route exact path='/properties/:title' component={Details}/>
                    <Route exact path='/admin' component={UploadPage}/>
                </Switch>
            </Router>
        )
    }
}

export default Eng;