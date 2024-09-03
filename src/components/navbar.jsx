import React from "react";
import '../styles/navbar.css';
import logo from "../logo.svg";
import { Link } from "react-router-dom";


function Navbar({title}) {
    return (
      <>
        <div id='nav'>
          <div id='logo'>
            <img src={logo} height={80} width={80} alt='logo' />
            <h1>{title}</h1>
          </div>
          <div id='menus'>
            
            <Link to ='/'> <p>Home</p> </Link>
            <Link to ='/documents'> <p>Documents</p> </Link>
            <Link to ='/downloads'> <p>Downloads</p> </Link>
            <Link to ='/settings'> <p>Settings</p> </Link>
            <Link to ='/profile'> <p>profile</p> </Link>
            <Link to ='/login'> <p>Login</p> </Link>
            <Link to ='/register'> <p>Register</p> </Link>

           
          </div>
        </div>
      </>
    );
  }
  
  export default Navbar;