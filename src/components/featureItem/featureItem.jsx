import React from "react";

// FeatureItem component - Displays a single feature with icon, title, and content
export function FeatureItem({ title, src, content, id, description }) {
  return (
    <div className="feature-item">
      <img src={src} alt={description} className="feature-icon" />
      <h3 className="feature-item-title">{title}</h3>
      <p>{content}</p>
    </div>
  );
}
