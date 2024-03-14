import React from "react";
 import './Admin.css'
//  import adminImage from './images/admin.jpg';
 import AdminNavbar from "./AdminNavbar";
 import AdminFooter from "./AdminFooter";
 import { useNavigate } from "react-router-dom";
 import Swal from "sweetalert2";

 function Admin(){

    const navigate = useNavigate();

    const isTokenpresent = ()=>{

        const token = localStorage.getItem('token');
        return !!token;
        
    };

    if (!isTokenpresent()){
        Swal.fire({
            title:"Error",
            text: "need to login to access the admin page",
            icon: "error",
            button: "Login",
        }).then(()=>{
            navigate('/login');
        });

        return null;
    }
    return(
        <>
         <AdminNavbar/>

        <div className="adminlog">

             <div className="add">

                 {/* <img src={adminImage} alt="#" /> */}

                 {/* <h1>Adminname</h1>
                 <ul className="admine">
                     <li>Edit</li>
                     <li>settings</li>
                </ul> */}
             </div> 
         </div>
         <div className="footer">
            <AdminFooter/>
        </div>
         </>
     )
 }

 export default Admin;