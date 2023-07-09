import React from "react";
import { Img } from "react-image";
import "./BodyImpactifyer.css";

const BodyImpactifyer = () => {
  return (
    <div class="container">
      <div class="top-row">
        <div class="content-rectangle">
          <h2>TOP VIDEOS</h2>
        </div>
        <div class="content-rectangle">
          <h2>TENDENCIAS</h2>
        </div>
      </div>
      <div class="bottom-row">
        <div class="content-rectangle">
          <h2>COMENTARIOS</h2>
        </div>
        <div class="content-rectangle">
          <h2>HERRAMIENTAS</h2>
        </div>
      </div>
    </div>
  );
};

export { BodyImpactifyer };
