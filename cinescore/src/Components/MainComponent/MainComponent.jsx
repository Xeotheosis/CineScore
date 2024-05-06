import React from "react";
import Movie from "./Movie";

const MainComponent = ({ movies, onSelectMovie }) => {
  return (
    <ul className="flex flex-col gap-3">
      {movies?.map((movie) => (
        <Movie
          onSelectMovie={onSelectMovie}
          key={movie.imdbID}
          movie={movie}
        />
      ))}
    </ul>
  );
};
export default MainComponent;
