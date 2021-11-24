import React,{useState,useEffect,useRef} from 'react';
import {Link, useLocation,useHistory} from 'react-router-dom';
import BlogPagination from '../blogpagination.jsx'
import BlogSidebar from './blog-sidebar.jsx';
import BlogSubscription from './subscription.jsx';
import Header from './header.jsx';
import Footer from './footer.jsx';
import axios from 'axios';

const Bloglist = ()=>{
  const [blogList,setBlogList] = useState([
    {
        _id: '', 
        imagefile: "",
        title: "",
        subtitle: "",
        article: "",
        uploadDate: "",
        category: ""
    }
    ]);
const [loading,setLoading] = useState(true);
let history = useHistory();
let query = useLocation().search;

const getBlogList = () =>{
    axios.get('/api/blogListings' + query)
    .then((res) => {
        if(res.data==='notfound'){
            history.push('/404')
            return function cleanup(){}
        }
        setBlogList(res.data);
        setLoading(false);
    })
    .catch(()=>{
        console.log('Error getting data!')
    })
}

useEffect(()=>{
  getBlogList();
  window.scrollTo(0, 0);
},[query])
if(loading){
    return <div id='loading'><h1>Loading...</h1></div>
}
  return(
    <div id="blog-content">
      {blogList.map((blogList,i) =>
      <div className="blog-list" key={i}>
        <div className="blog-date">
        {blogList.uploadDate}
        </div>
          <img alt="" src={blogList.imagefile}/>
          <span className="blog-tag">
          {blogList.category}
          </span>
        <h2>
        {blogList.title}
        </h2>
        <p>
        {blogList.subtitle}
        </p>
        <Link to={`/${blogList._id}`} className="blog-read">
          閲讀更多
        </Link>
      </div>)}
    </div>
 )
}

const Home =()=>{
  const scrollRef = useRef(null);
  const scrollToSub = () =>{
    scrollRef.current.scrollIntoView({behavior: 'smooth'});
  }
    return(
    <div>
      <Header/>
      <div className="overlap">
      <div id="background">
        <div id="title">
            <h2>Your UK Property Navigator</h2><h2>英 國 物 業 領 航</h2>
        </div>
      </div>
      <section id="blog-section">
        <div id="blog-body">
          <Bloglist/>
          <BlogSidebar scollFunc={scrollToSub}/>
        </div>
        <BlogPagination/>
      </section>
      <div ref={scrollRef}>
        <BlogSubscription />
      </div>
    <Footer/>
    </div>
    </div>
    )
}

export default Home;