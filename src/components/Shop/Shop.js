import React, { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);
  const [cart, setCart] = useState([]);
  const handleAddCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className="products-container">
      <div className="product">
        {products.map((index) => (
          <Product product={index} handleAddCart={handleAddCart}></Product>
        ))}
      </div>
      <div className="product-cart">
        <Cart item={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
