import React from "react";
import { MenuPublifyer } from "./components/MenuPublifyer/MenuPublifyer";
import { HeadPublifyer } from "./components/HeadImpactifyer/HeadPublifyer";
import { BodyImpactifyer } from "./components/BodyImpactifyer/BodyImpactifyer";
import { Grafica } from "./components/Graph/Graph";
import jsonData from './DataSetTendencias.json'; 



const AppUi = () => {
  return (
    <>
      <HeadPublifyer />
      <MenuPublifyer />
      <BodyImpactifyer />
      <ChartComponent dataset={jsonData} />

    </>
  );
};

export { AppUi };
