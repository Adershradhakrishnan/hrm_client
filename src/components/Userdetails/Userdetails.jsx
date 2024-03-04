import React,{useEffect,useState} from "react";
import { useParams} from 'react-router-dom';
import axios from 'axios';
import '../Userdetails/Userdetails.css'
import  Image1 from './images/user.webp';

function Userdetails() {
    const { userId } = useParams();
    const [user,setUser] = useState(null);

    useEffect(()=> {
        const fetchData = async () => {
            try{
                const response = await axios.get(`http://localhost:3000/getuser/${userId}`);
                setUser(response.data);
            } catch (error) {
                console.log('Error fetching user details:',error);
            }
        };
        fetchData();
    }, [userId]);

    if (!user) {
        return <div>Loading...</div>
    }

    return(
        <div className="one">
            
            <div className="two">
                <img src={Image1} alt="#"/>
            </div>
            <div>
                <div className="three">
                    <div>
                        <label htmlFor="name">Enter your Name</label>
                        <input type="text" name="name" defaultValue={user ? user.name: ''} readOnly/>
                    </div>

                    <div>
                        <label htmlFor="email">Enter your Email</label>
                        <input type="email" name="email" defaultValue={user ? user.email: ''} readOnly/>
                    </div>

                    <div>
                        <label htmlFor="phonenumber">Enter your Phonenumber</label>
                        <input type="phonenumber" name="phonenumber" defaultValue={user ? user.phonenumber: ''} readOnly/>
                    </div>

                    <div>
                        <label htmlFor="pincode">Enter your Pincode</label>
                        <input type="pincode" name="pincode" defaultValue={user ? user.pincode: ''} readOnly/>
                    </div>

                    <div>
                        <button type="submit">Submit</button>
                    </div>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Userdetails;
