import React from "react";
import "./dreamCart.css";
const TermsCondition = () => {
  return (
    <>
      <form action="#">
        <div className="d-flex align-items-center">
          <div className="pt-2">
            <input
              type="radio"
              checked
              style={{ height: "20px", width: "20px" }}
            />
          </div>
          <div className="ml-2" style={{ fontSize: "20px" }}>
            I accept the Policy and Terms{" "}
            <a href="#" style={{ color: "#104A8E" }}>
              Read
            </a>
          </div>
        </div>
        <div className="d-flex align-items-center mt-3">
          <div className="pt-2">
            <input
              type="radio"
              checked
              style={{ height: "20px", width: "20px" }}
            />
          </div>
          <div className="ml-2" style={{ fontSize: "20px", color: "#104A8E" }}>
            Checkout as Guest
          </div>
        </div>
        <div className="d-flex align-items-start">
          <div className="pt-1">
            <input type="radio" style={{ height: "20px", width: "20px" }} />
          </div>
          <div className="ml-2" style={{ fontSize: "20px", color: "#104A8E" }}>
            checkout out with Dream Makers account
            <p style={{ fontSize: "15px" }}>
              Save time, Track Donations and score Rewards!
            </p>
          </div>
        </div>
      </form>
    </>
  );
};

export default TermsCondition;
