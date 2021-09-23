import React from 'react';
import axios from 'axios';

class PropertyPagination extends React.Component{
    constructor(){
        super();
        this.state = {
            maxPage: null
        }
    }
    getPropertyCount = () => {
        axios.get('/propertyListings/count')
        .then((res)=>{
            let maxpage = Math.ceil(res.data/3)
            this.setState({maxPage: maxpage})
        })
    }
    componentDidMount(){
        getPropertyCount();
    }
    render(){
    return(
        <div id='pageBar'>
            <div>
                
            </div>
        </div>
    )    
    }
}

export default PropertyPagination;