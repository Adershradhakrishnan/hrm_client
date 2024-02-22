import React,{useState} from "react";
import './Login.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

const Login = () =>{
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');

    return(
        <div className="data">
            <h2 className="seven">LOGIN</h2>
            <form className="logindata">
                <label htmlFor="name">Enter Your UserName</label>
                <input type="text" placeholder="Username" name="name" value={username} onChange={(e)=>setUserName(e.target.value)}/>
                <label htmlFor="password">Enter Your PassWord</label>
                <input type="password" placeholder="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <div className="centre">
                    <button><Link to={'/adduser'}>Login</Link></button>
                </div>
            </form>
        </div>
    );
};

export default Login;

