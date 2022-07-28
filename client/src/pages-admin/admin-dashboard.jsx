import React,{ useState,useEffect } from 'react';
import axios from 'axios';
import Toolbar from './toolbar.jsx';

const AdminDashboard = () => {
    const [dashboardData,setDashboardData] = useState({
        igCount: '0',
        blogCount: '0'
    }) 
    const getDashboardData = () =>{
        axios.get('/api/adminDashboard')
        .then((res) => {
            setDashboardData(res.data);
        })
        .catch(()=>{
            console.log('Error getting data!')
        })
    }
    useEffect(()=>{
        getDashboardData();
    },[0])
    return (
        <div>
            <Toolbar/>
            <div className='admin-body'>
                <div className='db-title'>Dashboard
                <hr/>
                </div>
                <div className='db-content'>
                    <div className='db-stats'>
                        <i className="fa-brands fa-instagram"/>
                        <div className="db-count">{dashboardData.igCount}</div>
                        <div>IG Posts</div>
                    </div>
                    <div className='db-stats'>
                        <i className="fa-regular fa-newspaper"/>
                        <div className="db-count">{dashboardData.blogCount}</div>
                        <div>Blogs</div>
                    </div>
                    <div className='db-stats'>
                        <i className="fa-solid fa-file-contract"/>
                        <div className="db-count">1</div>
                        <div>Subcriptions</div>
                    </div>
                    <div className='db-stats'>
                        <i className="fa-solid fa-chart-line"/>
                        <div className="db-count">1</div>
                        <div>Monthly Views</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;