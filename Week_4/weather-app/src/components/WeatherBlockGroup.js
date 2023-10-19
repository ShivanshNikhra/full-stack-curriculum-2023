import React, { useState, useEffect } from "react";
import "../styles/WeatherBlockGroup.css"; // Import the CSS file for MainContainer
import WeatherBlock from "./WeatherBlock";

function WeatherBlockGroup(props) {

    const arr = [1, 2, 3, 4, 5]

    return (
        <div className="weatherBlockGroup"> 
            {arr.map((i) => {
                let curr_date = props.dates[i]
                let curr_img = props.data.weatherData[i].weather[0].icon
                let curr_tmp = props.data.weatherData[i].main.temp_min
                let curr_temp_max = props.data.weatherData[i].main.temp_max
                return <WeatherBlock key={i} date={curr_date} image={curr_img} tempMin={curr_tmp} tempMax={curr_temp_max}/>
            })}
        </div>
    );
}

export default WeatherBlockGroup;