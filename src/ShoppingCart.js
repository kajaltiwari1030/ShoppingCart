import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  calculatePrice,
  incrementItem,
  decrementItem,
} from "./ShopReducer";
import { data } from "../src/data.js";
import { FaPlus } from "react-icons/fa";
import { TiMinus } from "react-icons/ti";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const handleAddItem = (item) => {
    dispatch(addItem(item));
    toast("Item Added!");
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem(id));
  };

  return (
    <>
      <div className="shop">
        {data.length === 0 ? (
          <p>No items available</p>
        ) : (
          data.map((item) => (
            <div key={item.id} className="card">
              <div className="card-body">
                <p className="card-title text-primary fs-6">{item.name}</p>
                <p className="card-text">Price: ₹ {item.price}</p>
                <p className="card-text">Quantity:{item.quantity}</p>
                <div className="card-btn">
                  <button
                    className="button"
                    onClick={() => handleDecrement(item.id)}
                  >
                    <TiMinus size={20} />
                  </button>
                  <button
                    className="button"
                    onClick={() => handleAddItem(item)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="button"
                    onClick={() => handleAddItem(item)}
                  >
                    <FaPlus size={15} />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <ToastContainer />
    </>
  );
};

export default ShoppingCart;
