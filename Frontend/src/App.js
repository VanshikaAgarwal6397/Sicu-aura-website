import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { useState,useRef } from 'react';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Capture from './Components/Capture Photo';
import Hospital from './Components/Hospital Registration'

function App() {
  const [accessToken, setAccessToken] = useState(localStorage.getItem('access_token') || '');
  
  
    
  
  return (
    <>
    <BrowserRouter>
        <Routes>
       
           <Route path='/'  element={<Signup /> }/>
           <Route path='/login' element={<Login />}/>
           <Route path='/capture' element={<Capture />}/>
           <Route path='/hospital' element={<Hospital />}/>
          </Routes>
          
    
          </BrowserRouter>
    
    
      
    
         
    
    
        
    </>
  );
}

export default App;
