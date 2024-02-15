// import React from "react";
// import logo from "../Photos/Blackimage.jpeg";
// import logo1 from "../Photos/Redsymbol.jpeg";
// import { Link } from "react-router-dom";
// import "../App.css"
// import { useState,useRef } from "react";
// import axios from 'axios';

// export default function Signup() {
//   const [inputFocused, setInputFocused] = useState(false);
//   const fileInputRef = useRef(null);

  
//   const [formData, setFormData] = useState({
//     hospital: '',
//     address: '',
//     city: '',
//     state: '',
//     pincode: '',
//     registrationDate: '',
//     ambulanceCount: '',
//     email: '',
//     phoneNumber: '',
//     registrationNumber: '',
//     emergencyWardNumber: '',
//     password: '',
//     confirmPassword: ''
//   });
  

  

  

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/signup', formData);
//       console.log('Signup successful:', response.data);
//       // Redirect user or show success message
//     } catch (error) {
//       console.error('Signup failed:', error);
//       // Handle error, show error message
//     }
//   };
//   const handleFocus = () => {
//     setInputFocused(true);
//   };

//   const handleBlur = () => {
//     setInputFocused(false);
//   };
//   const handleUploadButtonClick = () => {
//     fileInputRef.current.click();
//   };

  
//   return (
//     <div>
//       <div className="row">
//         <div style={{height:"1024px",width:"541px"}} className="col-md">
// <img src={logo} className="img-fluid" alt="" />
//         </div>
//         <div className="col-md">
//         <nav className="navbar">
//       <div className="navbar-logo">
//         <img src={logo1} style={{height:"98px",width:"98px",top:"73px",left:"631px"}} alt="Logo" />
//       </div>
//       <div className="navbar-links" style={{width:"230px" , height: "45px" ,top: "100px" ,left: "335px"
// }}>
//         <Link style={{textDecoration:"none",color:"white"}} to="/signup">Sign up </Link>
//         <Link   style={{textDecoration:"none",color:"white"}} to="/login"> Login</Link>
//       </div>
//     </nav>

//     <div div className="row">
     
      
//         <form onSubmit={handleSubmit} >
//           <div className="row">
//             <div className="col-md-6">
// <input type="text" onFocus={handleFocus}  onBlur={handleBlur} onChange={handleChange} style={{ width: "320px", height: "32px", marginTop:"245px",   borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="hospital"/>
// <input type="text" onFocus={handleFocus}  onBlur={handleBlur} onChange={handleChange} style={{ width: "320px", height: "32px",   borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="Address"/>
// <input type="text" onFocus={handleFocus}  onBlur={handleBlur} onChange={handleChange} style={{ width: "320px", height: "32px",  borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="city"/>

// <input type="text" onFocus={handleFocus}  onBlur={handleBlur} onChange={handleChange} style={{ width: "320px", height: "32px",  borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="state"/>
// <input type="text" onFocus={handleFocus}  onBlur={handleBlur} onChange={handleChange} style={{ width: "320px", height: "32px",  borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="pincode"/>

// <input type="text" onFocus={handleFocus}  onBlur={handleBlur} onChange={handleChange} style={{ width: "320px", height: "32px",  borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="hospital registration date"/>

// <input type="text" onFocus={handleFocus}  onBlur={handleBlur} onChange={handleChange} style={{ width: "320px", height: "32px",  borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="number of ambulance available"/>
//  </div>
//  <div className="col-md-6">
// <input type="text" onFocus={handleFocus} onChange={handleChange}  onBlur={handleBlur} style={{ width: "320px", height: "32px",marginTop:"245px", borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="email id"/>
// <input type="text" onFocus={handleFocus} onChange={handleChange}  onBlur={handleBlur} style={{ width: "320px", height: "32px",  borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="phone number"/>
// <input type="text" onFocus={handleFocus} onChange={handleChange}  onBlur={handleBlur} style={{ width: "320px", height: "32px", borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="hospital registration number"/>

// <input type="text" onFocus={handleFocus} onChange={handleChange} onBlur={handleBlur} style={{ width: "320px", height: "32px", borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="emergency ward niumber"/>

// {/* <input type="text" onFocus={handleFocus} onChange={handleChange}  onBlur={handleBlur} style={{ width: "320px", height: "32px", borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="registration certificate upload"/> */}
// <div>
//                     {/* <button type="button" onClick={handleUploadButtonClick} style={{backgroundColor:"#BCBCBC",borderRadius:"10px"}}>
//                       Upload
//                     </button>
//                     <input
//                       type="file"
//                       name="registrationCertificate"
//                       ref={fileInputRef}
//                       style={{ display: "none" }}
//                     /> */}
//                   </div>

// <input type="text" onFocus={handleFocus} onChange={handleChange}  onBlur={handleBlur} style={{ width: "320px", height: "32px", borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="create password"/>
// <input type="text" onFocus={handleFocus} onChange={handleChange}  onBlur={handleBlur} style={{ width: "320px", height: "32px", borderBottom: `1px solid ${inputFocused ? "black" : "grey"}`,outline:"none",borderTop:"none",borderLeft:"none",borderLeft:"none",borderRight:"none"  }} placeholder="confirm password"/>

  
// <button style={{height:"50",width:"160px",top: "855px",left: "912px",borderRadius:"15px"

// }}>Submit</button>

//    <div>Terms and condition privacy policy   </div>
//             </div>
//           </div>
      
//         </form>

//     </div>
    
     
//     </div>
//         </div>
//       </div>
      
