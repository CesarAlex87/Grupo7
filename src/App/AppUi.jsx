import React from "react";
import { MenuPublifyer } from "./components/MenuPublifyer/MenuPublifyer";
import { HeadPublifyer } from "./components/HeadImpactifyer/HeadPublifyer";
import { BodyImpactifyer } from "./components/BodyImpactifyer/BodyImpactifyer";
import ChartComponent from './components/ChartComponent/ChartComponent';
import dataSet from './src/DataSetTendencias.json';

const AppUi = () => {
  return (
    <>
      <HeadPublifyer />
      <MenuPublifyer />
      <BodyImpactifyer />
      <ChartComponent dataSet={dataSet} />
    </>
  );
};

export { AppUi };

