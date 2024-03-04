import React,{useState} from "react";
import './AddUser.css';

function AddUser(){
    const [name, setName] = useState('');
    const [nameerror, setNameerror] = useState('');

    const [email, setEmail] = useState('');
    const [emailerror, setEmailerror] = useState('');

    const [phonenumber, setPhonenumber] = useState('');
    const [phonenumbererror,setPhonenumbererror] = useState('');

    const [pincode,setPincode] = useState('');
    const [pincodeerror,setPincodeerror] = useState('');

    const [password,setPassword] = useState('');
    const [passworderror,setPassworderror] = useState('');

    const validatename = (value) => {
        const nameRegex = /^.[a-z]{6}$/

        if(!value) {
            setNameerror('Enter your name')
        }else if (nameRegex.test(value)){
            setNameerror('Invalid name')
        }else {
            setNameerror('')
        }

    }

    const validateemail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

        if(!value) {
            setEmailerror('Enter your email')
        }else if (emailRegex.test(value)) {
            setEmailerror('Invalid email')
        }else {
            setEmailerror('')
        }
    }

    const validatephonenumber = (value) => {
        const phonenumberRegex = /^.[0-9]{10}$/

        if(!value) {
            setPhonenumbererror('Enter your phonenumber')
        }else if (phonenumberRegex.test(value)) {
            setPhonenumbererror('Enter valid phonenumber')
        }else {
            setPhonenumbererror('')
        }
    }

    const validatepincode = (value) => {
        const pincodeRegex = /^.[0-9]{6}$/

        if(!value) {
            setPincodeerror('Enter your pincode')
        }else if (pincodeRegex.test(value)) {
            setPincodeerror('Enter valid pincode')
        }else {
            setPincodeerror('')
        }
    }

    const validatepassword = (value) => {
        const passwordRegex = /^.{6,}$/

        if(!value) {
            setPassworderror('Enter your password')
        }else if (passwordRegex.test(value)) {
            setPassworderror('Enter valid password')
        }else {
            setPassworderror('')
        }
    }

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
                <input type="text" placeholder="Username" name="name" value={name} onChange={(e)=>{setName(e.target.value); validatename(e.target.value) }} required/>
                {nameerror && <p className="error-message">{nameerror}</p>}

                <label htmlFor="email">Enter Your Email</label>
                <input type="email" placeholder="email" name="email" value={email} onChange={(e)=> {setEmail(e.target.value); validateemail(e.target.value)}} required/>
                {emailerror && <p className="error-message">{emailerror}</p>}

                <label htmlFor="phonenumber">Enter Your PhoneNumber</label>
                <input type="text" placeholder="Enter Your PhoneNumber" name="phonenumber" value={phonenumber} onChange={(e)=> {setPhonenumber(e.target.value); validatephonenumber(e.target.value)}} required/>
                {phonenumbererror && <p className="error-message">{phonenumbererror}</p>}

                <label htmlFor="pincode">Enter Your Pincode</label>
                <input type="pincode" placeholder="Enter Your Pincode" name="pincode" value={pincode} onChange={(e)=> {setPincode(e.target.value); validatepincode(e.target.value)}} required/>
                {pincodeerror && <p className="error-message">{pincodeerror}</p>}

                <label htmlFor="password">Enter Your Password</label>
                <input type="password" placeholder="Enter Your Password" name="password" value={password} onChange={(e)=> {setPassword(e.target.value); validatepassword(e.target.value)}} required/>
                {passworderror && <p className="error-message">{passworderror}</p>}

                <div className="centre">
                    <button type="submit">Add User</button>
                </div>
                
            </form>
        </div>
    )
}

export default AddUser;

