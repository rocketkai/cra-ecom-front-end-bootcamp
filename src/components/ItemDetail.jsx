import React, { useState, useReducer, useContext } from "react";
import {
  addCartAction,
  EcomContext,
} from "../store";



export default function ItemDetail() {
  const {store, dispatch} = useContext(EcomContext);
  const [quantity, setQuantity] = useState(1);
  const {items, currentItemIndex} = store;
  const item = items[currentItemIndex];

  if (!item) {
    return <div></div>;
  }

  const handleSelectChange = (event) => {
    setQuantity(event.target.value);
  };

  const detailAddCart = () => {
    dispatch(addCartAction(item, quantity));
  };

  return (
    <div className="col-sm">
      <div className="item-detail">
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p>
          <select
            className="item-quantity"
            value={quantity}
            onChange={handleSelectChange}
          >
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <option value={index + 1}>{index + 1}</option>
              ))}
          </select>
          <button type="button" onClick={detailAddCart}>
            Add To Cart
          </button>
        </p>
      </div>
    </div>
  );
}
