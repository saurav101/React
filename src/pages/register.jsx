import React, { useState } from "react";
import "../styles/register.css";
import CustomFormField from "../components/custom_form_field";

const Register = () => {
  const fullNameRef = useRef("");

  const handleRegister = (e)=>{
    e.preventDefault();
     var fullName = fullNameRef.current
     console.log("fullname =",fullName)
  }

  
  
  return (
      <form onSubmit={handleRegister}>
    <div id="register-box">
      <h1 id="title"><span id="re">Re</span>gistration</h1>
      <div className="row-field">
      <CustomFormField label ="Full Name" placeholder="Enter your full Name" type="text"   cName="fullname" ref={fullNameRef} />
      <CustomFormField label ="Username" placeholder="Enter your Username" type="text"  cName="username" />
      </div>
       <div className="row-field">
      <CustomFormField label ="Email" placeholder="Enter your Email" type="email"  cName="email"/>
      <CustomFormField label ="Phone Number" placeholder="Enter your Phone" type="number"   cName="Phone"/>
      </div>
       <div className="row-field">
      <CustomFormField label ="Password" placeholder="Enter your password" type="password"  cName="password"/>
      <CustomFormField label ="Confirm Password" placeholder=" Confirm Your Password" type="password"  cName="confirm"/>
      </div>

        <div className="gender">
          <label>Gender:</label>
          <input type="radio" name="gender" id="male" value="male" onChange={(e) => setGender(e.target.value)} /> Male
          <input type="radio" name="gender" id="female" value="female" onChange={(e) => setGender(e.target.value)} /> Female
          <input type="radio" name="gender" id="none" value="none" onChange={(e) => setGender(e.target.value)} /> Prefer not
          to say
        </div>

        <input type="submit" value="SignUp" id="submit" />
      </div>
    </form>
  );
};

export default Register;
