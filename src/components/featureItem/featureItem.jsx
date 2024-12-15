import React from "react";

export function FeatureItem({title, src, content, id}) {
  return (
    <>
      <div className="feature-item" key={id}>
        <img
          src={src}
          alt="Chat Icon"
          className="feature-icon"
        />
        <h3 className="feature-item-title">{title}</h3>
        <p>
         {content}
        </p>
      </div>
    </>
  );
}
