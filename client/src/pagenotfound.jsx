import React from "react"
import {Link} from 'react-router-dom'

const PageNotFound = () =>{
    return(<div style={{backgroundColor:'#BE2C2D', color: 'white', textAlign:'center', height:'100vh',paddingTop:'40vh'}}>
        <h1>404</h1>
        <h2>Page not found!</h2>
        <Link to='/' style={{margin:'30px auto',width:'200px',border:'2px solid white',display:'block',color: 'white',padding:'10px'}}>Visit HomePage</Link>
    </div>
    )
}

export default PageNotFound