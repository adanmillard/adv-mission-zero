import React from "react";
import { cardsInformation } from "./cardsInformation";
import "./cards.css";

export const Cards = ({ search }) => {
  return (
    <div className="cards-flex-main-container">
      {cardsInformation
        .filter((information) => {
          return information.name.toLowerCase().includes(search.toLowerCase());
        })
        .map((information, i) => {
          return (
            <div key={i} className="card-main-container">
              <img
                src={information.image}
                alt={information.name}
                className="car-image"
              />
              <h3 className="car-name">
                <b>{information.name}</b>
              </h3>
              <h4 className="car-price">Price: {information.price}</h4>
              <h4 className="car-kms">KMS: {information.kms}</h4>
            </div>
          );
        })}
    </div>
  );
};
