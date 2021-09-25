import React from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

import Home from "./pages-eng/index.jsx";
import Aboutus from "./pages-eng/aboutus.jsx";
import Contactus from "./pages-eng/contactus.jsx";
import Properties from "./pages-eng/properties.jsx";
import Seminar from "./pages-eng/seminar.jsx"
import Details from "./pages-eng/details.jsx"
import CreateProperty from "./pages-admin/createproperty.jsx"
import EditProperty from "./pages-admin/editproperty.jsx"
import AdminProperty from "./pages-admin/home.jsx"

class Eng extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' render={(props) => <Home chgln={this.props.chgln} {...props} />}/>
                    <Route exact path='/aboutus' render={(props) => <Aboutus chgln={this.props.chgln} {...props}/>}/>
                    <Route exact path='/contactus' render={(props) => <Contactus chgln={this.props.chgln} {...props}/>}/>
                    <Route exact path='/properties' render={(props) => <Properties {...props}/>}/>
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