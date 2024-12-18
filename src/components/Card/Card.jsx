import React from "react";

function Card({ movie, setList, basket }) {
  return (
    <div className="movie-card-container">
      <img
        src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${movie.poster_path}`}
        alt={`${movie.title} poster`}
        className="movie-card-poster"
      />
      <div className="movie-card-details">
        <div className="movie-card-info">
          <span className="movie-release-year">{movie.release_date.slice(0, 4)}</span>
          <p className="movie-title">{movie.title}</p>
        </div>
        <div className="movie-card-actions">
          <button
            onClick={() =>
              setList((prev) => {
                if (
                  !prev.some((item) => item.id === movie.id) &&
                  basket.length === 0
                ) {
                  return [...prev, movie];
                } else {
                  alert("Could not add this movie.");
                  return prev;
                }
              })
            }
            className="add-to-list-button"
          >
            Add to list
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
