import React from "react";

export default function Weather() {
  return (
    <div className="topblock">
      <h1><span role="img">📍</span>Athens,</h1>

      <h3>
        {" "}
        18
        <a><span>°C,</span></a> Sunny
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
        <div className="wind">Wind 🌬 : 1 km/h</div>
        <div className="humidity">Humidity<span role="img">💧</span> : 17%</div>
      </h4>
    </div>
  );
}
