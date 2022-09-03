import { useState } from "react";
import WeatherDate from "./WeatherDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.scss";

export default function WeatherInfo(props) {
  const weatherData = props.data;

  const [activeState, setActiveState] = useState("true");

  const [temperature, setTemperature] = useState(weatherData.temperature);

  function setCelsius(event) {
    event.preventDefault();
    setActiveState(true);
    setTemperature(weatherData.temperature);
  }

  function setFahrenheit(event) {
    event.preventDefault();
    setActiveState(false);
    setTemperature(Math.round((weatherData.temperature * 9) / 5 + 32));
  }

  return (
    <div class="WeatherInfo">
      <div className="row align-items-center m-0 mt-3">
        <div className="col-4 p-0">
          <div>
            <WeatherDate date={weatherData.date} />
          </div>
          <div class="text-capitalize">{weatherData.description}</div>
        </div>

        <div className="col-8 city-name">{weatherData.name}</div>
      </div>

      <div className="row align-items-center m-0">
        <div className="col-8 d-flex align-items-center">
          <span className="pt-3">
            <WeatherIcon data={weatherData.icon} />
          </span>
          <span className="temperature ps-3">{temperature}</span>
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
        <div className="col-4">
          Humidity: <span>{weatherData.humidity}%</span>
          <br />
          Wind: <span>{weatherData.wind}</span> km/h
          <br />
        </div>
      </div>
    </div>
  );
}
