import React from "react";
import "../styles/register.css";
import CustomFormField from "../components/custom_form_field";

const Register = () => {
  return (
    <div id="register-box">
      <h1 id="title">
        <span id="re">Re</span>gistration
      </h1>
      <div className="row-field">
        <CustomFormField
          label="Full Name"
          placeholder="Enter your full Name"
          type="text"
          value=""
          cName="fullname"
        />
        <CustomFormField
          label="Username"
          placeholder="Enter your Username"
          type="text"
          value=""
          cName="username"
        />
      </div>
      <div className="row-field">
        <CustomFormField
          label="Email"
          placeholder="Enter your Email"
          type="email"
          value=""
          cName="email"
        />
        <CustomFormField
          label="Phone Number"
          placeholder="Enter your Phone"
          type="number"
          value=""
          cName="Phone"
        />
      </div>
      <div className="row-field">
        <CustomFormField
          label="Password"
          placeholder="Enter your password"
          type="password"
          value=""
          cName="password"
        />
        <CustomFormField
          label="Confirm Password"
          placeholder=" Confirm Your Password"
          type="password"
          value=""
          cName="confirm"
        />
      </div>

      <div className="gender">
        <label>Gender:</label>
        <input type="radio" name="gender" id="male" value="male" /> Male
        <input type="radio" name="gender" id="female" value="female" /> Female
        <input type="radio" name="gender" id="none" value="none" /> Prefer not
        to say
      </div>

      <input type="submit" value="SignUp" id="submit-btn" />
    </div>
  );
};

export default Register;
