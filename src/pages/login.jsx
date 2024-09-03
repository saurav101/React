import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/login.css";
import { Link } from "react-router-dom";

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
          <label for="email">
            Email:
            <br />
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email here"
            onChange={handleEmail}
            required
          />
          <br />
          <br />
          <label for="password">Password:</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlePassword}
            required
          />
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
