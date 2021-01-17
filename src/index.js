import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Weather from "./Weather";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
