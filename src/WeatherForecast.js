import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            className="WeatherForecast-icon"
          ></img>
          <div className="WeatherForecast-temperatures">
            <span className="WetherForecast-temperature-max">10° /</span>{" "}
            <span className="WeatherForecast-temperature-min">15°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
