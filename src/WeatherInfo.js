import WeatherDate from "./WeatherDate";

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
        <div className="col-8 d-flex">
          <img alt="weather icon" src={weatherData.icon} />
          <span className="temperature">{weatherData.temperature}</span>
          <span className="units pt-4 ps-2">
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
