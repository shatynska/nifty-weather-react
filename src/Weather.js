import { useState } from "react";
import axios from "axios";

import "./Weather.scss";

export default function Weather() {
  const [city, setCity] = useState("");

  const [weatherData, setWeatherData] = useState({ready: false});

  const apiKey = "98667db6d899892723315f5f8b9a4a51";
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function handleResponse(response) {
    let date = new Date(response.data.dt * 1000);
    let day = days[date.getDay()];
    let time = `${date.getHours()}:${date.getMinutes()}`;
    setWeatherData({
      ready: true,
      name: response.data.name,
      date: `${day} ${time}`,
      description: response.data.weather[0].description,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed),
      icon: 
        `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
      ,
    })
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
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

        <div className="row align-items-center m-0 mt-3">
          <div className="col-4 p-0">
            <div>{weatherData.date}</div>
            <div class="text-capitalize">{weatherData.description}</div>
          </div>

          <div className="col-8 city-name">{weatherData.name}</div>
        </div>

        <div className="row align-items-center m-0">
          <div className="col-8 d-flex">
            <img alt="weather icon" src={weatherData.icon} />
            <span className="temperature">{weatherData.temperature}</span>
            <span className="units pt-4">
              <a href="/">&#176;C</a> | <a href="/">&#176;F</a>
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
  } else {
    let city = "paris";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    return <div>loading ...</div>;
  }
}
