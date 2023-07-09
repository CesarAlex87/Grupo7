import React from "react";
import "./App.css";
import { MenuPublifyer } from "./components/MenuPublifyer/MenuPublifyer";
import { HeadPublifyer } from "./components/HeadImpactifyer/HeadPublifyer";
import { BodyImpactifyer } from "./components/BodyImpactifyer/BodyImpactifyer";
// import ChartComponent from "./components/ChartComponent/ChartComponent";
// import dataSet from "./src/DataSetTendencias.js";

const AppUi = () => {
  return (
    <>
      <div className="container">
        <div className="menu">
          <MenuPublifyer />
        </div>
        <div className="body">
          <BodyImpactifyer />
        </div>
        <div className="head">
          <HeadPublifyer />
        </div>
      </div>
      {/* <ChartComponent dataSet={dataSet} /> */}
    </>
  );
};

export { AppUi };
