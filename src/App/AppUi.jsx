import React from "react";
import "./App.css";
import { MenuPublifyer } from "./components/MenuPublifyer/MenuPublifyer";
import { HeadPublifyer } from "./components/HeadImpactifyer/HeadPublifyer";
import { BodyImpactifyer } from "./components/BodyImpactifyer/BodyImpactifyer";
import { Grafica } from "./components/Grafica/Graph.js";

const AppUi = () => {
  return (
    <div className="container">
      <div className="menu">
        <Menu />
      </div>
      <div className="body">
        <Body />
      </div>
      <div className="head">
        <Head />
      </div>
    </div>
  );
};

export { AppUi };
