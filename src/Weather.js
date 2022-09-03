import { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");

  const [temperature, setTemperature] = useState("");

  function handleChange(event) {
    setCity(event.target.value);
  }

  function showWeatherInformation(response) {
    setTemperature(Math.round(response.data.main.temp));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "98667db6d899892723315f5f8b9a4a51";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(showWeatherInformation);
  }

  return (
    <form class="text-center m-5" onSubmit={handleSubmit}>
      <input type="search" onChange={handleChange} />
      <input type="submit" value="Search" />
      <p>
        Temperature in {city} is {temperature} C
      </p>
    </form>
  );
}
