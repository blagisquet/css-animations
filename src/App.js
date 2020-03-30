import React from "react";
import "./styles.scss";
import Button from "./Components/3dbutton/Button";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="btn">Charger!</div>
        <div class="progress">
          <div class="progress__bar" />
        </div>
      </div>
      <Button />
    </div>
  );
}
