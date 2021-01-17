import React, {useState} from "react";
import "./Topblock.css";
import "./styles.css";
import axios from "axios";


export default function Weather() {
  let [ready, setReady] = useSate(false);
  let [temperature, setTemperature] = useState(null);
  
function handleResponse(response) {

setTemperature(response.data.main.temp);
setReady(true);

}

if (ready) {



  return (
    <div className="topblock">
      <h1>
        <span role="img" aria-label="pin">
          📍
        </span>
        Athens,
      </h1>
      <h3>
        <span className="temperature">{Math.round(temperature)}</span>
        <span>°C,</span> Sunny
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
        <div className="humidity">
          Humidity
          <span role="img" aria-label="drop">
            💧
          </span>{" "}
          : 17%
        </div>
      </h4>
    </div>
  );
}

else {
  let city = "Athens";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f7db97d4508405a35031f006368bb76&units=metric`;
axios.get(apiUrl).then(handleResponse);
}


}