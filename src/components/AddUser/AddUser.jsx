import React,{useState} from "react";
import './AddUser.css';

function AddUser(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
    const [pincode,setPincode] = useState('');
    const [password,setPassword] = useState('');

    const handleAddUser = async (e) => {
        try{

            const data = {name,email,phonenumber,pincode,password};
            const json_data = JSON.stringify(data);
            console.log("json_data: ",json_data)

            const response = await fetch('http://localhost:3000/adduser',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: json_data,
            });
            console.log('Response received',response);

            if (response.data.success){
                alert(response.data.message);
            }else{
                alert(response.data.message);
            }
        } catch(error) {
            console.log('Adding user failed:',error);
            alert('failed.please try again later.')
        }
    }

    return(

        <div className="adddata">
            <h2>Add-User</h2>

            <form className="adddetails" onSubmit={handleAddUser}>
                <label htmlFor="name">Enter Your UserName</label>
                <input type="text" placeholder="Username" name="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label htmlFor="email">Enter Your Email</label>
                <input type="email" placeholder="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label htmlFor="phonenumber">Enter Your PhoneNumber</label>
                <input type="text" placeholder="Enter Your PhoneNumber" name="phonenumber" value={phonenumber} onChange={(e)=>setPhonenumber(e.target.value)}/>
                <label htmlFor="pincode">Enter Your Pincode</label>
                <input type="pincode" placeholder="Enter Your Pincode" name="pincode" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Enter Your Password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>

                <div className="centre">
                    <button type="submit">Add User</button>
                </div>
                
            </form>
        </div>
    )
}

export default AddUser;

