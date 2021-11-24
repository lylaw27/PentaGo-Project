import axios from "axios";
import React, { useState,useRef } from "react";

const BlogSubscription = ()=>{
    const submitted = useRef(null);
    const [emailSub,setEmailSub] = useState({
        email: ''
    });
    const ChangeHandler = (e) => {
        setEmailSub({email : e.target.value});
    }
    const submitEmail = (e) =>{
        e.preventDefault();
        console.log(emailSub)
        axios.post('/api/blogSubscription',emailSub)
        .then(()=>{
            console.log(emailSub)
        })
        .catch(()=>{
            console.log('Error getting data!')
        })
    }
    return(
    <section id="subscription">
        <h1>歡迎訂閲並接受我們最新的資訊！</h1>
        <form id="subscription-details" onSubmit={submitEmail}>
            <input htmlFor="email" placeholder="電子郵件" type="email" id="input-email" onChange={ChangeHandler} value={emailSub.email} required/>
            <input ref={submitted} type="submit" value="訂閲" id="input-submit" />
        </form>
    </section>
    )
}

export default BlogSubscription