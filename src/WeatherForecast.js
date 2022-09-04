import { useState } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function getForecast() {
    let lat = props.data.lat;
    let lon = props.data.lon;
    let apiKey = "98667db6d899892723315f5f8b9a4a51";
    let forecastAPIUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric`;
    axios.get(`${forecastAPIUrl}&appid=${apiKey}`).then(handleResponse);
  }

  function handleResponse(response) {
    setLoaded(true);
    setForecast(response.data.daily);
  }

  // setDays([1, 2, 3, 4, 5]);
  // days.map(function(day, index) {
  //  return (
  //    <div id={index}>{day}</div>
  //  );
  // });
  if (loaded) {
    return (
      <div className="row my-3 mx-0 justify-content-center text-center">
        <WeatherForecastDay data={forecast[0]} />
      </div>
    );
  } else {
    getForecast();

    return <div>Loading ...</div>;
  }
}
