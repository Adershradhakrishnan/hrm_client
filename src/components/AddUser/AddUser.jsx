import React,{useState} from "react";
import './AddUser.css';

function AddUser(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [address,setAddress] = useState('');
    const [pincode,setPincode] = useState('');

    return(

        <div className="adddata">
            <h2>Add-User</h2>

            <form className="adddetails">
                <label htmlFor="name">Enter Your UserName</label>
                <input type="text" placeholder="Username" name="name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <label htmlFor="phonenumber">Enter Your PhoneNumber</label>
                <input type="text" placeholder="Enter Your PhoneNumber" name="phonenumber" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/>
                <label htmlFor="address">Enter Your Address</label>
                <input type="address" placeholder="Enter Your Address" name="address" value={address} onChange={(e)=>setAddress(e.target.value)}/>
                <label htmlFor="pincode">Enter Your Pincode</label>
                <input type="pincode" placeholder="Enter Your Pincode" name="pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>

                <div className="centre">
                    <button type="submit">Login</button>
                </div>
                
            </form>
        </div>
    )
}

export default AddUser;

