import React from "react";
import "./cart.css";

function Cart({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleRemoveAllProduct,
}) {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );
  return (
    <div>
      <span> Total Price:${totalPrice}</span>
      {cartItems.length >= 1 && (
        <button onClick={() => handleRemoveAllProduct()}>
          Remove All Item
        </button>
      )}
      <div>
        {cartItems.length === 0 && <h2>Please add product</h2>}
        {cartItems.map((cartItem) => {
          return (
            <div className="cart-container">
              <div className="cart">
                <div>
                  <img src={cartItem.image} alt={cartItem.name} />
                  <span> Price:${cartItem.price}</span>
                </div>
                <h1>{cartItem.name}</h1>
                <span>Quantity:</span>
                <p>{cartItem.quantity}</p>
                <br></br>

                <button onClick={() => handleAddProduct(cartItem)}>+</button>
                <button onClick={() => handleRemoveProduct(cartItem)}>-</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Cart;
