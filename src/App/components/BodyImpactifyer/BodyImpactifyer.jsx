import React from "react";
import "./BodyImpactifyer.css";
import {HeadPublifyer} from "../HeadImpactifyer/HeadPublifyer";
import icon from "./img"
import cover from "./img"

const BodyImpactifyer = () => {
  return (
    <div className="mainContent">
      <div className="header">
        <p>Impactify</p>
      </div>
      <div className="sections">
      <HeadPublifyer className="profileInfo"/>
        <div className="content-rectangle sectionVideos">
          <div className="titleSection">
            <img src={icon[0]} alt=""  className="icon"/>
            <h2> TOP VIDEOS</h2>
          </div>
          <div className="video-container">
              <div className="video-item">
                <img  src={icon[2]} alt="Video 1" />
                <p>Visitas: 300k</p>
                <p>Moda</p>
              </div>
              <div className="video-item">
                  <img  src={icon[3]} alt="Video 2" />
                  <p>Visitas: 170k</p>
                  <p>Comedia</p>
              </div>    
              <div className="video-item">
                    <img  src={icon[4]} alt="Video 3" />
                    <p>Visitas: 80k</p>
                    <p>PetFriendly</p>
              </div> 
          </div>
        </div>
        
        <div className="content-rectangle sectionComments">
        <div className="titleSection">
            <img src={icon[0]} alt="" />
            <h2>COMENTARIOS</h2>
          </div>
          <div className="video-containerComents">
              <div className="video-itemComent">
                <p>¡AWEEEEEE 🥰🥰🥰!</p>
              </div>
              <div className="video-itemComent">
                  <p>¡Me encanta la música en este video! 🎵</p>
              </div>    
              <div className="video-itemComent">
                    <p>¡Esto alegró mi día! ❤️</p>
              </div>
              <div className="video-itemComent">
                    <p>¡Contenido impresionante! 🔥</p>
              </div> 
              <div className="video-itemComent">
                    <p>¡Estoy sin palabras! 😮</p>
              </div>  
          </div>
        </div>
        <div className="content-rectangle" >
          <div className="titleSection">
            <img src={icon[0]} alt="" />
            <h2>TENDENCIAS</h2>
          </div>
        </div>
        
        <div className="content-rectangle">
        <div className="titleSection">
            <img src={icon[0]} alt="" />
            <h2>HERRAMIENTAS</h2>
          </div>
        </div>      
      </div>
      </div>

  );
};

export { BodyImpactifyer };
