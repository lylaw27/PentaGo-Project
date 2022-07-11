import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link,useLocation} from 'react-router-dom';

const BlogPagination = () =>{
    const [pages ,setPage] = useState([]);
    const [maxPage ,setMaxPage] = useState(0);
    let currentPage = parseInt(new URLSearchParams(useLocation().search).get('page'));
    let currentCategory = new URLSearchParams(useLocation().search).get('category');
    let path = useLocation().pathname;
    if(!currentPage){
        currentPage = 1;
    }
    let apipath = 'igPostListingsCount'
    if(path === '/blog' || path === '/admin/blog'){
        apipath = 'blogListingsCount'
    }
    const getBlogCount = () => {
        axios.get(`/api/${apipath}?category=${currentCategory}`)
        .then((res)=>{
            setMaxPage(Math.ceil(parseInt(res.data)/8))
            let pagearray = Array.from({length: maxPage}, (_, i) => i + 1)
            if(maxPage >= 5){
                if(currentPage === 1 || currentPage === 2){
                    setPage(pagearray.slice(0,5));
                }
                else if(currentPage === maxPage || currentPage === maxPage-1){
                    setPage(pagearray.slice(-5));
                }
                else{
                    setPage(pagearray.slice(currentPage-3,currentPage+2));
                }
            }
            else{
                setPage(pagearray)
            }
        })
    }
    useEffect(()=>{
        getBlogCount();
        console.log(maxPage)
    },[maxPage,currentPage,currentCategory,path])
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
            <Link to={{search: `?page=${currentPage+1}&category=${currentCategory}`}} className={(currentPage === maxPage) ? 'pageDisabled':'pageNumber'}>
                <i className="fas fa-angle-right"></i>
            </Link>
        </div>
    )
    }

export default BlogPagination;