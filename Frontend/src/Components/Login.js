



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from "../Photos/Blackimage.jpeg";
import logo1 from "../Photos/Redsymbol.jpeg";


import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const [inputFocused, setInputFocused] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[hospital_name,sethospital_name]=useState('')
  
  const handleFocus = () => {
        setInputFocused(true);
      };
    
      const handleBlur = () => {
        setInputFocused(false);
      }

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/login', { email, password,hospital_name });

      if (response.status === 200) {
        
        alert('login successful')
        navigate('/capture');
        
      } else {
        
      }
    } catch (error) {
      
    }
  };

  return (
  
  <>

  <div className="row">
    <div className="col-md">
    <img src={logo} alt="" />
    </div>
    <div className="col-md">
    <nav className="navbar" style={{backgroundColor:"white"}}>
      <div className="navbar-logo">
        <img src={logo1} style={{height:"98px",width:"98px",top:"73px"}} alt="Logo" />
        <Link to='/' style={{textDecoration:"none",color:"black"}}> <h3>Sign up</h3></Link> 
        <h3>/</h3>
        <Link to='/login' style={{textDecoration:"none",color:"black"}}><h3>Login</h3></Link>
       </div>
    
    </nav>




    <div className="row">
            <div className="col-md-12">
               <div
                className="container"
                style={{
                  marginTop: "20px",
                  boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                  width: "514px",
                  height: "540px",
                  borderRadius: "30px",
                  backgroundColor: "white",
                  justifyContent: "center",
                }}
              >
                <h4 style={{ justifyContent: "center", display: "flex" }}>
                  Welcome to sicu-aura
                </h4>
                <div style={{ justifyContent: "center", display: "flex" }}>
                  Your one stop solution using innovative technology
                </div>
                <form onSubmit={handleLogin}  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}>
        <div style={{display:"flex",justifyContent:"center"}}>
      
          <input   style={{
                      width: "334px",
                      height: "32px",
                      borderBottom: `1px solid ${
                        inputFocused ? "black" : "grey"
                      }`,
                      marginBottom: "5px",
                      marginTop: "50px",
                      outline: "none",
                      borderTop: "none",
                      borderLeft: "none",
                      borderLeft: "none",
                      borderRight: "none",
                    }}
             placeholder='email' type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
          
          <input style={{
                      width: "334px",
                      height: "32px",
                      borderBottom: `1px solid ${
                        inputFocused ? "black" : "grey"
                      }`,
                      marginBottom: "5px",
                      marginTop: "50px",
                      outline: "none",
                      borderTop: "none",
                      borderLeft: "none",
                      borderLeft: "none",
                      borderRight: "none",
                    }}   type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div style={{display:"flex",justifyContent:"center"}}>
          
          <input  style={{
                      width: "334px",
                      height: "32px",
                      borderBottom: `1px solid ${
                        inputFocused ? "black" : "grey"
                      }`,
                      marginBottom: "5px",
                      marginTop: "50px",
                      outline: "none",
                      borderTop: "none",
                      borderLeft: "none",
                      borderLeft: "none",
                      borderRight: "none",
                    }}  type="text" placeholder='Hospital name' value={hospital_name} onChange={(e) => sethospital_name(e.target.value)} />
        </div>
       <div className='button' style={{display:"flex",justifyContent:"center",marginBottom:"27px"}}><button type="submit">Login</button></div>
      
      </form>

</div>
  
</div>
</div>
    
 

    </div>
  </div>
  

    
    </>
  );
};

export default Login;
