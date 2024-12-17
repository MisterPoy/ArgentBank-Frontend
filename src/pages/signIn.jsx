import React from "react";
import "./signin.css";
import { SingInContent } from "../components/singInContent/signInContent";

export function SignIn() {
  return (
    <>
      <main className="main bg-dark">
        <SingInContent />
      </main>
    </>
  );
}
