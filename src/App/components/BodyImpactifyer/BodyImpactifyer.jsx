import React from "react";
import { Img } from "react-image";
import "./BodyImpactifyer.css";

const BodyImpactifyer = () => {
  return (
    <div className="container">
      <div className="top-row">
        <div className="content-rectangle">
          <h2>TOP VIDEOS</h2>
        </div>
        <div className="content-rectangle">
          <h2>TENDENCIAS</h2>
        </div>
      </div>
      <div className="bottom-row">
        <div className="content-rectangle">
          <h2>COMENTARIOS</h2>
        </div>
        <div className="content-rectangle">
          <h2>HERRAMIENTAS</h2>
        </div>
      </div>
    </div>
  );
};

export { BodyImpactifyer };
