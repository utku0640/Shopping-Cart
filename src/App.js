import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Products from "./products/Products";
import Cart from "./cart/Cart";
import SharedLayout from "./SharedLayout";
import productItems from "./data";
function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (productItem) => {
    const ProductExist = cartItems.find(
      (cartItem) => cartItem.id === productItem.id
    );
    console.log(ProductExist);
    if (ProductExist) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === productItem.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...productItem, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (productItem) => {
    const ProductExist = cartItems.find(
      (cartItem) => cartItem.id === productItem.id
    );
    if (ProductExist.quantity === 1) {
      setCartItems(
        cartItems.filter((cartItem) => cartItem.id !== productItem.id)
      );
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === productItem.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const handleRemoveAllProduct = () => {
    setCartItems([]);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="products"
            element={
              <Products
                productItems={productItems}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart
                cartItems={cartItems}
                handleAddProduct={handleAddProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleRemoveAllProduct={handleRemoveAllProduct}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// producExistin içinde her basdığımızda sadece bir değer var başta yok,
