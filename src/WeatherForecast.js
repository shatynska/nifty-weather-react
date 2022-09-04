// import { useState } from "react";
// import axios from "axios";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecast(props) {

  return (
    <div class="row my-3 mx-0 justify-content-center text-center">
      <div class="col-2">
        <div class="m-1">Mon</div>
        <WeatherIcon code="01d" size={40} />
        <div>
          <span class="forecast-temperature-max m-1">10&#176;</span>
          <span class="forecast-temperature-min m-1">18&#176;</span>
        </div>
      </div>
    </div>
  );
}
