import React, {useEffect,useState} from "react";

import './Resetpassword.css';

function Resetpassword(){

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(password !== confirmPassword){
            setErrorMessage("passwords do not match");
            return;
        }

        try{
            const response = await fetch('/reset-password',{
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${reset_token}`
                },
                body: JSON.stringify({password})
            });

            if (!response.ok) {
                const responseData = await response.json();
                throw new Error(responseData.message || 'Failed to reset password');
            }

            setErrorMessage("password reset successful");
        } catch (error) {
            console.error('Error: ',error);
            setErrorMessage("An error occured.please try again later.");
        }
    };

    return(
        <>

        <h1>Reset password</h1>

        <div className="container">

            <form onSubmit={handleSubmit}>
                <div className="password">
                    <input type="password" id="password" name="password" required placeholder="Enter your password" onChange={(e)=> setPassword(e.target.value)}/>

                </div>
                <div className="confirm">
                    <input type="password" id="confirmpassword" name="confirmpassword" required placeholder="Confirm your password" onChange={(e)=> setConfirmPassword(e.target.value)}/>

                </div>
                <div className="submit">
                    <button>submit</button>
                </div>
                {errorMessage && <div className="error">{errorMessage}</div>}
            </form>
        </div>
        </>
    )
}

export default Resetpassword;