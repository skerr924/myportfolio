/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import portfolio from "../../portfolio.json";
const relPrefixImg = process.env.PUBLIC_URL + "/assets/images/";

function Card() {
  return portfolio.map((item) => (
    <div className="col s3" key={item.id}>
      <div className="card vertical">
        <div className="card-image">
          <img src={relPrefixImg + item.image} alt={item.imageAlt} />
        </div>

        <div className="card-stacked">
          <div className="card-content">
            <p>
              <b>{item.name}</b>
              <br />
              {item.description}
            </p>

            {item.ghlink && (
              <i>
                <a href={item.ghlink} target="_blank">
                  Github
                </a>
              </i>
            )}

            <br />
            {item.deployed && (
              <i>
                <a href={item.ghlink} target="_blank">
                  Deployed
                </a>
              </i>
            )}
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  ));
}

export default Card;
