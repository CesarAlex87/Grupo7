import React from "react";
import { MenuPublifyer } from "./components/MenuPublifyer/MenuPublifyer";
import { HeadPublifyer } from "./components/HeadImpactifyer/HeadPublifyer";
import { BodyImpactifyer } from "./components/BodyImpactifyer/BodyImpactifyer";

const AppUi = () => {
  return (
    <>
      <HeadPublifyer />
      <MenuPublifyer />
      <BodyImpactifyer />
    </>
  );
};

export { AppUi };
