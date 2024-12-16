import React from "react";
import { useState } from "react";
import "./App.css";
import { Home } from "./pages/home";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { SignIn } from "./pages/signIn";

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

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Home />
    </Layout>
  );
}

export default App;
