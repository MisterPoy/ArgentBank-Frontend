import React from "react";
import { SignInForm } from "../signInForm/signInForm";

// SignInContent component - Wrapper for the sign-in-form
export function SignInContent() {
  return (
    <section className="sign-in-content">
      <i  className="fa fa-user-circle sign-in-icon" />
      <h1>Sign In</h1>
      <SignInForm />
    </section>
  );
}
