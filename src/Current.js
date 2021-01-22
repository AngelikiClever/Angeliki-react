import React from "react";
import "./Current.css";
import "./styles.css";

export default function CurrentInfo(props) {
   
  return (
    <div className="topblock">
      <h1>
        <span role="img" aria-label="pin">
          📍
        </span>
        {props.data.city}
      </h1>
      <h3>
        <span className="temperature">{Math.round(props.data.temperature)}</span>
        <span>°C,</span> {props.data.description}
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
        <div className="wind">Wind 🌬 : {props.data.wind} km/h</div>
        <div className="humidity">
          Humidity
          <span role="img" aria-label="drop">
            💧
          </span>{" "}
          : {props.data.humidity}%
        </div>
      </h4>
    </div>
  )
}