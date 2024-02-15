import React, { useState, useEffect } from 'react';
import '../Css/Navbar.css';
import logo from '../Photos/logo.jpeg';
import sicuaura from '../Photos/sicu-aura.jpeg';
import photo from '../Photos/photo.jpeg';
import laptopman from '../Photos/laptopman.jpeg';
import '../Css/Table.css';

export default function Hospital() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('http://localhost:5000/user_data');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-logo">
          <div className='logo-container'>
            <img style={{ zIndex: "-1" }} src={logo} alt="Logo" />
          </div>
          <span className="navbar-brand"><img src={sicuaura} alt="" /></span>
        </div>
        <ul className="navbar-links">
          <li><img style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={photo} alt="" /></li>
          <li>name</li>
          <li><a href="#">Logout</a></li>
        </ul>
      </nav>

      <nav className="second-navbar">
        <ul>
          <li style={{ listStyle: "none" }}><img src={laptopman} alt="" /></li>
        </ul>
      </nav>

      <div className='row' style={{ display: "flex" }}>
        <div className="col-md-12">
          <div className="container">
            <div className="topnav">
              <a className="active" href="#">Hospital Registration</a>
              <input type="text" placeholder="Search.." />
            </div>

            <div className="table-container" style={{ maxHeight: "500px", overflowY: "scroll" }}>
              <table className="styled-table" style={{ borderRadius: "20px" }}>
                <thead>
                  <tr>
                    <th>No.</th>
                    <th>Date and Time</th>
                    <th>Hospital name</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Phone no</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Pincode</th>
                    <th>Hpspital Registration date</th>
                    <th>Hospital registration Number</th>
                    <th>Emergency ward number</th>
                    <th>Number of Ambulance</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.slice(0, 5).map((user, index) => (
                    <tr key={user.id}>
                      <td>{index + 1}</td>
                      <td>{user.dateTime}</td>
                      <td>{user.hospital_name}</td>
                      <td>{user.email}</td>
                      <td>{user.address}</td>
                      <td>{user.phoneNo}</td>
                      <td>{user.city}</td>
                      <td>{user.state}</td>
                      <td>{user.pincode}</td>
                      <td>{user.hospital_registration_date}</td>
                      <td>{user.hospital_registration_number}</td>
                      <td>{user.emergency_ward_number}</td>
                      <td>{user.number_of_ambulance_available}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
