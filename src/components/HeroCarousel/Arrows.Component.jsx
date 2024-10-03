import React from "react";

export const NextArrow = (props) => {
  console.log("NextArrow props:", props);
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "black" }}
      onClick={props.onClick}
    />
  );
};

export const PrevArrow = (props) => {
  console.log("PrevArrow props:", props);
  return (
    <div
      className={props.className}
      style={{ ...props.style, backgroundColor: "black" }}
      onClick={props.onClick}
    />
  );
};
