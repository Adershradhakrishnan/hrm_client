import React,{useEffect,useState} from "react";
import { useParams} from 'react-router-dom';
import axios from 'axios';
import '../Userdetails/Userdetails.css'

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
        return <div>Loading...</div>;
    }

    return(
        <div className="one">
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
                        <button type="submit">submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Userdetails;
