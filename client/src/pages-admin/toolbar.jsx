import React from "react";
import {Link} from "react-router-dom";

const Toolbar = () =>{
    return(
        <div className='adminMenu'>
            <Link to='/admin'><img className="logo" alt="" src={require('../images/logo.svg')}/></Link>
            <Link to='/admin' className="menu-list">
                <i className="fa-brands fa-flipboard"/>DashBoard<i class="fa-solid fa-angle-right"/>
            </Link>
            <Link to='/admin/igpost' className="menu-list">
                <i class="fa-brands fa-instagram"/>IG Posts<i class="fa-solid fa-angle-right"/>
            </Link>
            <Link to='/admin/blog' className="menu-list">
                <i className="fa-regular fa-newspaper"/>Blogs<i class="fa-solid fa-angle-right"/>
            </Link>
            <Link className="menu-list">
                <i className="fa-solid fa-gear"/>Contact Admin<i class="fa-solid fa-angle-right"/>
            </Link>
            <div className="menu-user menu-list">
                <i class="fa-solid fa-user"/>Ken Au<Link to="/"><i class="fa-solid fa-right-from-bracket"></i></Link>
            </div>
        </div>
        )
}

export default Toolbar;