import React, { useState} from "react";

export default function WeatherTemp(props) {
const [unit, setUnit] = useState("celsius");
function converttoFarenh(event) {
    event.preventDefault();
    setUnit("fahrenheit");
}

function converttoCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

if (unit === "celsius")
{
return (
    <div className="WeatherTemp">
<span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">°C|{" "} 
        <a href="/" onClick={converttoFarenh}>°F</a>,</span>
        {props.data.description}
        </div>
);


} else {
    let fahrenheit = (props.celsius * 9/5) + 32;
    return (
    <div className="WeatherTemp">
<span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="unit"><a href="/" onClick={converttoCelsius}>°C</a>{" "}| °F,</span>
        {props.data.description}
        </div>
);
}


}

