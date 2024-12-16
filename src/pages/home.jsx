import React from "react";
import { Footer } from "../components/footer/footer";
import { Header } from "../components/header/header";
import { Hero } from "../components/hero/hero";
import { Features } from "../components/features/features";

export function Home() {
  return (
    <>
      <main>
        <Hero />
        <Features />
      </main>
    </>
  );
}
export default Home;
