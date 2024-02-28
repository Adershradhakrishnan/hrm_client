import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import './Login.css';


function Login(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:3000/login',{
                email: email,
                password: password
            }, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            
            if (response.data.success) {
                const token = response.data.data;
                localStorage.setItem('token',token);

                navigate('/admin');
                alert(response.data.message);
            }else {
                alert(response.data.message);
            }
        } catch (error){
            console.log('Login failed:',error);
            alert('Login failed.please try again later.');
        }
    }; 

   
    return(
        <div className="data">
            <h2 className="seven">LOGIN</h2>
            <form className="logindata" onSubmit={handleSubmit}>
                <label htmlFor="name">Enter Your Email</label>
                <input type="email" placeholder="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="password">Enter Your PassWord</label>
                <input type="password" placeholder="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <div className="centre">
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;

