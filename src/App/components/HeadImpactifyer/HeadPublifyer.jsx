import React from "react";
import images from "./img";
import "./HeadPublifyer.css"

const HeadPublifyer = () => {
  return (
    <div className="HeadPublifyer">
      <div className="userPhoto">
        <img className="imgPhoto" src={images[0]} alt="User Photo" />
      </div>
      <div className="userDetails">
          <h3>Cesar</h3>
          <p>Following: 2k</p>
          <p>Followers: 476.4k</p>
          <p>Likes: 2.6M</p>
        </div>
    </div>
  );
};

export {HeadPublifyer};
