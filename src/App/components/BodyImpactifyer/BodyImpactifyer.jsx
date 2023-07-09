import React from "react";
import "./BodyImpactifyer.css";
import {HeadPublifyer} from "../HeadImpactifyer/HeadPublifyer";
import icon from "./img"
import cover from "./img"

const BodyImpactifyer = () => {
  return (
    <div className="mainContent">
      <div className="header">
        <p>Impactify</p>
      </div>
      <div className="sections">
      <HeadPublifyer className="profileInfo"/>
        <div className="content-rectangle content-video">
          <div className="titleSection">
            <img src={icon[0]} alt=""  className="icon"/>
            <h2> TOP VIDEOS</h2>
          </div>
        </div>
        <div className="content-rectangle" >
          <div className="titleSection">
            <img src={icon[0]} alt="" />
            <h2>TENDENCIAS</h2>
          </div>
        </div>
        <div className="content-rectangle">
        <div className="titleSection">
            <img src={icon[0]} alt="" />
            <h2>COMENTARIOS</h2>
          </div>
        </div>
        <div className="content-rectangle">
        <div className="titleSection">
            <img src={icon[0]} alt="" />
            <h2>HERRAMIENTAS</h2>
          </div>
        </div>      
      </div>
      </div>
  );
};

export { BodyImpactifyer };
