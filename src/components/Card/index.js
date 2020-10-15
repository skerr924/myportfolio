/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import portfolio from "../../portfolio.json";
import "../../index.css";

function Card() {
  return portfolio.map((item) => (
    <div className="s12 col m4">
      <div className="card-image">
        <img src={item.image} alt={item.imageAlt} />
      </div>
      <div className="card-content">
        <p>
          <b>{item.name}</b>
          <br />
          {item.description}
        </p>
        <i>
          <a href={item.ghlink} target="_blank">
            Github
          </a>
        </i>
        <br />
        <i>
          <a href={item.deployed}>Deployed site</a>
        </i>
        <br />
        <br />
      </div>
    </div>
  ));
}

export default Card;
