import { useState } from "react";
import axios from "axios";

import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");

  const [weatherName, setWeatherName] = useState("Drohobych");
  const [weatherDate, setWeatherDate] = useState("Monday 15:13");
  const [weatherDescription, setWeatherDescription] =
    useState("Оvercast clouds");
  const [weatherTemperature, setWeatherTemperature] = useState(23);
  const [weatherHumidity, setWeatherHumidity] = useState(63);
  const [weatherWind, setWeatherWind] = useState(4.8);
  const [weatherIcon, setWeatherIcon] = useState(
    "https://openweathermap.org/img/wn/04d@2x.png"
  );
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function showWeatherInformation(response) {
    let date = new Date(response.data.dt * 1000);
    let day = days[date.getDay()];
    let time = `${date.getHours()}:${date.getMinutes()}`;
    setWeatherName(response.data.name);
    setWeatherDate(`${day} ${time}`);
    setWeatherDescription(response.data.weather[0].description);
    setWeatherTemperature(Math.round(response.data.main.temp));
    setWeatherHumidity(response.data.main.humidity);
    setWeatherWind(Math.round(response.data.wind.speed));
    setWeatherIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "98667db6d899892723315f5f8b9a4a51";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeatherInformation);
  }

  return (
    <div className="Weather row">
      <form className="Search" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-1 p-0">
            <label className="col-form-label">
              <b>City</b>
            </label>
          </div>
          <div className="col-7">
            <input
              type="search"
              className="form-control"
              onChange={handleChange}
            />
          </div>
          <div className="col-4 p-0">
            <input
              type="submit"
              className="btn btn-primary w-100"
              value="Search"
            />
          </div>
        </div>
      </form>

      <div className="row align-items-center m-0">
        <div className="col-4 p-0">
          <div>{weatherDate}</div>
          <div>{weatherDescription}</div>
        </div>

        <div className="col-8 city-name">{weatherName}</div>
      </div>

      <div className="row align-items-center m-0">
        <div className="col-3">
          <img alt="weather icon" src={weatherIcon} />
        </div>
        <div className="col-5 current-temperature-block">
          <span className="current-temperature">{weatherTemperature}</span>
          &#176;
        </div>
        <div className="col-4 p-0">
          humidity: <span>{weatherHumidity}</span>
          <br />
          wind: <span>{weatherWind}</span> km/h
          <br />
        </div>
      </div>
    </div>
  );
}
