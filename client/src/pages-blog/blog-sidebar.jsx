import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogSidebar = props =>{
    const [recentBlog,setRecentBlog] = useState([{
        _id:"",
        title: ""
    }])
    const getBlogRecent = () =>{
        axios.get('/api/blogListings')
        .then((res)=>{
            setRecentBlog(res.data)
        })
        .catch(()=>{
            console.log('Error getting data!')
        })
    }
    useEffect(()=>{
        getBlogRecent();
    },[])
    return(
    <div id="blog-sidebar">
        <div className="blog-sidebox">
            <h1>關於我們</h1>
            <img id="queenimg" alt="" src={require('../images/queen.jpg')}/>
            <p>身處香江 遠眺英倫</p>
            <p>不列顛島 地大物博</p>
            <p>歷史文化 璀璨奪目</p>
            <p>物業選擇 恆河沙數</p>
            <p>民間分析 逐一探討</p>
        </div>
        <div className="blog-sidebox" id="blog-sidebox-signup">
            <h2>歡迎訂閲並接受我們最新的資訊！</h2>
            <div id="blog-sidebox-signupbutton" onClick={props.scollFunc}>
            立即訂閲
            </div>
        </div>
        <div className="blog-sidebox" id="blog-sidebox-post">
            <h1>最新帖子</h1>
            {recentBlog.map((blogList,i)=>
                <Link key={i} to={`/${blogList._id}`}>
                    <p>{blogList.title}</p>
                </Link>
            )}
        </div>
        <div className="blog-sidebox">
            <h1>聯絡我們</h1>
            <div id="icon-wrapper">
                <a href="https://www.facebook.com/PentaGo-%E8%8B%B1%E5%9C%8B%E7%89%A9%E6%A5%AD%E9%A0%98%E8%88%AA-101672148357502/?view_public_for=101672148357502"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/pentagoproperty/"><i className="fab fa-instagram"/></a>
                <a href="https://api.whatsapp.com/send?phone=85251133670"><i className="fab fa-whatsapp"/></a>
                <a href="mailto:cs@pentagoproperty.com"><i className="far fa-envelope"/></a>
            </div>
        </div>
        <div className="blog-sidebox" id="blog-sidebox-post">
            <h1>分類</h1>
            <Link to='/?category=樓價'><p>樓價</p></Link>
            <Link to='/?category=專題'><p>專題</p></Link>
            <Link to='/?category=歷史文化'><p>歷史文化</p></Link>
            <Link to='/?category=就業'><p>就業</p></Link>
            <Link to='/?category=教育'><p>教育</p></Link>
        </div>
    </div>
  )
}

export default BlogSidebar;