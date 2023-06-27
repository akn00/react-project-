import React from "react";
import "./styles.css";
const Celsius = ({ celsius, onCelsiusChange }) => {
  const handleCelsiusChange = (event) => {
    onCelsiusChange(event.target.value);
  };

  return (
    <div className="celcius">
      <h2>Celsius</h2>
      <input
        type="number"
        id="celciusInput"
        name="celciusInput"
        value={celsius}
        onChange={handleCelsiusChange}
      />
      <h4>°C</h4>
    </div>
  );
};

export default Celsius;
