import React from "react";
import Forecast from "./Forecast";
import Topblock from "./Topblock";
import Search from "./Search";
import axios from "axios";

export default function Weather() {
  return (
    <div className="weatherapp">
      <div className="row"></div>
      <Topblock />;
      <Forecast />;
      <Search />;
      
      <p>
        <a href="https://github.com/AngelikiClever/Angeliki-react.git">
          Open-source code
        </a>{" "}
        by Angeliki Zeaki
      </p>
    </div>
  )
}
