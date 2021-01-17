import React from "react";
import "./Search.css";

export default function Search() {
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
  );
}