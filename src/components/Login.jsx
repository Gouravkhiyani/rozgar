import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { NavLink } from 'react-router-dom'
import { useUserAuth } from "../context/UserAuthContext";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn,signUp } = useUserAuth();
  const [activepage,setActivePage] = useState("");
  const navigate = useNavigate();

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      setActivePage("");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };


  const handleSubmit1 = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }
  };

  function changeClass1(){
    setActivePage("right-panel-active");
  };

  function changeClass2(){
    setActivePage("");
  };

  return (
    <div className="loginPage">
      <div className="background-shape circle-one"></div>
      <div className="background-shape circle-two"></div>
      <div className="background-shape square-one"></div>
      <div className="background-shape square-two"></div>
      <div className="background-shape square-three"></div>
      <div className="background-shape triangle-one"></div>
      <div className="background-shape triangle-two"></div>
      <div className="background-shape triangle-three"></div>
      <div className="background-shape triangle-three1"></div>
      <div className="background-shape rectangle-one"></div>
      <div className="background-shape rectangle-two"></div>

      <div className={`container ${activepage}`}>
        <div className="form-container sign-up-container">
          <form onSubmit={handleSubmit2}>
            <h1>Create Account</h1>
            <span>Use your email for registration</span>
            {/* <input type="text" placeholder="Name" id="signupname" /> */}
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button className="signup" type="submit" onclick="RegisterUser()">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleSubmit1}>
            <h1>Sign in</h1>
            {error && <p>{error}</p>}
            <div className="social-container">
              <GoogleButton
                className="g-btn"
                type="dark"
                onClick={handleGoogleSignIn}
              />
            </div>
            <span>or use your account</span>
            <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" id="signinemail" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="signinpass" />

            <button className="signup" type="submit" onclick="LoginUser()">Sign In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button onClick={changeClass2} >Sign In</button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button onClick={changeClass1} >Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;