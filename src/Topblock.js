import React from "react";

export default function Weather() {
  return (
    <div className="topblock">
      <h1>📍Athens,</h1>

      <h3>
        {" "}
        18
        <a>°C,</a> Sunny
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
        <div className="humidity">Humidity 💧 : 17%</div>
      </h4>
    </div>
  );
}
