import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Weather />
      <p>
        <a
          href="https://github.com/niftywebsite/nifty-weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by{" "}
        <a
          href="https://getaniftywebsite.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Helen Shatynska
        </a>
      </p>
    </div>
  );
}
