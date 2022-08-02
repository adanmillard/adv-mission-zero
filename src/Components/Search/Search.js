import React from "react";
import "./search.css";

export const Search = () => {
  return (
    <div className="search-background-img">
      <div className="search-main-container">
        <div className="search-blurb-container">
          <h2 className="blurb">Luxury cars, drive away with</h2>
          <h2 className="confidence">
            <i>EXCELLENCE.</i>
          </h2>
        </div>
        <div className="search-input-container">
          <input type="text"></input>
          <button className="search-btn">SEARCH</button>
        </div>
      </div>
    </div>
  );
};
