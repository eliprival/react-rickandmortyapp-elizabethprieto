import React from "react";
import "./Styles/LocationCard.css";

const LocationCard = ({ info }) => {
  return (
    <article className="location">
      <h2 className="location__name">{info?.name}</h2>
      <ul className="location__list">
        <li className="location__item">
          <span>Type: </span>
          <span>{info?.type}</span>
        </li>
        <li className="location__item">
          <span>Dimention: </span>
          <span>{info?.dimension}</span>
        </li>
        <li className="location__item">
          <span>Population: </span>
          <span>{info?.residents.length}</span>
        </li>
      </ul>
    </article>
  );
};

export default LocationCard;
