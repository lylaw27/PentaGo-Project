import React from 'react';
import './css/style.css';
import './css/fix.css';
import './css/blog-admin.css';
import './css/details.css';
import './css/upload.css';
import './css/pagination.css';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from "./pages-blog/index.jsx";
import Blogcontent from "./pages-blog/blog-content.jsx";
import CreateBlog from "./pages-admin/createblog.jsx"
import EditBlog from "./pages-admin/editblog.jsx"
import AdminBlog from "./pages-admin/adminhome.jsx"
import PageNotFound from "./pagenotfound"

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/admin/upload' component={CreateBlog}/>
                    <Route exact path='/admin/upload/:blogId' component={EditBlog}/>
                    <Route exact path='/admin' component={AdminBlog}/>
                    <Route path='/404' component={PageNotFound}/>
                    <Route exact path='/:blogId' component={Blogcontent}/>
                    <Route exact path='/admin/:blogId' component={Blogcontent}/>
                    <Redirect from='/' to='/?page=1'/>
                    <Redirect from='*' to='/404' />
                </Switch>
            </Router>
        )
    }
}

export default App;