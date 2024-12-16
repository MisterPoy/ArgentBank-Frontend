import React from "react";
import { useState } from "react";
import "./App.css";
import { Home } from "./pages/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { SignIn } from "./pages/signIn";
import { createBrowserRouter, RouterProvider } from "react-router";
import { User } from "./pages/user";

///////// LAYOUT COMPONENT FOR HEADER, FOOTER AND MAIN CONTAINER
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

////////// Create routes with Layout elements for each routes

const router = createBrowserRouter([
  {
    path: "/", // DEFINE THE ROUTE FOR THE HOME PAGE
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    // IF A ERROR OCCURS, RENDER THE ERRORPAGE COMPONENT
  },
  {
    // ROUTE FOR ABOUT PAGE
    path: "/signin",
    element: (
      <Layout>
        <SignIn />
      </Layout>
    ),
  },
  {
    path: "/user",
    element: (
      <Layout>
        <User />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
