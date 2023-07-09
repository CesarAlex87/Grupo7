import React from "react";
import "./App.css";
import { MenuPublifyer } from "./components/MenuPublifyer/MenuPublifyer";
import { HeadPublifyer } from "./components/HeadImpactifyer/HeadPublifyer";
import { BodyImpactifyer } from "./components/BodyImpactifyer/BodyImpactifyer";
import ChartComponent from './components/ChartComponent/ChartComponent';
import dataSet from './src/DataSetTendencias.json';

const AppUi = () => {
  return (
<<<<<<< HEAD
    <>
      <HeadPublifyer />
      <MenuPublifyer />
      <BodyImpactifyer />
      <ChartComponent dataSet={dataSet} />
    </>
=======
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
>>>>>>> ccb1f9c910cfb73ede7f5fba773164f17ea07d32
  );
};

export { AppUi };

