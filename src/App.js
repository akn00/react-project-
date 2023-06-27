import React, { useState } from "react";
import Celsius from "./celsius";
import Fahrenheit from "./fahrenheit";
import "./styles.css";

export default function App() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (value) => {
    if (value === "") {
      setCelsius("");
      setFahrenheit("");
    } else {
      setCelsius(value);
      setFahrenheit((value * 9) / 5 + 32);
    }
  };

  const handleFahrenheitChange = (value) => {
    if (value === "") {
      setCelsius("");
      setFahrenheit("");
    } else {
      setFahrenheit(value);
      setCelsius(((value - 32) * 5) / 9);
    }
  };

  return (
    <div className="App">
      <Celsius celsius={celsius} onCelsiusChange={handleCelsiusChange} />
      <Fahrenheit
        fahrenheit={fahrenheit}
        onFahrenheitChange={handleFahrenheitChange}
      />
      <h1>Temprature converter</h1>
    </div>
  );
}
