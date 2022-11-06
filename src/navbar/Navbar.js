import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FcShop } from "react-icons/fc";

function Navbar() {
  return (
    <div className="navbar-container">
      <div className="navbar">
        <h2>
          <span>
            <FcShop />
          </span>
          Shopping
        </h2>
        <ul>
          <li>
            <a>
              <Link to="/">Home</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="products">Products</Link>
            </a>
          </li>
          <li>
            <a>
              <Link to="cart">Cart</Link>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
{
  /* <Link to="/">
        Home
        <FcShop />
      </Link>
      <Link to="products">Products</Link>
      <Link to="cart">Cart</Link> */
}
