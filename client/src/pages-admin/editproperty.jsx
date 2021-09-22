import React from 'react';
import axios from 'axios';
import Toolbar from './toolbar';

class EditProperty extends React.Component{
    constructor(){
        super();
        this.state = {
            submitDisabled: false,
            featureCount: 3,
            _id:'',
            title: "",
            address: "",
            price: "",
            area: "",
            bedroom: "",
            bathroom: "",
            description: "",
            feature: [],
        }
        this.AddHandler = this.AddHandler.bind(this);
        this.DeleteHandler = this.DeleteHandler.bind(this);
    }
    getPropertyDetail = () => {
        let propertyId = this.props.match.params.propertyId
        axios.get(`/api/propertyListings/${propertyId}`)
        .then((res) => {
            this.setState(res.data);
            this.setState({featureCount: this.state.feature.length})
        })
    }
    componentDidMount(){
        this.getPropertyDetail();
    }
    AddHandler(){
        this.setState({featureCount: this.state.featureCount + 1});
    }
    DeleteHandler(){
        if(this.state.featureCount>0){
        this.setState({featureCount: this.state.featureCount - 1});
        let deleteFeature = this.state.feature;
        deleteFeature.splice(this.state.featureCount-1,1)
        this.setState({feature : deleteFeature})
    }
    }
    ChangeHandler = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        if(name === "feature"){                 //handle change for feature array // care undefined empty value in array
            const index = target.getAttribute("data-key");
            let featureInput = this.state.feature;
            featureInput[index] = value;
            this.setState({
                feature: featureInput
            })
        }
        else{
            this.setState({
                [name]: value
            })
        }
    }
    submit = (e) => {
        e.preventDefault();
        const submission = {
            title: this.state.title,
            address: this.state.address,
            price: this.state.price,
            area: this.state.area,
            bedroom: this.state.bedroom,
            bathroom: this.state.bathroom,
            desciption: this.state.description,
            feature: this.state.feature,
        };
        this.setState({submitDisabled: true});
        axios.put(`/api/propertyListings/${this.state._id}`,submission)
        .then(() =>{
            alert('Edit success!');
            this.setState({submitDisabled: false})
            console.log('Data saved!');
        })
        .catch(() => {
            alert('Error 505!');
            this.setState({submitDisabled: false})
            console.log('Server error!');
        })
    }
    render(){
        var featuresInput = [];
        var i;
        for(i=0;i<this.state.featureCount;i++){
            featuresInput.push(<input type="text" id="uploadfeatures" data-key={i} value ={this.state.feature[i]} name="feature" onChange={this.ChangeHandler} required/>);
        }
        return(
            <div id="uploadpage">
            <Toolbar pathname='Home'/>
            <div className="overlap">
                <h2>Edit Property</h2>
                    <form  onSubmit={this.submit}>
                        <label htmlFor="title">Title:</label>
                        <input type="text" id="uploadtitle" name="title" value={this.state.title} onChange={this.ChangeHandler} required/><br/>
                        <label htmlFor="address">Address:</label>
                        <input type="text" id="uploadaddress" name="address" value={this.state.address} onChange={this.ChangeHandler} required/><br/>
                        <label htmlFor="price">Price:</label>
                        <input type="text" id="uploadprice" name="price" value={this.state.price} onChange={this.ChangeHandler} required/><br/>
                        <label htmlFor="area">Area (sq ft.):</label>
                        <input type="text" id="uploadarea" name="area" value={this.state.area} onChange={this.ChangeHandler} required/><br/>
                        <label htmlFor="bedroom">No. of bedrooms:</label>
                        <input type="text" id="uploadbedroom" name="bedroom" value={this.state.bedroom} onChange={this.ChangeHandler} required/><br/>
                        <label htmlFor="bathroom">No. of bathrooms:</label>
                        <input type="text" id="uploadbathroom" name="bathroom" value={this.state.bathroom} onChange={this.ChangeHandler} required/><br/>
                        <label htmlFor="features">Features:</label>
                        <ul>
                        {featuresInput.map((feature,i) => <li key={i}>{feature}</li>)}
                        </ul>
                        <button type="button" onClick={this.AddHandler}>Add <i className="fas fa-plus"></i></button>
                        <button type="button" onClick={this.DeleteHandler}>Delete <i className="fas fa-times"></i></button><br/>
                        <label htmlFor="description">Description:</label>
                        <textarea id="uploaddescription" name="description" value={this.state.description} onChange={this.ChangeHandler} required/><br/>
                        <input type="submit" value="Upload" disabled={this.state.submitDisabled}/>
                        <div id="blank"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default EditProperty;