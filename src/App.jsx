import React from 'react';

import './App.css'
import Landingpage from './components/Landing/Landing';
import AddUser from './components/AddUser/AddUser';
import Login from './components/Login/Login';
import {BrowserRouter as Router,Routes,Route,Link,useParams} from 'react-router-dom';
import Admin from './components/Admin/Admin';
import Getuser from './components/GetUser/Getuser';

function App() {
  

  return (
   <Router>
    <div>
      <Routes>

      
   
       <Route path="/" exact element={<Landingpage/>}/>
       <Route path="/login" exact element={<Login/>}/>
       <Route path="/adduser" exact element={<AddUser/>}/>
        <Route path="/admin" exact element={<Admin/>}/> 
        <Route path="/getuser" exact element={<Getuser/>}/>
       </Routes>
       </div>
       </Router>
    
  )
}

export default App
