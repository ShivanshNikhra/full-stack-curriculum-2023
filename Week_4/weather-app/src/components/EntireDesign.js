import React, { useState, useEffect } from "react";
import "../styles/MainContainer.css"; // Import the CSS file for MainContainer
import WeatherBlock from "./WeatherBlock";
import WeatherBlockGroup from "./WeatherBlockGroup";
import Title from "./Title"
import TodayWeatherInfo from "./TodayWeatherInfo";

function EntireDesign(props) {
  return (
    <>
        {
            console.log("here " + props.data.weatherData[0].weather[0].icon)  
        }
        <Title date={props.dates[0]} state={props.city.state} city={props.city.name}></Title>
        <TodayWeatherInfo weatherType={props.data.weatherData[0].weather[0].main} todayDegree={Math.trunc(props.data.weatherData[0].main.temp)} aqi={props.data.airQualitydata} image={props.data.weatherData[0].weather[0].icon}></TodayWeatherInfo>
        <WeatherBlockGroup dates={props.dates} data={props.data}></WeatherBlockGroup>
    </>
  );
}

export default EntireDesign;