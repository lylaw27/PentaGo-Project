import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link,useLocation} from 'react-router-dom';

const BlogPagination = props =>{
    const [pages ,setPage] = useState([]);
    let currentPage = parseInt(new URLSearchParams(useLocation().search).get('page'));
    let currentCategory = new URLSearchParams(useLocation().search).get('category');
    if(!currentPage){
        currentPage = 1;
    }
    const getBlogCount = () => {
        axios.get(`/api/blogListingsCount?category=${currentCategory}`)
        .then((res)=>{
            let maxpage = Math.ceil(parseInt(res.data)/4)
            let pagearray = Array.from({length: maxpage}, (_, i) => i + 1)
            setPage(pagearray);
        })
    }
    useEffect(()=>{
        getBlogCount();
    },[currentPage,currentCategory])
    return(
        <div id='pageBar'>
            <Link to={{search: `?page=${currentPage-1}&category=${currentCategory}`}} className={(currentPage === 1) ? 'pageDisabled':'pageNumber'}>
                <i className="fas fa-angle-left"></i>
            </Link>
            {pages.map((number,i) => 
            <Link to={{search: `?page=${number}&category=${currentCategory}`}} key={i} className={(currentPage === number) ? 'pageCurrent':'pageNumber'}>
                {number}
            </Link>
            )}
            <Link to={{search: `?page=${currentPage+1}&category=${currentCategory}`}} className={(currentPage === pages.length) ? 'pageDisabled':'pageNumber'}>
                <i className="fas fa-angle-right"></i>
            </Link>
        </div>
    )    
    }

export default BlogPagination;