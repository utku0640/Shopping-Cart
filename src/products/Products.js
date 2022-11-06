import React from "react";
import "./products.css";

function Products({ productItems, handleAddProduct }) {
  return (
    <div>
      {productItems.map((productItem) => {
        return (
          <div className="products-container">
            <div className="products-card">
              <div className="products-image">
                <img src={productItem.image} alt={productItem.name} />
              </div>
              <div className="products-name">
                <h2>{productItem.name}</h2>
              </div>
              <button onClick={() => handleAddProduct(productItem)}>
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
