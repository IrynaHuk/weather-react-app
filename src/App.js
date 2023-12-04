import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Iryna Huk and is{" "}
        <a href="https://github.com/IrynaHuk/weather-react-app" target="_blanc">
          open-sourced on GitHub
        </a>
      </footer>
    </div>
  );
}
