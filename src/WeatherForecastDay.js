import React, { useState } from "react";

export default function WeatherForecastDay(props) {
  let [pic, setPic] = useState("");
  function showPic() {
    setPic(
      `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`
    );
  }
  console.log(props.data.weather[0].icon);
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div>
        <img src={pic} />
      </div>

      <div className="WeatherForecast-temperatures">
        <span className="WetherForecast-temperature-max">
          {maxTemperature()} /
        </span>
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
