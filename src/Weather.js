import { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import "./Weather.scss";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);

  const [weatherData, setWeatherData] = useState({ ready: false });

  function search() {
    let apiKey = "98667db6d899892723315f5f8b9a4a51";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      date: response.data.dt,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      coords: response.data.coord,
    });
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  if (weatherData.ready) {
    return (
      <div className="Weather row">
        <form className="Search" onSubmit={handleSubmit}>
          <div className="row justify-content-center">
            <div className="col-7">
              <input
                type="search"
                className="form-control"
                placeholder="enter a city"
                onChange={handleChange}
                autoFocus="on"
              />
            </div>
            <div className="col-4">
              <input
                type="submit"
                className="btn btn-primary w-100"
                value="Search"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast data={weatherData.coords} />
      </div>
    );
  } else {
    search();
    return <div>loading ...</div>;
  }
}
