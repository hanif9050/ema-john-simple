import React from "react";

const Cart = (props) => {
  const cart = props.item;
  console.log(cart);
  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    console.log("product", product.price);
    total = total + product.price;
    console.log("total", total);
  }
  let shippingCost = 0;
  if (total > 35) {
    shippingCost = 0;
  } else if (total > 15) {
    shippingCost = 4;
  } else if (total > 0) {
    shippingCost = 12;
  }

  const formatNumber = (num) => {
    const fixedNum = num.toFixed(2);
    return Number(fixedNum);
  };
  let tax = total * 0.1;
  const grandTotal =
    formatNumber(total) + formatNumber(tax) + formatNumber(shippingCost);
  return (
    <div>
      <h1>Ordered Summery</h1>
      <p>Ordered item: {cart.length}</p>
      <p>Shipping Cost: {shippingCost}</p>
      <p>Product Price : {formatNumber(total)}</p>
      <p>Tax : {formatNumber(tax)}</p>
      <p>Total :{formatNumber(grandTotal)}</p>
    </div>
  );
};

export default Cart;
