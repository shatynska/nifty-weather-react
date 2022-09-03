import { useState } from "react";
import "./WeatherTemperature.scss";


export default function WeatherTemperature(props) {
  const [activeState, setActiveState] = useState("true");

  function setCelsius(event) {
    event.preventDefault();
    setActiveState(true);
  }

  function setFahrenheit(event) {
    event.preventDefault();
    setActiveState(false);
  }

  function convertToFahrenheit(celsius) {
    return Math.round((celsius * 9) / 5 + 32);
  }

  if (activeState) {
    return (
      <div className="WeatherTemperature d-flex align-items-center">
        <span className="temperature ps-3">{props.data}</span>
        <span className="units pb-4 ps-2">
          <a
            href="/"
            className={` ${activeState ? "active" : "passive"}`}
            onClick={setCelsius}
          >
            &#176;C
          </a>{" "}
          |{" "}
          <a
            href="/"
            className={` ${activeState ? "passive" : "active"}`}
            onClick={setFahrenheit}
          >
            &#176;F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature d-flex align-items-center">
        <span className="temperature ps-3">
          {convertToFahrenheit(props.data)}
        </span>
        <span className="units pb-4 ps-2">
          <a
            href="/"
            className={` ${activeState ? "active" : "passive"}`}
            onClick={setCelsius}
          >
            &#176;C
          </a>{" "}
          |{" "}
          <a
            href="/"
            className={` ${activeState ? "passive" : "active"}`}
            onClick={setFahrenheit}
          >
            &#176;F
          </a>
        </span>
      </div>
    );
  }
}
