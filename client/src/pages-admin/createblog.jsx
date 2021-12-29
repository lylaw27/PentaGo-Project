import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Toolbar from './toolbar.jsx';
import { EditorState, convertToRaw  } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";


const CreateBlog = () =>{
    const [blogContent,setBlogContent] = useState({
        title: "",
        subtitle: "",
        article: {},
        timestamp: "",
        videoUrl: "",
        category: "樓價"
    });
    const [editorState,setEditorState] = useState(
        EditorState.createEmpty()
    )
    const [blogImage,setBlogImage] = useState([]);
    const [submitDisabled,setSubmitDisabled] = useState(false);
    const ChangeHandler = (e) =>{
        let target = e.target;
        let name = target.name;
        let value = target.value;
        setBlogContent({...blogContent,[name]: value});
        console.log(blogContent);
    }
    const ImageSelectionHandler = (e) => {
        setBlogImage(e.target.files);
    }
    const onEditorStateChange = (value) =>{
        console.log(value)
        setEditorState(value);
        setBlogContent({...blogContent, article: convertToRaw(editorState.getCurrentContent())});
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
            url:'/api/blogListings',
            method:'POST',
            headers: {"Content-Type": "multipart/form-data" },
            data: formData
        })
        .then(() =>{
            alert('Upload succeed!');
            console.log(submission)
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
                <h2>Create Blog</h2>
                    <form onSubmit={submit}>
                        <label htmlFor="Image">Image:</label>
                        <input type="file" name="imagefile" accept="image/*" onChange={ImageSelectionHandler} multiple required/><br/>
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
                        <div style={{ border: "1px solid black", padding: '4px', minHeight: '400px' , backgroundColor: 'white', color: 'black'}}>
                            <Editor
                                editorState={editorState}
                                onEditorStateChange={onEditorStateChange}
                                localization={{
                                    locale: 'zh_tw',
                                }}
                            />
                            
                        </div>
                        <input type="submit" value="Upload" disabled={submitDisabled}/>
                        <div id="blank"/>
                    </form>
                </div>
            </div>
        )
}

export default CreateBlog;