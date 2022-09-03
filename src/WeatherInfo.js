import WeatherDate from "./WeatherDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  let weatherData = props.data;

  return (
    <div>
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
          <span className="temperature ps-3">{weatherData.temperature}</span>
          <span className="units pb-4 ps-2">
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
}
