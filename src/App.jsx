import './App.css';

import React, { useState } from 'react';
import axios from 'axios';
// make sure that axios always sends the cookies to the backend server
axios.defaults.withCredentials = true;

import Cart from './components/Cart.jsx';
import Items from './components/Items.jsx';
import ItemDetail from './components/ItemDetail.jsx';

const REACT_APP_BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:3004';

export default function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState([]);
  const [selectedItemIndex, setSelectedItem] = useState();

  const addToCart = (item, quantity) => {
    const cartItem = { quantity, ...item };
    setCart([cartItem, ...cart]);
  };

  const emptyCart = () => {
    setCart([]);
  };

  const setItemDetail = (itemIndex) => {
    setSelectedItem(itemIndex);
  };

  const getItems = () => {
    axios.get(`${REACT_APP_BACKEND_URL}/items`).then((result) => {
      console.log(result);
      setItems(result.data.items);
    });
  };

  const selectedItem = items[selectedItemIndex];

  return (
    <div className="container">
      <div className="row">
        <h1 className="page-title">Wow Shopping!</h1>
        <Items items={items} setItemDetail={setItemDetail} />
        {items.length === 0 && (
          <button type="button" onClick={getItems}>
            Get Items
          </button>
        )}
        <ItemDetail item={selectedItem} addToCart={addToCart} />
        <Cart items={cart} emptyCart={emptyCart} />
      </div>
    </div>
  );
}
