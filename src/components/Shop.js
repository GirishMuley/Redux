import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import actionCreators from "../state/action-creators";

const Shop = () => {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <>
      <div className="container">
        <button
          className="btn btn-danger mx-2"
          onClick={() => {
            withdrawMoney(100);
          }}
        >
          -
        </button>
        Add to cart
        <button
          className="btn btn-primary mx-2"
          onClick={() => {
            depositMoney(100);
          }}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Shop;
