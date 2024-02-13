import React from "react";
import "./card.scss";

const Card = (props) => {
  return (
    <div
      className={`cards-wrapper ${props.className}`}
      onClick={props.onClickCard}
    >
      <div className="image-wrapper">
        <img src={props.imgSrc} className="image" />
      </div>
      <div className="card-title">
        <label className="title">{props.title}</label>
      </div>
      <div className="card-details">
        <label className="price-tag">${props.price}</label>
      </div>
    </div>
  );
};

Card.defaultProps = {
  className: "",
  imgSrc: "",
  title: "",
};

export default Card;
