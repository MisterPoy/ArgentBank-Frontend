import React from "react";
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
