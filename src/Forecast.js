import React from "react";
import "./Forecast.css";
import axios from "axios";
import "./styles.css";

export default function Forecast() {
  return (

<div className="d-flex justify-content-around">
        <div className="row" id="forecast">
          <div className="col">
            <div className="card border-info mb-3" >
              <div className="card-header"></div>
              <div className="card-body text-info">
                <img className="forecast-icon" alt="icon"/>
                <div className="forecast-temperature">
                    
  
                  <strong></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
  )
}