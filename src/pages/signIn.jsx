import React from "react";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
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
