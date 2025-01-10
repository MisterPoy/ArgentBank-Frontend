import React from "react";
import { HeroContent } from "../heroContent/heroContent";
import "./hero.css";

// Hero component - Wrapper for the HeroContent
export function Hero() {
  return (
    <div className="hero">
      <HeroContent />
    </div>
  );
}
