import React from "react";

export const NextArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{color: "red", padding: "10px"}}
      onClick={props.onClick}
    />
  );
};

export const PrevArrow = (props) => {
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "black" }}
      onClick={props.onClick}
    />
  );
};
