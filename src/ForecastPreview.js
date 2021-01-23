import React from "react";

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
              <div className="card-body text-info">
                <img className="forecast-icon" alt="icon"/>
                <div className="forecast-temperature">
{temperature()}
                  <strong></strong>
                </div>
              </div>
            </div>
          </div>
);

}