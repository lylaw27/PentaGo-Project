import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Toolbar from './toolbar.jsx';

const EditBlog = () =>{
    const [blogContent,setBlogContent] = useState({
        _id: "",
        title: "",
        subtitle: "",
        article: "",
        timestamp: "",
        category: ""
    });
    const [blogImage,setBlogImage] = useState([]);
    const [submitDisabled,setSubmitDisabled] = useState(false);
    const {blogId} = useParams();
    const getPropertyDetail = () => {
        axios.get(`/api/blogListings/${blogId}`)
        .then((res) => {
            setBlogContent(res.data);
        })
    }
    useEffect(()=>{
        getPropertyDetail();
    },[])
    const ChangeHandler = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setBlogContent({...blogContent,[name]: value});
        console.log(blogContent);
    }
    const ImageSelectionHandler = (e) => {
        setBlogImage(e.target.files);
    }
    const submit = (e) => {
        e.preventDefault();
        const submission = JSON.stringify(blogContent);
        let formData = new FormData();
        for(let i=0;i<blogImage.length;i++){
            formData.append('blogImage',blogImage[i]);
        }
        formData.append('blogInfo',submission);
        setSubmitDisabled(true);
        axios({
            url:`/api/blogListings/${blogId}`,
            method:'PUT',
            headers: {"Content-Type": "multipart/form-data" },
            data: formData
        })
        .then(() =>{
            alert('Upload succeed!');
            setSubmitDisabled(false);
            console.log('Data saved!');
        })
        .catch(() => {
            alert('Error 505!');
            setSubmitDisabled(false);
            console.log('Server error!');
        })
    }
    return(
        <div id="uploadpage">
        <Toolbar pathname='Home'/>
        <div className="overlap">
            <h2>Edit Blog</h2>
                <form onSubmit={submit}>
                    <label htmlFor="Image">Image:</label>
                    <input type="file" name="imagefile" accept="image/*" onChange={ImageSelectionHandler} multiple/><br/>
                    <label htmlFor="title">Title:</label>
                    <input type="text" name="title" value={blogContent.title} onChange={ChangeHandler} required/><br/>
                    <label htmlFor="subtitle">Subtitle:</label>
                    <input type="text" name="subtitle" value={blogContent.subtitle} onChange={ChangeHandler} required/><br/>
                    <label htmlFor="timestamp">Date:</label>
                    <input type="date" name="timestamp" value={blogContent.timestamp} onChange={ChangeHandler}/><br/>
                    <label htmlFor="videoUrl">Youtube Link:</label>
                    <input type="text" name="videoUrl" value={blogContent.videoUrl} onChange={ChangeHandler}/><br/>
                    <label htmlFor="category">Category:</label>
                    <select name="category" onChange={ChangeHandler} value={blogContent.category}>
                            <option value="樓價">樓價</option>
                            <option value="專題">專題</option>
                            <option value="歷史文化">歷史文化</option>
                            <option value="就業">就業</option>
                            <option value="教育">教育</option>
                        </select>
                    <label htmlFor="article">Article:</label>
                    <textarea name="article" value={blogContent.article} onChange={ChangeHandler} required/><br/>
                    <input type="submit" value="Upload" disabled={submitDisabled}/>
                    <div id="blank"/>
                </form>
            </div>
        </div>
    )
}

export default EditBlog;