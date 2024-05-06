import { React, useState, useEffect } from "react";
import StarRating from "../Misc/StarRating";
import Loader from "../Misc/Loader";
import Ranking from "../Misc/Ranking";

const MovieDetails = ({
  selectedId,
  onCloseMovie,
  KEY,
  onAddWatchedMovie,
  watched,
}) => {
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [userRating, setUserRating] = useState("");

  const isWatched = watched.map((movie) => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const handleAdd = () => {
    const newWatchedMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: Number(imdbRating),
      runtime: Number(runtime.split(" ").at(0)),
      userRating,
    };
    onAddWatchedMovie(newWatchedMovie);
  };
  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  useEffect(
    function () {
      async function getMovieDetails() {
        setLoading(true);
        const res = await fetch(
          `https://www.omdbapi.com?apikey=${KEY}&i=${selectedId}`
        );
        const data = await res.json();

        setMovie(data);
        setLoading(false);
      }
      getMovieDetails();
    },
    [selectedId]
  );

  useEffect(
    function () {
      if (!title) return;
      document.title = `Movie | ${title}`;
    },
    [title]
  );

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <section className="flex flex-col md:flex-row gap-3 lg:parent">
          <header className="relative md:w-1/2 lg:divone">
            <button
              className="bg-white text-black px-2 py-1 rounded-full my-2"
              onClick={onCloseMovie}>
              &larr;
            </button>
            <img
              className="w-full rounded-2xl"
              src={poster}
              alt={`Poster of ${movie}`}
            />
            <div className="flex flex-col items-center my-2">
              <div className="flex items-center justify-between w-full">
                <h2 className="font-bold text-xl">{title}</h2>

                <div className="flex items-start gap-1">
                  <Ranking />
                  <span className="font-bold text-sm">{imdbRating}</span>
                </div>
              </div>
              <div className="flex justify-between w-full">
                <p>{runtime}</p>
                <p>{genre}</p>
              </div>
            </div>
          </header>
          <div className="md:w-1/2 lg:divtwo">
            <section>
              <div className="flex flex-col items-start gap-3 py-2">
                {!isWatched ? (
                  <div className="flex flex-col items-center w-full justify-center bg-slate-900 p-2 rounded-lg">
                    <StarRating
                      onSetRating={setUserRating}
                      maxRating={10}
                      size={24}
                      color="white"
                    />

                    {userRating && (
                      <button
                        onClick={handleAdd}
                        className="bg-white text-black  px-4 py-1 rounded-full my-5">
                        + Add to list
                      </button>
                    )}
                  </div>
                ) : (
                  <p>You rated this movie {watchedUserRating} stars</p>
                )}
              </div>
              <p className="border-y border-white py-2">
                <em>{plot}</em>
              </p>
              <p>
                <span className="font-bold text-sm">{actors}</span>
              </p>
              <p className="text-sm">
                Directed by <span className="font-bold">{director}</span>
              </p>
            </section>
          </div>
        </section>
      )}
    </div>
  );
};

export default MovieDetails;
