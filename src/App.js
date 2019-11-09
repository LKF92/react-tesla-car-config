import React, { useState } from "react";
import WhiteTesla from "./img/white-tesla.png";
import BlackTesla from "./img/black-tesla.png";

import "./App.css";

function App() {
  const [model, setModel] = useState({ model: "", price: 0 });
  const [color, setColor] = useState({ color: "", price: 0 });
  const total = model.price + color.price;
  return (
    <div className="App-header">
      <h1>Tesla Car Configurator</h1>
      <div className="configurator-box">
        <div className="selections-box">
          <h3>Select a model</h3>
          <div
            className={
              model.model === "Long Range"
                ? "active-button"
                : "selection-button"
            }
            onClick={() => {
              setModel({ model: "Long Range", price: 90700 });
            }}
          >
            <p className="selection-info">Long Range - 90 700€</p>
          </div>
          <div
            className={
              model.model === "Performance"
                ? "active-button"
                : "selection-button"
            }
            onClick={() => {
              setModel({ model: "Performance", price: 107900 });
            }}
          >
            <p className="selection-info">Performance - 107 900€</p>
          </div>
          <h3>Select a color</h3>
          <div
            className={
              color.color === "White" ? "active-button" : "selection-button"
            }
            onClick={() => {
              setColor({ color: "White", price: 0 });
            }}
          >
            <p className="selection-info">Pearl White Multi-Coat - 0€</p>
          </div>
          <div
            className={
              color.color === "Black" ? "active-button" : "selection-button"
            }
            onClick={() => {
              setColor({ color: "Black", price: 1500 });
            }}
          >
            <p className="selection-info">Solid Black - 1 500€</p>
          </div>
        </div>
        <div className="tesla-display">
          <img
            src={color.color === "Black" ? BlackTesla : WhiteTesla}
            alt="tesla picture"
          />
        </div>
      </div>
      <div className="checkout">
        {total}€ <button type="button">Buy</button>
      </div>
    </div>
  );
}

export default App;
