import React from "react";
import "./dropdown.css";

export const Dropdown = ({ setOpenModal, toggle }) => {
  return (
    <div className="dropdown-menu">
      <button className="dropdown-menu-btn">Auctions</button>
      <button className="dropdown-menu-btn">Sell</button>
      <button className="dropdown-menu-btn">Contact</button>
      <button
        className="header-login-btn dropdown-btn"
        onClick={() => setOpenModal(true)}
      >
        Login
      </button>
      <button className="dropdown-menu-btn" onClick={() => toggle()}>
        Close
      </button>
    </div>
  );
};
