import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItems,calculatePrice, selectedItems } from "./ShopReducer";
import { Link } from "react-router-dom";

const ItemDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectedItems);
  const { totalPrice } = useSelector((state) => state.cart);

  const handleRemoveData = () => {
    dispatch(removeItems());
  };
  useEffect(()=>{
    dispatch(calculatePrice())
    },[])
  if (cartItems.length === 0) {
    return (
      <>
        <div className="border border-primary d-flex p-2 m-5 text-warning">
          Item not found
        </div>
        <Link to="/">
          <button className="m-5 btn btn-primary">
            Continue Shopping.....
          </button>
        </Link>
      </>
    );
  }

  return (
    <div className="Items">
      <div className="Items-side1">
        <div className="shop">
          {cartItems.map((item) => (
            <div key={item.id} className="card">
              <div className="card-body">
                <p className="card-title text-primary">{item.name}</p>
                <p className="card-text">
                  Price of the product: ₹ {item.quantity * item.price}
                </p>
                <p className="card-text">Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex justify-content-center">
            <button
              className="m-5 btn btn-warning"
              onClick={() => handleRemoveData()}
            >
              Clear Items
            </button>
          </div>
      </div>
      <div className="Items-side2">
        <div className="Billing">
          <div>
            <h2 >Items Names: </h2>
            {cartItems.map((item) => {
              return <h5 key={item.id} className="ItemsName">{item.name}</h5>;
            })}
          </div>
          <div >
            <h2>Total Price: </h2>
            <h5 className="TotalPrice">₹ {totalPrice}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
