import React, { useState } from "react";

const MovieThumbnail = ({ movie }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div
      className={`thumbnail ${isExpanded ? "expanded" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        className="poster"
        src={isExpanded ? movie.Images : movie.Poster}
        alt={movie.title}
      />
      
    </div>
  );
};

export default MovieThumbnail;
