import React from "react";
import Topblock from "./Topblock";

export default function Weather() {
  return (
    <div className="weatherapp">
      <div className="row"></div>
      <Topblock />;
      <div className="d-flex justify-content-around">
        <div className="row">
          <div className="col">
            <div className="card border-info mb-3">
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
      <nav className="navbar navbar-light bg-light" />
      <form className="form-inline" />
      <input
        class="form-control mr-sm-2"
        type="search"
        placeholder="🔎 Search City"
        aria-label="Search"
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Go!
      </button>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Current
      </button>
      <p>
        <a href="https://github.com/AngelikiClever/Angeliki-react.git">
          Open-source code
        </a>{" "}
        by Angeliki Zeaki
      </p>
    </div>
  );
}
