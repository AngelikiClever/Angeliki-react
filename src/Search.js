import React, {useState} from "react";
import "./Search.css";
import axios from "axios";

export default function Search() {
    let city = "Athens";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f7db97d4508405a35031f006368bb76&units=metric`;

  return (
      <div className="searchengine">
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
      </div>
  )
}