import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";
import ForecastPreview from "./ForecastPreview";

import "./styles.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
setLoaded(true);

}

if (loaded && props.city === forecast.city.name) {
  return (
   
<div className="d-flex justify-content-around">
        <div className="row" id="forecast">
          <ForecastPreview data={forecast.list[0]}/>
          <ForecastPreview data={forecast.list[1]}/>
          <ForecastPreview data={forecast.list[2]}/>
          <ForecastPreview data={forecast.list[3]}/>
          <ForecastPreview data={forecast.list[4]}/>
        </div>
        </div>

  )


} else {
  let apiKey = "6f7db97d4508405a35031f006368bb76";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleForecastResponse);
  return null;
}
}
  
  