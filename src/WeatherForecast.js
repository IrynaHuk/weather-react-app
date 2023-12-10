import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "1dbf926d3b4417bf379db7043bec1047";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            className="WeatherForecast-icon"
            alt="/"
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
