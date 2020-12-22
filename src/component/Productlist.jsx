import React from "react";
import "./Productlist.css";

export default function Productlist(props) {
  const { product_image, title, discount ,price} = props;

  return (
    <div className="container">
      <div>
        <div className="discount">{discount}</div>
        <img src={product_image} alt="laptop"/>
      </div>
      <div className="description">
        <span>{title}</span>
      </div>
      <div>
        <span className="price">{price}</span>
      </div>
    </div>
  );
}
