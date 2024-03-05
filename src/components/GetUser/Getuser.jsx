import React,{useEffect,useId,useState}  from "react";
import {BrowserRouter as Router,Route,Routes,Link,useParams,} from 'react-router-dom';
import axios from 'axios';
import './Getuser.css';



function Getuser(){
    const [data,setData] = useState([]);

    useEffect(()=>{
        const fetchData = async ()=>{
            try{
                const response = await axios.get('http://localhost:3000/getuser');
                setData(response.data.data);
            } catch (error) {
                console.log('Error fetching data:',error);
            }
        };
        fetchData();
    },[]);

    const HandleViewUser = (useId) => {
        if (useId !== undefined) {
            console.log("View button clicked for user ID:",useId);
        }else {
            console.log("User ID undefined");
        }
    };

    return(
        <>
        <div className="csk">
            
            <div className="rcb">
               
                <h1>Users</h1>
            </div>
            <div className="mi">
                <h1>Name</h1>
                <h1>Email</h1>
                <h1 className="phone">Phone Number</h1>
            </div>
            {data.length ?(
                data.map((user)=>(
                    <div className="dry" key={user._id}>
                        <div className="dry1">
                            <p> <input type="text" defaultValue={user.name} /></p>
                        </div>
                       <div className="dry2">
                        <p> <input type="email" defaultValue={user.email} /></p>
                        </div> 

                        <div className="dry3">
                            <p> <input type="phonenumber" defaultValue={user.phonenumber} /></p>
                        </div>

                         <div>
                            <Link to={`/detailsuser/${user._id}`}><button onClick={()=> HandleViewUser(user._id)}>View</button></Link>
                        </div> 

                      </div>  
                ))
            ) :(
                <h1>Loading...</h1>
            )}
        </div>
        </>
    );
}

export default Getuser