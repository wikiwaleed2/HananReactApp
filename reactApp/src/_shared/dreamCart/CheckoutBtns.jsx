import React, { useState } from "react";
import "./dreamCart.css";
const CheckoutBtns = (props) => {
  return (
    <div>
      <button
        onClick={props.toggler}
        className="btn form-control my-1 "
        style={{
          backgroundColor: props.backgroundColor,
          color: props.color,
          border: props.border,
          paddingBottom: "2.5rem",
          paddingTop: "1rem",
        }}
      >
        <img src={props.img} alt="" height={24} className="absoluteClass" />
        {props.text}
      </button>
    </div>
  );
};

export default CheckoutBtns;
