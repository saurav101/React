import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/login.css";
import { Link } from "react-router-dom";
import CustomFormField from "../components/custom_form_field";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes(".com")) {
      alert("Email must end with .com");
    }
    const passwordRegex = /[A-Z]/;
    if (passwordRegex.test(password) && password.length >= 6) {
      alert("Valid password");
      console.log(password);
    } else {
      alert("invalid password");
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div id="container">
      <Navbar title={"Login page"}></Navbar>
      <div id="login">
        <form id="container" onSubmit={handleSubmit}>
          <div id="email">
      <CustomFormField label="Email" placeholder="Enter your email" type="email" value={email} cName="email" onChange={handleEmail}/> </div>
          <br />
          <br />
      <div className="password">
      <CustomFormField label ="Password" placeholder="Enter your password" type="password" value={password} cName="password" onChange={handlePassword}/>
      </div>
          <input type="submit" value="Login" id="submit" />
          <p
            style={{
              textAlign: "center",
              color: "teal",
              fontSize: "14px",
              marginTop: "15px",
            }}
          >
            Already have an account? <Link to ='/register'>Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
