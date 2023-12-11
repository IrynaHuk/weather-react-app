import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="New York" />
      <footer>
        This project was coded by Iryna Huk and is{" "}
        <a
          href="https://github.com/IrynaHuk/weather-react-app"
          target="_blanc"
          rel="noopener noreferrer"
        >
          open-sourced on GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://extraordinary-gingersnap-976c36.netlify.app/"
          target="_blanc"
          rel="noopener noreferrer"
        >
          hosted on Netlify
        </a>
      </footer>
    </div>
  );
}
