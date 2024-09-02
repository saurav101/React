import { useState } from "react";
import Navbar from "../components/navbar";
import "../styles/login.css";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
    if (!email.includes(".com")) {
      alert("Invalid email");
    }
    const pwRegex = /[A-Z]/;

    if (pwRegex.test(password) || password.length > 6) {
      return;
    } else {
      alert("invalid password");
    }
    console.log(email, password);
  };
  const handleOnEmailChange = (e) => {
    console.log("email: ", e.target.value);
    setEmail(e.target.value);
  };
  const handleOnPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <Navbar title={"Login Page"} />
      <h1>Login Page</h1>
      <div id="login">
        <form onSubmit={handleSubmit}>
          <label for="email">Email</label>
          <br />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            required
            onChange={handleOnEmailChange}
          />
          <br />
          <label for="password">Password</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            required
          />
          <br />
          <button type="submit" id="click">
            Login
          </button>
        </form>
      </div>
    </>
  );
};
export default Login;
