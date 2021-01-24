import React, {useState} from "react";
import "./styles.css";
import Current from "./Current";
import Forecast from "./Forecast";
import axios from "axios";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

function handleResponse(response) {
setWeatherData({
  ready: true,
temperature: response.data.main.temp,
wind: response.data.wind.speed,
humidity: response.data.main.humidity,
iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@4x.png`,
description: response.data.weather[0].description,
city: response.data.name,
icon: response.data.weather[0].icon,

});

}

 function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

   function search() {
    const apiKey = "6f7db97d4508405a35031f006368bb76";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

if (weatherData.ready) {



  return (
    <div className="weatherapp">
<div className="topblock">
  <Current data={weatherData}/>
      <div className="searchengine">
<form className="form-inline"
onSubmit={handleSubmit} >
  <div className="row">
                <div className="col-10">
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="🔎 Search City"
        aria-label="Search"
        onChange={handleCityChange}

      />
      </div>
                <div className="col-2">
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Go!
      </button>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Current
      </button>
      </div>
      </div>
      </form>
      </div>
</div>
      <Forecast city={weatherData.city} />
</div>
      

  );
}

else {
   search();
    return "Loading...";
}
}