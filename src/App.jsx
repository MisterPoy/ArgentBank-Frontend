import React from "react";
import "./App.css";
import { Home } from "./pages/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { SignIn } from "./pages/signIn";
import { createBrowserRouter, RouterProvider } from "react-router";
import { DashBoard } from "./pages/dashboard";
import { ErrorPage } from "./pages/errorPage";

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
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
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
    path: "/dashboard",
    element: (
      <Layout>
        <DashBoard />
      </Layout>
    ),
  },
  {
    path: "/error", // ROUTE FOR THE ERROR PAGE
    element: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
