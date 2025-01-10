import React from "react";

// Button compnent - Reusable button with customizable properties
export function Button({type, className, content, onClick}) {
  return (  
    <button className={className} type={type} content={content} onClick={onClick}>{content}</button>    
  );
}
