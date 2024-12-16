import React from "react";
import featuresList from "../../data/featuresList.json";
import { FeatureItem } from "../featureItem/featureItem";
import "./features.css";

export function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <>
        {featuresList.map((item) => (
          <FeatureItem
            key={item.id}
            title={item.title}
            content={item.content}
            src={item.src}
          />
        ))}
      </>
    </section>
  );
}
