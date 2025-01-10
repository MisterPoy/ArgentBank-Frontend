import React from "react";
import { Link } from "react-router-dom";
import "./errorPage.css"
import { Button } from "../components/button/button";
import { useSelector } from "react-redux";

// ErrorPage component - displays when a route is not found
export function ErrorPage() {
  const {isLoggedIn} = useSelector((state)=> state.user)
  return (  
      <main className="main bg-dark error-Container">
        <h1 className="error-title">Oups! La page que vous demandez n&apos;existe pas.</h1>
        <Link to="/" className="returnHome">
          <Button className="edit-button" content="Retourner sur la page d&apos;accueil"/>
        </Link>
      </main>    
  );
}
