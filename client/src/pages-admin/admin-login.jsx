import React,{ useState, useContext} from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {AuthContext} from "../App.jsx";

const LoginPage = () =>{
    const [credential,setCredential] = useState({
        username: "",
        password: ""
    })
    const authContext = useContext(AuthContext);
    let history = useHistory();
    const credentialHandler = (e) =>{
        setCredential({...credential, [e.target.name]: e.target.value})
    } 
    const submit = (e) =>{
        e.preventDefault();
        axios.post(
            '/api/login',credential
        )
        .then((res)=>{
            if(res.data===true){
                authContext.setAuth(true);
                history.push("/admin/home");
                console.log(authContext.auth);
            }
            else{
                alert("Incorrect credentials, please try again!")
            }
        }   
        )
        .catch(
            console.log('Error!')
        )
    }
    return(
        <div className="login-page">
            <div className="login-panel">
               <img className="logo" alt="" src={require('../images/logo.svg')}/>
                <form onSubmit={submit}>
                    <label htmlFor="Username">Username:</label>
                    <input className="input-border" type="text" name="username" value={credential.username} onChange={credentialHandler} required/><br/>
                    <label htmlFor="Password">Password:</label>
                    <input className="input-border" type="password" name="password" value={credential.password} onChange={credentialHandler} required/><br/>
                    <input className="input-border submit-button" type="submit" value="Login"/>
                </form> 
            </div>
            
        </div>
    )

}

export default LoginPage 