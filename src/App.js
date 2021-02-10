import './App.css';

import React from "react";

import {
  EcomProvider
} from "./store";

import Cart from './components/Cart.jsx';
import Items from './components/Items.jsx';
import ItemDetail from './components/ItemDetail.jsx';

export default function App() {
  return (
    <EcomProvider>
    <div className="container">
      <div className="row">
        <h1 className="page-title">Wow Shopping!</h1>
        <Items/>
        <ItemDetail/>
        <Cart/>
      </div>
    </div>
    </EcomProvider>
  );
}
