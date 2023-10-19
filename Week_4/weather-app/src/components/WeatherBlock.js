import React, { useState, useEffect } from "react";
import "../styles/WeatherBlock.css"; // Import the CSS file for MainContainer
import icon from '../icons/01d.svg'
import images from '../images'; 

function WeatherBlock(props) {

  return (
    <div className="weatherBlock">
        <span>{props.date}</span>
        <img src={images[`./${props.image}.svg`]} alt="gon"></img>
        <span>{props.tempMin} to {props.tempMax}</span>
    </div>
  );
}

export default WeatherBlock;