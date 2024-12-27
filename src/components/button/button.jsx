import React from "react";

export function Button({type, className, content, onClick}) {
  return (
    <>
    <button className={className} type={type} content={content} onClick={onClick}>{content}</button>
    </>
  );
}
