import React, { useEffect } from "react";
import "./signin.css";
import { SignInContent } from "../components/SignInContent/signInContent";
import { useNavigate } from "react-router";


// SignIn page for user authentification
export function SignIn() {
  const navigate = useNavigate();

  // Check for existing token and redirect to dashboard if found
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } 
  }, [navigate]);

  return (    
      <main className="main bg-dark">
        <SignInContent />
      </main>   
  );
}
