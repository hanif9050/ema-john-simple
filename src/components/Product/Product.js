import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  //   console.log(props.product);
  const product = props.product;
  const { name, img, stock, seller, price } = props.product;
  return (
    <div className="single-product">
      <div className="img-container">
        <img src={img} alt="" />
      </div>
      <div className="img-info">
        <h5>{name}</h5>
        <p>
          <small>by: {seller}</small>
        </p>
        <h6>Price: ${price}</h6>
        <p>Only {stock} left in stock - order soon</p>
        <button onClick={() => props.handleAddCart(props.product)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
