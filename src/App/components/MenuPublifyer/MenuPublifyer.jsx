import React from "react";
import { Img } from "react-image";
import images from "./img";

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
          <p>Campañas</p>
        </div>
        <div className="option-report">
          <p>Reporte</p>
        </div>
        <div className="option-profile">
          <p>Perfil</p>
        </div>
        <div className="option-impactify">
          <p>Impactify</p>
        </div>
      </div>
    </div>
  );
};

export { MenuPublifyer };
