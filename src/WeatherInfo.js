import { useState } from "react";
import WeatherDate from "./WeatherDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  const weatherData = props.data;



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
          <WeatherTemperature data={weatherData.temperature} />
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
