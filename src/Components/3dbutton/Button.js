import React from "react";
import "./Button.scss";

export default function button() {
  return (
    <div>
      <div class="button3d">
        <div class="btn3d">
          <div class="btn__flip">
            <div class="btn__flip--off">OFF</div>
            <div class="btn__flip--on">ON</div>
          </div>
        </div>
      </div>
    </div>
  );
}
