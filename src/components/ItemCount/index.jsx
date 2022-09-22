import React from "react";
import "./style.css";

const ItemCount = ({ count, handleAdd, handleDecrement }) => {
  return (
    <div>
      <span onClick={handleDecrement}>-</span>
      <span>{count}</span>
      <span onClick={handleAdd}>+</span>
    </div>
  );
};

export default ItemCount;
