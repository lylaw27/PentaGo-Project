import React, {useEffect,useState,useRef} from 'react';
import { useParams,useHistory, Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import Header from './header.jsx';
import Footer from './footer.jsx';
import axios from 'axios';
import BlogSidebar from './blog-sidebar.jsx';
import BlogSubscription from './subscription.jsx';
import { EditorState, convertFromRaw} from 'draft-js';
import { Editor } from "react-draft-wysiwyg";

const Blogcontent = () => {
    const [blogContent,setBlogContent] = useState({
        _id: "",
        imagefile: [],
        title: "",
        subtitle: "",
        article: null,
        uploadDate: "",
        category: "",
        videoUrl: ""
    });
    const [blogSuggest,setBlogSuggest] = useState([
    {
        _id: "",
        imagefile: "",
        title: ""
    }
    ])
    let history = useHistory();
    const {blogId} = useParams();
    const scrollRef = useRef(null);
    const currentURL = window.location.href;
    const getBlogDetail = () => {
        axios.get(`/api/blogListings/${blogId}`)
        .then((res) => {
            if(res.data==='notfound'){
                history.push('/404')
                return function cleanup(){}
            }
            let blogDetail = res.data;
            setBlogContent({...blogDetail , article: EditorState.createWithContent(convertFromRaw(res.data.article))});
        })
        .catch(()=>{
            console.log('Error getting data!')
        })
    }
    const getBlogSuggestion = () => {
        axios.get(`/api/blogSuggestion/${blogId}`)
        .then((res) => {
            setBlogSuggest(res.data)
        })
        .catch(()=>{
            console.log('Error getting data!')
        })
    }
    useEffect(()=>{
        getBlogSuggestion();
        getBlogDetail();
        window.scrollTo(0, 0);
    },[blogId])
    const scrollToSub = () =>{
        scrollRef.current.scrollIntoView({behavior: 'smooth'});
      }
    return (
        <div>
            <Header/>
            <div className="overlap">
           <section id="background-content">
                <p className="content-date">
                {blogContent.uploadDate}
                </p>
                <h2>
                {blogContent.title}
                </h2>
                <span className="content-tag">
                {blogContent.category}
                </span>
            </section>
            <section id="blog-body">
                <div id="blog-share">
                    <i className="fas fa-share-alt"/>
                    <a href={`http://www.facebook.com/share.php?u=${currentURL}`}><i className="fab fa-facebook-f"/></a>
                    <a href={`https://api.whatsapp.com/send?text=${currentURL}`}><i className="fab fa-whatsapp"/></a>
                    <a href={`mailto:?subject=${blogContent.title}&body=${currentURL}`}><i className="far fa-envelope"/></a>
                </div>
                <Blogdetail article={blogContent.article} image={blogContent.imagefile} videoUrl={blogContent.videoUrl} suggest={blogSuggest}/>
                <BlogSidebar scollFunc={scrollToSub}/>
            </section>
            <section id="mobile-share">
                <div id="share-wrapper">
                <h3>分享文章</h3>
                    <div>
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${currentURL}`}><i className="fab fa-facebook-f"/></a>
                        <a href={`https://api.whatsapp.com/send?text=${currentURL}`}><i className="fab fa-whatsapp"/></a>
                        <a href={`mailto:?subject=${blogContent.title}&body=${currentURL}`}><i className="far fa-envelope"/></a>
                    </div>
                </div>
            </section>
            <div ref={scrollRef}>
                <BlogSubscription />
            </div>
            <Footer/>
            </div>  
       </div>
    );
}

const Blogdetail = props =>{
    const [blogImage,setBlogImage] = useState([]);
    const [videoDisplay,setVideoDisplay] = useState("none");
    const getBlogImage = image =>{
        let imageItems = [];
        image.map((image)=>{
            imageItems.push({original: image})
        })
        setBlogImage(imageItems);
    }
    const getVideoUrl = (videoUrl) =>{
        console.log(props.videoUrl)
        if(videoUrl !== ""){
            setVideoDisplay("block")
        }
        else{
            setVideoDisplay("none")
        }
    }
    useEffect(()=>{
        getBlogImage(props.image);
        getVideoUrl(props.videoUrl)
    },[props.image,props.videoUrl])
    return(
    <div id="blog-content">
        <div className="blog-list">
            <ImageGallery items={blogImage} showFullscreenButton={false} showPlayButton={false}></ImageGallery>
                <iframe className="blog-video"
                src={props.videoUrl} style={{display: videoDisplay}}>
                </iframe>
            <Editor
                toolbarHidden
                editorState={props.article}
                readOnly={true}
            />
            {/* <p>
            {props.article}
            </p> */}
            <h3 id="suggestion-title">你可能會喜歡</h3>
                <div id="suggestion">
                    {props.suggest.map((suggest,i) =>
                        <Link to={`/${suggest._id}`} key={i} className={"suggest-list-" + i + " suggest-list"}>
                            <div className="suggest-image" style={{backgroundImage: `url(${suggest.imagefile[0]})`}}/>
                            <h3>{suggest.title}</h3>
                        </Link>
                    )}
                </div>
        </div>
    </div>
   )
  }

export default Blogcontent;