import React, { useEffect } from "react";
import "./signin.css";
import { SingInContent } from "../components/singInContent/signInContent";
import { useNavigate } from "react-router";

export function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    } 
  }, [navigate]);

  return (
    <>
      <main className="main bg-dark">
        <SingInContent />
      </main>
    </>
  );
}
