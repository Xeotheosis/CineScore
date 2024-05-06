import React from "react";

const Movie = ({ movie, onSelectMovie }) => {
  return (
    <li
      onClick={() => onSelectMovie(movie.imdbID)}
      className="flex gap-5  border-b border-[#d3d3d3] py-2">
      <img
        className="w-1/3"
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />

      <div>
        <h3 className="font-bold">{movie.Title}</h3>
        <span className="text-sm">{movie.Year}</span>
      </div>
    </li>
  );
};

export default Movie;
