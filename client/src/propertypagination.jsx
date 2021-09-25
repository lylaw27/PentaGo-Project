import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link,useLocation} from 'react-router-dom';

const PropertyPagination = () =>{
    const [pages ,setPage] = useState([]);
    let currentPage = parseInt(new URLSearchParams(useLocation().search).get('pgn'));
    const getPropertyCount = () => {
        axios.get('/api/propertyListingsCount')
        .then((res)=>{
            let maxpage = Math.ceil(parseInt(res.data)/3)
            let pagearray = Array.from({length: maxpage}, (_, i) => i + 1)
            setPage(pagearray);
        })
    }
    useEffect(()=>{
        getPropertyCount();
    },[currentPage]) 
    
    return(
        <div id='pageBar'>
            <Link to={`/properties?pgn=${currentPage-1}`} className={(currentPage === 1) ? 'pageDisabled':'pageNumber'}>
                <i className="fas fa-angle-left"></i>
            </Link>
            {pages.map((number,i) => 
            <Link to={`/properties?pgn=${number}`} key={i} className={(currentPage === number) ? 'pageCurrent':'pageNumber'}>
                {number}
            </Link>
            )}
            <Link to={`/properties?pgn=${currentPage+1}`} className={(currentPage === pages.length) ? 'pageDisabled':'pageNumber'}>
                <i className="fas fa-angle-right"></i>
            </Link>
        </div>
    )    
    }

export default PropertyPagination;