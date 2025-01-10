import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Home } from "./pages/home";
import { SignIn } from "./pages/signIn";
import { DashBoard } from "./pages/dashboard";
import { ErrorPage } from "./pages/errorPage";

///////// Layout element for wrapping pages with common elements (header and footer)
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

////////// Create routes with Layout elements for each route

const router = createBrowserRouter([
  {
    path: "/", // Home page route
    element: (
      <Layout>
        <Home />
      </Layout>
    ),
    // render ErrorPage components if an error occurs
    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: "/signin", // Sign-in page route
    element: (
      <Layout>
        <SignIn />
      </Layout>
    ),
  },
  {
    path: "/dashboard", // Dashboard page route
    element: (
      <Layout>
        <DashBoard />
      </Layout>
    ),
  },
  {
    path: "/error", // Route for the ErrorPage
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
