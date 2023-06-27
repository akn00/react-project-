import React from "react";
import "./styles.css";
const Fahrenheit = ({ fahrenheit, onFahrenheitChange }) => {
  const handleFahrenheitChange = (event) => {
    onFahrenheitChange(event.target.value);
  };

  return (
    <div className="fahrenheit">
      <h2>Fahrenheit</h2>
      <input
        type="number"
        id="fahrenheitInput"
        name="fahrenheitInput"
        value={fahrenheit}
        onChange={handleFahrenheitChange}
      />
      <h4>°F</h4>
    </div>
  );
};

export default Fahrenheit;
