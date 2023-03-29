import React from "react";
import "./styles/Error.css";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className="pageNotFoundContainer">
      <div className="pageNotFound">Page Not Found</div>
      <NavLink to="/" className="backToDashBoard">
        {" "}
        Back To Dashboard{" "}
      </NavLink>
    </div>
  );
};

export default Error;
