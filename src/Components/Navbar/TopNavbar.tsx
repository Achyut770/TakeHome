import React from "react";
import "./styles/TopNavbar.css";

const TopNavbar = () => {
  return (
    <>
      <nav className="topNavbar">
        <div>
          <img
            src="https://i.ibb.co/cYhrwwZ/EKGHanti-removebg-preview.png"
            className="ekGhantiImage"
            alt="EKGHanti"
          />
        </div>
        <div className="NAL">
          <div>No</div>
          <div>Admin</div>
          <div>LogOut</div>
        </div>
      </nav>
      <div style={{ height: "100px" }}></div>
    </>
  );
};

export default TopNavbar;
