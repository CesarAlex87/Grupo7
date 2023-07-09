import React from "react";
import images from "./img";
import "./MenuPublifyer.css";

const MenuPublifyer = () => {
  return (
    <div className="MenuPublifyer">
      <div className="LogoPublifyer">
        <img src={images[0]} />
        <p>Publifyer</p>
      </div>
      <div className="options">
        <div className="option-dashboard">
          <img src={images[1]} />
          <p>Dashboard</p>
        </div>
        <div className="option-campaigns">
          <img src={images[2]} />
          <p>Campañas</p>
        </div>
        <div className="option-report">
          <img src={images[3]} />
          <p>Reporte</p>
        </div>
        <div className="option-profile">
          <img src={images[4]} />
          <p>Perfil</p>
        </div>
        <div className="option-impactify">
          <img src={images[5]} />
          <p>Impactify</p>
        </div>
      </div>
    </div>
  );
};

export { MenuPublifyer };