//   );
// }



import React,{useState} from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from "../Photos/Blackimage.jpeg";
import logo1 from "../Photos/Redsymbol.jpeg";
import "../App.css"
import '../Css/SignupNavbar.css'




export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[hospital_name,sethospital_name]=useState('');
  const[address,setAddress]=useState('');
  const[city,setCity]=useState('')
  const[pincode,setPincode]=useState('')
  const[hospital_registration_date,sethospital_registration_date]=useState('')
  const[phone_number,setphone_number]=useState('')
  const[number_of_ambulance_available,setnumber_of_ambulance_available]=useState('')
  const[confirm_password,setconfirm_password]=useState('')
  const[emergency_ward_number,setemergency_ward_number]=useState('')
  const[hospital_registration_number,sethospital_registration_number]=useState('')
  const[state,setstate]=useState('')
  


  const navigate=useNavigate()
  

  const handleRegistration = async () => {
    try {
      const response = await axios.post('http://localhost:5000/register', { email: email,
      password: password,pincode:pincode,state:state,address:address,city:city,number_of_ambulance_available:number_of_ambulance_available,emergency_ward_number:emergency_ward_number,pincode:pincode,hospital_name:hospital_name,hospital_registration_date:hospital_registration_date,hospital_registration_number:hospital_registration_number,confirm_password:confirm_password,phone_number:phone_number});
      console.log('Registration successful:', response.data);
      navigate('/login')
      
    } catch (error) {
      console.error('Registration failed:', error);
      
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

  
      <form >
        <div className="row">
          <div className="col-md-6">
          <div class="mb-2 field">
                                    <label class="form-label">Hospital Name:</label>
                                    <input type="email" class="form-control" value={hospital_name} onChange={(e) => sethospital_name(e.target.value)} />
                                   
                            
                                  </div>
                                <div class="mb-2 field">
                                    <label class="form-label">EMAIL:</label>
                                    <input type="text" class="form-control"  value={email}
                                          onChange={(e) => setEmail(e.target.value)}/>
                                  </div>
                                
                                  <div class="mb-2 field">
                                    <label class="form-label">PASSWORD:</label>
                                    <input type="password" class="form-control"  value={password}
                                      onChange={(e) => setPassword(e.target.value)} />
                                  
                                  </div>
                                  <div class="mb-2 field">
                                    <label class="form-label">confirm_password:</label>
                                    <input type="password" class="form-control"  value={confirm_password}
                                      onChange={(e) => setconfirm_password(e.target.value)} />
                                  
                                  </div>
          </div>
          <div className="col-md-6">
          <div class="mb-2 field">
                                    <label class="form-label">hospital_registration_date:</label>
                                    <input type="text" class="form-control"  value={hospital_registration_date}
                                      onChange={(e) => sethospital_registration_date(e.target.value)} />
                                  
                                  </div>
                                  <div class="mb-2 field">
                                    <label class="form-label">emergency_ward_number:</label>
                                    <input type="text" class="form-control"  value={emergency_ward_number}
                                      onChange={(e) => setemergency_ward_number(e.target.value)} />
                                  
                                  </div>
                                  <div class="mb-2 field">
                                    <label class="form-label">hospital_registration_number:</label>
                                    <input type="text" class="form-control"  value={hospital_registration_number}
                                      onChange={(e) => sethospital_registration_number(e.target.value)} />
                                  
                                  </div>
                                  <div class="mb-2 field">
                                    <label class="form-label">number_of_ambulance_available</label>
                                    <input type="text" class="form-control"  value={number_of_ambulance_available}
                                      onChange={(e) => setnumber_of_ambulance_available(e.target.value)} />
                                  
                                  </div>
                                  <div class="mb-2 field">
                                    <label class="form-label">address</label>
                                    <input type="text" class="form-control"  value={address}
                                      onChange={(e) => setAddress(e.target.value)} />
                                  
                                  </div>
                                  <div class="mb-2 field">
                                    <label class="form-label">city</label>
                                    <input type="text" class="form-control"  value={city}
                                      onChange={(e) => setCity(e.target.value)} />
                                  
                                  </div>
                                  <div class="mb-2 field">
                                    <label class="form-label">pincode</label>
                                    <input type="text" class="form-control"  value={pincode}
                                      onChange={(e) => setPincode(e.target.value)} />
                                  
                                  </div>
                                  <div class="mb-2 field">
                                    <label class="form-label">Phone number</label>
                                    <input type="text" class="form-control"  value={phone_number}
                                      onChange={(e) => setphone_number(e.target.value)} />
                                  
                                  </div>

                                  <div class="mb-4 field">
                                    <label class="form-label">state:</label>
                                    <input type="text" class="form-control" value={state}   onChange={(e) => setstate(e.target.value)} />
                                   
                                  </div>
                                  </div>
          </div>
          <div class=" register-btn">
                                      <Link to="" onClick={handleRegistration} class="button ">Sign Up</Link>
                                  </div>
      </form>
      
    
      
    <div class="register" style={{marginTop:"100px"}}>
        <div class="container ">
            <div class="row  register-box g-0">
                <div class="col-sm-12 col-md-6">
                    <div class="img-box">
                        <img draggable="false" src="" alt=""/>
                      </div>
                </div>
                <div class="col-sm-12 col-md-5 g-0">
                       
              
                            <form>
                            
                                 
                                  
                            </form>

                       </div>
                     </div>   
                </div>
            </div>
        </div>
    </div>
    



   
    </>
  )
}




