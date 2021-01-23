import React from "react";
import Topblock from "./Topblock";

export default function Weather() {
  
  return (
    
    <div className="weatherapp">
      <div className="row"></div>
      <Topblock defaultCity="Athens"/>;      
      
      <p>
        <a href="https://github.com/AngelikiClever/Angeliki-react.git">
          Open-source code
        </a>{" "}
        by Angeliki Zeaki
      </p>
    </div>
  )
}
