import React, { useState } from "react";
import "../styles/register.css";
import CustomFormField from "../components/custom_form_field";

const Register = () => {
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [gender, setGender] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(
      `fullname =${fullName}, userName = ${userName}, email = ${email}, phone =${phone}, gender = ${gender}`
    );
  };

  return (
    <form onSubmit={handleRegister}>
      <div id="register-box">
        <h1 id="title">
          <span id="re">Re</span>gistration
        </h1>
        <div className="row-field">
          <CustomFormField
            label="Full Name"
            placeholder="Enter your full Name"
            type="text"
            cName="fullname"
            onChange={(e) => setFullName(e.target.value)}
          />
          <CustomFormField
            label="Username"
            placeholder="Enter your Username"
            type="text"
            cName="username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="row-field">
          <CustomFormField
            label="Email"
            placeholder="Enter your Email"
            type="email"
            cName="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomFormField
            label="Phone Number"
            placeholder="Enter your Phone"
            type="number"
            onChange={(e) => setPhone(e.target.value)}
            cName="Phone"
          />
        </div>
        <div className="row-field">
          <CustomFormField
            label="Password"
            placeholder="Enter your password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            cName="password"
          />
          <CustomFormField
            label="Confirm Password"
            placeholder=" Confirm Your Password"
            type="password"
            onChange={(e) => setConfirmPwd(e.target.value)}
            cName="confirm"
          />
        </div>

        <div className="gender">
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Male
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Female
          <input
            type="radio"
            name="gender"
            id="none"
            value="none"
            onChange={(e) => setGender(e.target.value)}
          />{" "}
          Prefer not to say
        </div>

        <input type="submit" value="SignUp" id="submitBtn" />
      </div>
    </form>
  );
};

export default Register;
