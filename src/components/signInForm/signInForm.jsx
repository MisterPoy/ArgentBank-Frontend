import React from "react";
import { Link } from "react-router";

export function SignInForm() {
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {/* <!-- PLACEHOLDER DUE TO STATIC SITE --> */}
      {/* <a href="./user.html" className="sign-in-button">
              Sign In
            </a> */}
      {/* <!-- SHOULD BE THE BUTTON BELOW --> */}
      <Link to="/dashboard">  
        <button className="sign-in-button">Sign In</button>
      </Link>
    </form>
  );
}
