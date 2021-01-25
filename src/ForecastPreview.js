import React from "react";
import "./Forecast.css";



export default function ForecastPreview(props) {
function hours() {
let date = new Date(props.data.dt * 1000)
let hours = date.getHours()
return `${hours}:00`;
}

function temperature() {
    let temperature = Math.round(props.data.main.temp)
    return `${temperature}°C`;
}
return (

    <div className="col">
            <div className="card border-info mb-3" >
              <div className="card-header">
{hours()}
              </div>
              <div 
              className="card-body text-info">
                <img 
                   className="forecasticon"
            src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
            alt="clear"
            id="icon"
                />
          </div>
                <div className="forecast-temperature">
{temperature()}
                  <strong></strong>
                </div>
              </div>
            </div>
          
);

}