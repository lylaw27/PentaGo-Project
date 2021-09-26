import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link,useLocation} from 'react-router-dom';

const PropertyPagination = () =>{
    const [pages ,setPage] = useState([]);
    let currentPage = parseInt(new URLSearchParams(useLocation().search).get('page'));
    let path = useLocation().pathname;
    console.log(path)
    if(!currentPage){
        currentPage = 1;
    }
    const getPropertyCount = () => {
        axios.get('/api/propertyListingsCount')
        .then((res)=>{  
            let maxpage = Math.ceil(parseInt(res.data)/2)
            let pagearray = Array.from({length: maxpage}, (_, i) => i + 1)
            setPage(pagearray);
        })
    }
    useEffect(()=>{
        getPropertyCount();
    },[currentPage])
    return(
        <div id='pageBar'>
            <Link to={`${path}?page=${currentPage-1}`} className={(currentPage === 1) ? 'pageDisabled':'pageNumber'}>
                <i className="fas fa-angle-left"></i>
            </Link>
            {pages.map((number,i) => 
            <Link to={`${path}?page=${number}`} key={i} className={(currentPage === number) ? 'pageCurrent':'pageNumber'}>
                {number}
            </Link>
            )}
            <Link to={`${path}?page=${currentPage+1}`} className={(currentPage === pages.length) ? 'pageDisabled':'pageNumber'}>
                <i className="fas fa-angle-right"></i>
            </Link>
        </div>
    )    
    }

export default PropertyPagination;