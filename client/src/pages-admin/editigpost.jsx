import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Toolbar from './toolbar.jsx';
import { EditorState, convertFromRaw, convertToRaw  } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const EditIgPost = () =>{
    const [blogContent,setBlogContent] = useState({
        _id: "",
        title: "",
        subtitle: "",
        article: {},
        timestamp: "",
        category: ""
    });
    const [editorState,setEditorState] = useState()
    const [blogImage,setBlogImage] = useState([]);
    const [submitDisabled,setSubmitDisabled] = useState(false);
    const {blogId} = useParams();
    const getPropertyDetail = () => {
        axios.get(`/api/igPostListings/${blogId}`)
        .then((res) => {
            console.log(convertFromRaw(res.data.article))
            setBlogContent(res.data);
            setEditorState(EditorState.createWithContent(convertFromRaw(res.data.article)))
        })
    }
    useEffect(()=>{
        getPropertyDetail();
    },[])
    const onEditorStateChange = (value) =>{
        setEditorState(value);
        setBlogContent({...blogContent, article: convertToRaw(editorState.getCurrentContent())});
    }
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
            url:`/api/igPostListings/${blogId}`,
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
        <div>
            <Toolbar/>
            <div className='admin-body uploadpage'>
            <h2>Edit IG Post</h2>
                <form onSubmit={submit}>
                    <label htmlFor="Image">Image:</label>
                    <input type="file" name="imagefile" accept="image/*" onChange={ImageSelectionHandler} multiple/><br/>
                    <label htmlFor="title">Title:</label>
                    <input className="input-border" type="text" name="title" value={blogContent.title} onChange={ChangeHandler} required/><br/>
                    <label htmlFor="subtitle">Subtitle:</label>
                    <input className="input-border" type="text" name="subtitle" value={blogContent.subtitle} onChange={ChangeHandler} required/><br/>
                    <label htmlFor="timestamp">Date:</label>
                    <input className="input-border" type="date" name="timestamp" value={blogContent.timestamp} onChange={ChangeHandler}/><br/>
                    <label htmlFor="videoUrl">Youtube Link:</label>
                    <input className="input-border" type="text" name="videoUrl" value={blogContent.videoUrl} onChange={ChangeHandler}/><br/>
                    <label htmlFor="category">Category:</label>
                    <select className="input-border" name="category" onChange={ChangeHandler} value={blogContent.category}>
                            <option value="樓價">樓價</option>
                            <option value="專題">專題</option>
                            <option value="歷史文化">歷史文化</option>
                            <option value="就業">就業</option>
                            <option value="教育">教育</option>
                        </select>
                    <label htmlFor="article">Article:</label>
                    <div className="input-border textarea">
                            <Editor
                                toolbar={{
                                    fontFamily: {options: ['Openhuninn','Noto Sans TC','Montserrat','PMingLiU','Arial', 'Times New Roman']}
                                }}
                                editorState={editorState}
                                onEditorStateChange={onEditorStateChange}
                                localization={{
                                    locale: 'zh_tw',
                                }}
                            />
                        </div>
                    <input className="input-border submit-button" type="submit" value="Upload" disabled={submitDisabled}/>
                    <div id="blank"/>
                </form>
            </div>
        </div>
    )
}

export default EditIgPost;