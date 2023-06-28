import React from "react";
import Segregation from "./segeration";

const Movies = () => {
  return (
    <div className="movies-container">
      <h2>Action Movies</h2>
      <Segregation genre="Action" />

      <h2>Drama Movies</h2>
      <Segregation genre="Drama" />

      {/* Add more genre sections as needed */}
    </div>
  );
};

export default Movies;
