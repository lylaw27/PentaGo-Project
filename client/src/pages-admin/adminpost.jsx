import React,{useState,useEffect} from 'react';
import Toolbar from './toolbar.jsx';
import {Link, useLocation,useHistory} from 'react-router-dom';
import axios from 'axios';
import BlogPagination from '../blogpagination.jsx'

const AdminBlogListings = () => {
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
    let query = useLocation().search
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
    const deleteBlog = (blogId) =>{
        let confirmDelete = window.confirm('Are you sure you want to delete this blog?')
        if(confirmDelete){
            axios.delete(`/api/blogListings/${blogId}`)
            .then(() => {
                alert('Data has been deleted!')
            })
            .catch(()=>{
                console.log('Error deleting data!')
            }) 
        }
        else{
            window.close();
        }
    }
    useEffect(()=>{
        getBlogList();
    },[query])
    if(loading){
        return <div id='loading'><h1>Loading...</h1></div>
    }
    return(
        <div>
            <Link to='/admin/upload' className="listed" id='addBlog'>
                <h1><i className="fas fa-upload"></i>Add New Blog</h1>
            </Link>
            {blogList.map((blog,i) =>
            <div className="listed" key={i}>
                <img alt="" src={blog.imagefile}/>
                <div className="list-content">
                    <h2>{blog.title}</h2>
                    <h4 id='adminlist-room'>
                        <span><i className="fas fa-calendar-day"></i>{blog.uploadDate}</span>
                    </h4>
                </div>
                <div className="list-price" id="adminlist-price">
                    <Link to={`/admin/upload/${blog._id}`} className='buttonLink'>
                        Edit <i className="fas fa-edit"></i>
                    </Link>
                        <span onClick={() => {deleteBlog(blog._id)}} className='buttonLink'>Delete <i className="fas fa-trash"></i></span>
                    <Link to={`/admin/${blog._id}`} className='buttonLink'>
                        Preview <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>)}
            <BlogPagination/>
        </div>
    )}


const AdminBlog = () => {
    return (
        <div className="adminBody">
            <Toolbar/>
            <div className="overlap">
                <div id="blog-admin">
                    <section id="blog-filter">
                        <input htmlFor="title" placeholder="Search title..." id="admin-blog-search"/>
                    </section>
                    <section id="listings">
                        <AdminBlogListings/>              
                    </section>             
                </div>
            </div>
        </div>
    );
}

export default AdminBlog;