import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

function Navbar() {
  const { items } = useSelector((state) => state.cart);
  return (
    <div className="Navbar">
      <div className="Nav-left">
        <h1 className="navtext">Shopping Cart</h1>
      </div>
      <div className="Nav-right">
        <Link to={`/item`} className="CartIcon">
          <FaShoppingCart size={45} />
        </Link>
        <div className="CartNumber">{items.length}</div>
      </div>
    </div>
  );
}

export default Navbar;
