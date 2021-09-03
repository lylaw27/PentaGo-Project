import React from 'react';

class UploadPage extends React.Component{
    constructor(){
        super();
        this.state = {
            features: 3
        }
        this.AddHandler = this.AddHandler.bind(this);
        this.DeleteHandler = this.DeleteHandler.bind(this);
    }
    AddHandler(){
        this.setState({features: this.state.features + 1});
    }
    DeleteHandler(){
        if(this.state.features>0){
        this.setState({features: this.state.features - 1});
    }
    }
    render(){
        var featuresInput = [];
        var i;
        for(i=0;i<this.state.features;i++){
            featuresInput.push(<input type="text" id="uploadfeatures" name="features[]"/>);
        }
        return(
            <div id="uploadpage">
                <img alt="" src={require('../images/logo.svg')}/>
                <h1>Upload Form</h1>
                    <form action="/upload" method="POST" enctype="multipart/form-data">
                        <label htmlFor="Image">Image:</label>
                        <input type="file" name="listimg" accept="image/*"></input><br/>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="uploadtitle" name="title"/><br/>
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="uploadaddress" name="address"/><br/>
                        <label htmlFor="price">Price:</label>
                        <input type="number" id="uploadprice" name="price"/><br/>
                        <label htmlFor="area">Area (sq ft.):</label>
                        <input type="number" id="uploadarea" name="area"/><br/>
                        <label htmlFor="bedroom">No. of bedrooms:</label>
                        <input type="number" id="uploadbedroom" name="bedroom"/><br/>
                        <label htmlFor="bathroom">No. of bathrooms:</label>
                        <input type="number" id="uploadbathroom" name="bathroom"/><br/>
                        <label htmlFor="features">Features:</label>
                        <ul>
                        {featuresInput.map(feature => <li>{feature}</li>)}
                        </ul>
                        <button type="button" onClick={this.AddHandler}>Add <i class="fas fa-plus"></i></button>
                        <button type="button" onClick={this.DeleteHandler}>Delete <i class="fas fa-times"></i></button><br/>
                        <label htmlFor="description">Description:</label>
                        <textarea id="uploaddescription" name="description"/><br/>
                        <input type="submit" value="Upload"/>
                        <div id="blank"/>
                    </form>
            </div>
        )
    }
}

export default UploadPage;