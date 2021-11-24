import React, {useCallback, useState} from 'react';
import axios from 'axios';
import Toolbar from './toolbar.jsx';

const CreateBlog = () =>{
    const [blogContent,setBlogContent] = useState({
        imagefile: "",
        title: "",
        subtitle: "",
        article: "",
        uploadDate: "",
        category: "樓價"
    });
    const [submitDisabled,setSubmitDisabled] = useState(false);
    const ChangeHandler = (e) =>{
        const target = e.target;
        const name = target.name;
        const value = target.value;
        setBlogContent({...blogContent,[name]: value});
        console.log(blogContent);
    }
    const ImageSelectionHandler = (e) => {   
        setBlogContent({
            ...blogContent,imagefile: e.target.files[0]
        })
        
    }
    const setDate = () =>{
        let nowTime = new Date(blogContent.uploadDate);
        let chineseMonth = ['一','二','三','四','五','六','七','八','九','十','十一','十二']
        let nowMonth = chineseMonth[nowTime.getMonth()];
        let nowDate = nowTime.getDate();
        let nowYear = nowTime.getFullYear();
        setBlogContent({...blogContent,uploadDate: nowMonth + "月 " + nowDate + ", " + nowYear});
    }
    const submit = (e) => {
        e.preventDefault();
        const submission = JSON.stringify({
            title: blogContent.title,
            subtitle: blogContent.subtitle,
            article: blogContent.article,
            uploadDate: blogContent.uploadDate,
            category: blogContent.category
        });
        let formData = new FormData();
        formData.append('blogImage',blogContent.imagefile,e.target.imagefile.name);
        formData.append('blogInfo',submission);
        setSubmitDisabled(true);
        axios({
            url:'/api/blogListings',
            method:'POST',
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
    console.log(blogContent)
        return(
            <div id="uploadpage">
            <Toolbar pathname='Home'/>
            <div className="overlap">
                <h2>Create Blog</h2>
                    <form onSubmit={submit}>
                        <label htmlFor="Image">Image:</label>
                        <input type="file" name="imagefile" accept="image/*" onChange={ImageSelectionHandler} required/><br/>
                        <label htmlFor="title">Title:</label>
                        <input type="text" name="title" value={blogContent.title} onChange={ChangeHandler} required/><br/>
                        <label htmlFor="subtitle">Subtitle:</label>
                        <input type="text" name="subtitle" value={blogContent.subtitle} onChange={ChangeHandler} required/><br/>
                        <label htmlFor="uploadDate">Date:</label>
                        <input type="date" name="uploadDate" value={blogContent.uploadDate} onChange={ChangeHandler}/><br/>
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
                        <input onClick={setDate} type="submit" value="Upload" disabled={submitDisabled}/>
                        <div id="blank"/>
                    </form>
                </div>
            </div>
        )
}

export default CreateBlog;