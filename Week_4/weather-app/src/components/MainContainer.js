import React, { useState, useEffect } from "react";
import "../styles/MainContainer.css"; // Import the CSS file for MainContainer
import EntireDesign from "./EntireDesign";

function MainContainer(props) {

  const [showComponent, setShowComponent] = useState(false)
  const [cityName, setCityName] = useState()
  const [stateName, setStateName] = useState()

  const [allData, setData] = useState() 



  function formatDate(daysFromNow = 0) {
    let output = "";
    var date = new Date();
    date.setDate(date.getDate() + daysFromNow);
    output += date.toLocaleString("en-US", { weekday: "long" }).toUpperCase();
    output += " " + date.getDate();
    return output;
  }


  useEffect(() => {
    if(typeof props.city !== "undefined") {
      getWeatherData()
    }
  }, [props.city]) 

  async function getWeatherData() { 
			const data = await fiveDayData()
			const aqi = await retrieveAQI()
      setData({'weatherData': data, 'airQualitydata': aqi})
      setShowComponent(true)
  }

  async function fiveDayData() {
    let apiCall = `http://api.openweathermap.org/data/2.5/forecast?lat=${props.city.lat}&lon=${props.city.lon}&appid=${props.apiKey}&units=imperial`
    const response = await fetch(apiCall)
    const data = await response.json() 

    const sixDays = []

    for(let i = 0; i < data.list.length; i += 8) {
      sixDays.push(data.list[i])
    }

    if(data.list.length <= 40) {
      sixDays.push(data.list[data.list.length - 1]); 
    }
    return sixDays; 
  }

  async function retrieveAQI() {
    let apiCall = `http://api.openweathermap.org/data/2.5/air_pollution?lat=50&lon=50&appid=${props.apiKey}`
    const response = await fetch(apiCall)
    const data = await response.json() 

    return data.list[0].main.aqi 
  }

  function generateComponents() {
    if(showComponent === true) {
      const formatedDates = [] 
      for(let i = 0; i < 6; i++) {
        formatedDates.push(formatDate(i)); 
      }
      return <EntireDesign dates={formatedDates} city={props.city} data={allData}></EntireDesign>
    }
  }
  
  /*
  STEP 1: IMPORTANT NOTICE!

  Before you start, ensure that both App.js and SideContainer.js are complete. The reason is MainContainer 
  is dependent on the city selected in SideContainer and managed in App.js. You need the data to flow from 
  App.js to MainContainer for the selected city before making an API call to fetch weather data.
  */
  
  /*
  STEP 2: Manage Weather Data with State.
  
  Just like how we managed city data in App.js, we need a mechanism to manage the weather data 
  for the selected city in this component. Use the 'useState' hook to create a state variable 
  (e.g., 'weather') and its corresponding setter function (e.g., 'setWeather'). The initial state can be 
  null or an empty object.
  */
  
  
  /*
  STEP 3: Fetch Weather Data When City Changes.
  
  Whenever the selected city (passed as a prop) changes, you should make an API call to fetch the 
  new weather data. For this, use the 'useEffect' hook.

  The 'useEffect' hook lets you perform side effects (like fetching data) in functional components. 
  Set the dependency array of the 'useEffect' to watch for changes in the city prop. When it changes, 
  make the API call.

  After fetching the data, use the 'setWeather' function from the 'useState' hook to set the weather data 
  in your state.
  */
  
  
  return (
    <div id="main-container">
      <div id="weather-container">
        {
          generateComponents()
        }
      </div>
    </div>
  );
}

export default MainContainer;