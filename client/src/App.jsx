import React, {useState ,useContext} from 'react';
import './css/style.css';
import './css/fix.css';
import './css/blog-admin.css';
import './css/details.css';
import './css/upload.css';
import './css/pagination.css';
import './css/adminhome.css';
import './css/login.css';

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
import LoginPage from "./pages-admin/admin-login.jsx";
import PageNotFound from "./pagenotfound";

export const AuthContext = React.createContext();

const App = ()=>{
        const [auth,setAuth] = useState(false);
        return(
            <AuthContext.Provider value={{auth, setAuth}}>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/blog' component={BlogPage}/>
                    <Route exact path='/blog/:blogId' component={Blogcontent}/>
                    <Route exact path='/igpost/:blogId' component={Blogcontent}/>
                    <Route exact path='/admin' component={LoginPage}/>
                    <RouteProtected exact path='/admin/home' component={AdminDashboard}/>
                    <RouteProtected exact path='/admin/igpost' component={AdminIgPost}/>
                    <RouteProtected exact path='/admin/igpost/upload' component={CreateIgPost}/>
                    <RouteProtected exact path='/admin/igpost/upload/:blogId' component={EditIgPost}/>
                    <RouteProtected exact path='/admin/blog' component={AdminBlog}/>
                    <RouteProtected exact path='/admin/blog/upload' component={CreateBlog}/>
                    <RouteProtected exact path='/admin/blog/upload/:blogId' component={EditBlog}/>
                    <RouteProtected exact path='/admin/blog/:blogId' component={Blogcontent}/>
                    <RouteProtected exact path='/admin/igpost/:blogId' component={Blogcontent}/>
                    <Route path='/404' component={PageNotFound}/>
                    <Redirect from='/' to='/?page=1'/>
                    <Redirect from='*' to='/404' />
                </Switch>
            </Router>
            </AuthContext.Provider>
        )
}

const RouteProtected = ({component: Component,...rest}) => {
    const authContext = useContext(AuthContext)
    return(
        <Route {...rest} render={()=> authContext.auth ? <Component/> : <Redirect to='/admin'/>} />
    )
}

export default App;