import React, {useState} from "react";
import "./Topblock.css";
import "./styles.css";
import axios from "axios";


export default function Weather() {
  let [ready, setReady] = useSate(false);
  let [weatherData, setWeatherData] = useState(null);
  
function handleResponse(response) {
setWeatherData({
temperature: response.data.main.temp,
wind: response.data.wind.speed,
humidity: response.data.main.humidity,
description: response.data.weather[0].description,
city: response.data.name,
});
// setTemperature();
setReady(true);

}

if (ready) {



  return (
    <div className="topblock">
      <h1>
        <span role="img" aria-label="pin">
          📍
        </span>
        {WeatherData.city}
      </h1>
      <h3>
        <span className="temperature">{Math.round(weatherData.temperature)}</span>
        <span>°C,</span> {weatherData.description}
        <div className="weathericon">
          <img
            className="weathericon"
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="clear"
            id="icon"
          />
        </div>
      </h3>
      <h4>
        <div className="wind">Wind 🌬 : {weatherData.wind} km/h</div>
        <div className="humidity">
          Humidity
          <span role="img" aria-label="drop">
            💧
          </span>{" "}
          : {weatherData.humidity}%
        </div>
      </h4>
    </div>
  );
}

else {
  let city = "Athens";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f7db97d4508405a35031f006368bb76&units=metric`;
axios.get(apiUrl).then(handleResponse);
return null;
}


}