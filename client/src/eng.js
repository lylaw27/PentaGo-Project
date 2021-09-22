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
import CreateProperty from "./pages-admin/createproperty"
import EditProperty from "./pages-admin/editproperty"
import AdminProperty from "./pages-admin/home"

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
                    <Route exact path='/properties/:propertyId' render={(props) => <Details prevPath='/properties' {...props}/>}/>
                    <Route exact path='/admin/upload' component={CreateProperty}/>
                    <Route exact path='/admin/upload/:propertyId' component={EditProperty}/>
                    <Route exact path='/admin' component={AdminProperty}/>
                    <Route exact path='/admin/:propertyId' render={(props) => <Details prevPath='/admin' {...props}/>}/>
                </Switch>
            </Router>
        )
    }
}

export default Eng;