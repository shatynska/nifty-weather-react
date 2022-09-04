import { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  const [forecast, setForecast] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [props.data]);

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

  if (loaded) {
    return (
      <div className="row my-3 mx-0 justify-content-center text-center">
        {forecast.map(function (dailyForecast, index) {
          if (index <= 5) {
            return <WeatherForecastDay key={index} data={dailyForecast} />;
          }
        })}
      </div>
    );
  } else {
    getForecast();

    return <div>Loading ...</div>;
  }
}
