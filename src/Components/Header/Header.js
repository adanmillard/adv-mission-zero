import React, { useState } from "react";
import "./header.css";

export const Header = ({ setOpenModal }) => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };

  return (
    <div className="header-main-container">
      <div className="header-img-container">
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c0840e59-db43-4681-ae7b-31a04dc4bc55/d7eqdvw-4e97ac92-e4b9-4498-9655-e4d612eb478b.png/v1/fill/w_1192,h_670,strp/random_logo_by_criticl_d7eqdvw-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTAwIiwicGF0aCI6IlwvZlwvYzA4NDBlNTktZGI0My00NjgxLWFlN2ItMzFhMDRkYzRiYzU1XC9kN2VxZHZ3LTRlOTdhYzkyLWU0YjktNDQ5OC05NjU1LWU0ZDYxMmViNDc4Yi5wbmciLCJ3aWR0aCI6Ijw9MTYwMCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.X991O1jF5lTNZbbEoHEfoo6nlHEihBMHMIm5-uBCXcU"
          alt="company logo"
          className="company-logo"
        />
        <h2 className="company-name">N1 LUXURY VEHICLES</h2>
      </div>
      <div className="header-button-container">
        <div className={active ? "header-btns active" : "header-btns"}>
          <button
            className="header-btn one"
            onClick={() => {
              toggle();
            }}
          >
            Auctions
          </button>
          <button
            className="header-btn two"
            onClick={() => {
              toggle();
            }}
          >
            Sell
          </button>
          <button
            className="header-btn three"
            onClick={() => {
              toggle();
            }}
          >
            Contact
          </button>
          <button
            className="header-login-btn"
            onClick={() => {
              setOpenModal(true);
              toggle();
            }}
          >
            Login
          </button>
        </div>
        <div
          className={active ? "hamburger active" : "hamburger"}
          onClick={() => {
            toggle();
          }}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </div>
  );
};
