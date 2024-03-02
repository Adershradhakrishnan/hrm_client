 import React from "react";
 import {BrowserRouter as Router,Route,Routes,Link,useParams} from 'react-router-dom';
 import './AdminNavbar.css'

 function AdminNavbar(){
     return(
        <>
        <nav>
            <div className="list">
                {/* <h3>welcome</h3> */}
                <ul>
                    <li>Home</li>
                     <li>About Us</li>
                     <li>Contact Us</li>
                     <li>services</li>
                    <li><Link to="/adduser"><button type="submit">Add</button></Link></li>
                    <li><Link to="/getuser"><button type="submit">Users</button></Link></li>
                 </ul>

            </div>
            
        </nav>
        </>
     )
 }

 export default AdminNavbar;