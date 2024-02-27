import React from 'react';

import './App.css'
import Landingpage from './components/Landing/Landing';
import AddUser from './components/AddUser/AddUser';
import Login from './components/Login/Login';
import {BrowserRouter as Router,Routes,Route,Link,useParams} from 'react-router-dom';
// import Adminlogin from './components/Admin/Admin';

function App() {
  

  return (
   <Router>
    <div>
      <Routes>

      
   
       <Route path="/" exact element={<Landingpage/>}/>
       <Route path="/login" exact element={<Login/>}/>
       <Route path="/adduser" exact element={<AddUser/>}/>
       {/* <Route path="/adminlogin" exact element={<Adminlogin/>}/> */}
       </Routes>
       </div>
       </Router>
    
  )
}

export default App
