import React, { useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../App.jsx";


const Toolbar = () =>{
    const authContext = useContext(AuthContext)
    const logout = (e) =>{
        authContext.setAuth(false)
    }
    return(
        <div className='adminMenu'>
            <Link to='/admin'><img className="logo" alt="" src={require('../images/logo.svg')}/></Link>
            <Link to='/admin' className="menu-list">
                <i className="fa-brands fa-flipboard"/>DashBoard<i className="fa-solid fa-angle-right"/>
            </Link>
            <Link to='/admin/igpost' className="menu-list">
                <i className="fa-brands fa-instagram"/>IG Posts<i className="fa-solid fa-angle-right"/>
            </Link>
            <Link to='/admin/blog' className="menu-list">
                <i className="fa-regular fa-newspaper"/>Blogs<i className="fa-solid fa-angle-right"/>
            </Link>
            <Link className="menu-list">
                <i className="fa-solid fa-gear"/>Contact Admin<i className="fa-solid fa-angle-right"/>
            </Link>
            <div className="menu-user menu-list">
                <i className="fa-solid fa-user"/>Ken Au<Link to="/" onClick={logout}><i className="fa-solid fa-right-from-bracket"></i></Link>
            </div>
        </div>
        )
}

export default Toolbar;