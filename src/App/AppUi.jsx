import React from "react";
import "./App.css";
import { MenuPublifyer } from "./components/MenuPublifyer/MenuPublifyer";
import { HeadPublifyer } from "./components/HeadImpactifyer/HeadPublifyer";
import { BodyImpactifyer } from "./components/BodyImpactifyer/BodyImpactifyer";
import { dataSetTendencias } from "../DataSetTendencias";

const AppUi = () => {
  return (
    <>
      <div className="container">
          <MenuPublifyer />
        
        <div className="body">
          <BodyImpactifyer />
        </div>
      </div>
    </>
  );
};

export { AppUi };
