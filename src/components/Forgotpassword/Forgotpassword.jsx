import React from "react";

import axios from "axios";
import { useState } from "react";

function Forgotpassword() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleForgotPassword = async ()=> {
        try{
            const response = await axios.post('http://localhost:3000/forgot-password',{email});
            setMessage(response.data.message);

            if(response.data.message  === "Email sent successfully") {
                alert("email sent successfully.check your email");
            }
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            }else {
                setMessage(error.message);
            }
        }
    };

    return(
        
        <div>
            <h2>Forgot password</h2>
            <input type="email" value={email} placeholder="Enter your email" onChange={(e)=> setEmail(e.target.value)}/>
            <button onClick={handleForgotPassword}>submit</button>
        </div>
        
        
    );
}

export default Forgotpassword;