import React from 'react';
import './css/style.css';
import './css/fix.css';
import './css/blog-admin.css';
import './css/details.css';
import './css/upload.css';
import './css/pagination.css';
import './css/adminhome.css';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

import Home from "./pages-blog/homepage.jsx";
import BlogPage from "./pages-blog/blogpage.jsx";
import Blogcontent from "./pages-blog/blog-content.jsx";
import CreateIgPost from "./pages-admin/createigpost.jsx";
import EditIgPost from "./pages-admin/editigpost.jsx";
import CreateBlog from "./pages-admin/createblog.jsx";
import EditBlog from "./pages-admin/editblog";
import AdminDashboard from "./pages-admin/admin-dashboard.jsx";
import AdminIgPost from "./pages-admin/admin-IgPost.jsx";
import AdminBlog from "./pages-admin/admin-Blog.jsx";
import PageNotFound from "./pagenotfound";

class App extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/blog' component={BlogPage}/>
                    <Route exact path='/admin' component={AdminDashboard}/>
                    <Route exact path='/admin/igpost' component={AdminIgPost}/>
                    <Route exact path='/admin/igpost/upload' component={CreateIgPost}/>
                    <Route exact path='/admin/igpost/upload/:blogId' component={EditIgPost}/>
                    <Route exact path='/admin/blog' component={AdminBlog}/>
                    <Route exact path='/admin/blog/upload' component={CreateBlog}/>
                    <Route exact path='/admin/blog/upload/:blogId' component={EditBlog}/>
                    <Route exact path='/admin/blog/:blogId' component={Blogcontent}/>
                    <Route exact path='/admin/igpost/:blogId' component={Blogcontent}/>
                    <Route exact path='/blog/:blogId' component={Blogcontent}/>
                    <Route exact path='/igpost/:blogId' component={Blogcontent}/>
                    <Route path='/404' component={PageNotFound}/>
                    <Redirect from='/' to='/?page=1'/>
                    <Redirect from='*' to='/404' />
                </Switch>
            </Router>
        )
    }
}

export default App;