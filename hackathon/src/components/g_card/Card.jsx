import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ /*item*/ }) => {
  return (
    <Link to="/gig/123" className="link">
      <div className="gigCard">
        <img src="" alt="" />
        <div className="info">
          <div className="user">
            <img src="" alt="" />
            <span>{/*item.username*/}</span>
          </div>
          <p>{/*item.desc*/}</p>
          <div className="star">
            <img src="" alt="" />
            <span>{/*item.star*/}</span>
          </div>
        </div>
        <hr />
        <div className="detail">
          <img src="" alt="" />
          <div className="price">
            <span>Starting At</span>
            <h2>
              $ {/*item.price*/}
              <sup>50</sup>
            </h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;