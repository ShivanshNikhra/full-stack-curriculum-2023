import React, { useState, useEffect } from "react";
import "../styles/TodayWeatherInfo.css"; // Import the CSS file for MainContainer
import icon from '../icons/01d.svg'
import images from '../images'; 

function TodayWeatherInfo(props) {
    return (
        <div className="todayWeatherInfo">
            <div className="todayWeatherStats">
                <span className="todayWeatherType">{props.weatherType}</span>
                <span className="todayWeatherDegree">{props.todayDegree}</span>
                <span className="todayAirQuality">{props.aqi}</span>
            </div>
            <div>
                <img className="todayWeatherPic" src={images[`./${props.image}.svg`]} alt="picture of weather"></img> 
            </div>
        </div>
    ); 
}

export default TodayWeatherInfo;
