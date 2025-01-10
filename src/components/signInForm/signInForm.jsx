import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchUserProfile } from "../../redux/userSlice";
import { setToken } from "../../redux/userSlice";
import { Button } from "../button/button";

// SigninForm components for user authentification
export function SignInForm() {
  // State for inputs and error handling
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle form submission and user login
  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Send login request to API
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      // Error gestion
      if (!response.ok) {
        throw new Error("Login failed");
      }
      // Process successful login
      const state = await response.json();
      const token = state.body.token;

      // store token in local storage
      localStorage.setItem("token", token);
      
      // Update rexu store with token
      dispatch(setToken(token));
      // Fetch user profile after successful login
      dispatch(fetchUserProfile());

      // Navigate to dashboard  
      navigate("/dashboard");
    } catch (err) {
      setError("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      {/*email input*/}
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoComplete="username"
          required
        />
      </div>
      {/*password input*/}
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          required
        />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      {/*error message display*/}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <Button
        type="submit"
        className="sign-in-button"
        content="Sign in"
        onClick={undefined}
      />
    </form>
  );
}
