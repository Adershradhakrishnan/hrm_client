import React,{useEffect,useState}  from "react";
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
                    <div className="dry" key={user.id}>
                        <div className="dry1">
                            <p>{user.name}</p>
                        </div>
                       <div className="dry2">
                        <p> {user.email}</p>
                        </div> 

                        <div className="dry3">
                            <p>{user.phonenumber}</p>
                        </div>

                        <div>
                            <button>View</button>
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