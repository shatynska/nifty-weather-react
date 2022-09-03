export default function WeatherDate(props) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let date = new Date(props.date * 1000);
  let day = days[date.getDay()];
  let hours = date.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  let time = `${hours}:${minutes}`;

  return (
    <span>
      {day} {time}
    </span>
  );
}
