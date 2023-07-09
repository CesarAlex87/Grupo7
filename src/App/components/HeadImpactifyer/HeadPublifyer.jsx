import React from "react";
import { Img } from "react-image";
import images from "./img";

const HeadPublifyer = () => {
  return (
    <div className="HeadPublifyer">
      <p>Impactify</p>
      <div className="userPhoto">
        <img src={images[0]} />
        <p>Following: 168.4k</p>
        <p>Followers: 168.4k</p>
        <p>Likes: 168.4k</p>
      </div>
    </div>
  );
};

export { HeadPublifyer };
