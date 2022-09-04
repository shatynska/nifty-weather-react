import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  const days = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"];

  let date = new Date(props.data.dt * 1000);
  let forecast = {
    date: days[date.getDay()],
    min: Math.round(props.data.temp.min),
    max: Math.round(props.data.temp.max),
    icon: props.data.weather[0].icon,
  };

  return (
    <div className="col-2">
      <div className="m-1">{forecast.date}</div>
      <WeatherIcon code={forecast.icon} size={40} />
      <div>
        <span className="forecast-temperature-max m-1">
          {forecast.max}&#176;
        </span>
        <span className="forecast-temperature-min m-1">
          {forecast.min}&#176;
        </span>
      </div>
    </div>
  );
}
