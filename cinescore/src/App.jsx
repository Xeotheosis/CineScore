import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import MainComponent from "./Components/MainComponent/MainComponent";
import MovieDetails from "./Components/MainComponent/MovieDetails";
import WatchedMovie from "./Components/MainComponent/WatchedMovie";
import Menu from "./Components/Misc/Menu";
import Loader from "./Components/Misc/Loader";
import ErrorMessage from "./Components/Misc/ErrorMessage";

const KEY = "e7d8609";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    console.log("Stored value:", storedValue);
    return storedValue ? JSON.parse(storedValue) : [];
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleWatchList, setToggleWatchList] = useState(false);

  const handleToggleWatchlistFromMenu = () => {
    setToggleWatchList(true);
    setToggleMenu(false);
    console.log("Hello");
  };
  const handleToggleWatchlistFromButton = () => {
    setToggleWatchList(false);
  };

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };

  const handleSelectMovie = (id) => {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  };

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  const handleAddWatchedMovie = (movie) => {
    setWatched((watched) => [...watched, movie]);
    setQuery("");
  };

  const handleDeleteWatchedMovie = (id) => {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  };

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(watched));
    },
    [watched]
  );

  useEffect(
    function () {
      async function fetchMovies() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`
          );

          if (!res.ok)
            throw new Error("Something went wrong with fetching movies");

          const data = await res.json();
          if (data.Response === "False") throw new Error(" Movie not found");

          // setMovies(data.Search.slice(0, 3));
          setMovies(data.Search);
        } catch (err) {
          setError(err.message);
        } finally {
          setIsLoading(false);
        }
      }
      if (query.length >= 3) {
        clearTimeout(typingTimeout);
        const timeoutId = setTimeout(() => {
          fetchMovies();
        }, 1000);
        setTypingTimeout(timeoutId);
      } else {
        setMovies([]);
        setError("");
      }

      return () => clearTimeout(typingTimeout);
    },
    [query]
  );

  return (
    <section className=" bg-[#222831] flex flex-col min-h-screen h-full p-8 lg:w-3/4 lg:m-0 lg:mx-auto">
      <Navbar
        handleToggleMenu={handleToggleMenu}
        query={query}
        setQuery={setQuery}
      />
      {toggleMenu && (
        <section
          className={`h-screen w-full absolute top-0 left-0 z-10 flex justify-end ${
            toggleMenu ? "menu-background" : ""
          }`}>
          <Menu
            handleToggleWatchlistFromMenu={handleToggleWatchlistFromMenu}
            handleToggleMenu={handleToggleMenu}
          />
        </section>
      )}

      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {!selectedId && !toggleWatchList && (
        <section className="p-2 rounded-lg text-white  my-3 flex-1">
          <MainComponent
            onSelectMovie={handleSelectMovie}
            movies={movies}
          />
        </section>
      )}

      <section className="text-white py-5">
        {selectedId && !toggleWatchList && (
          <MovieDetails
            watched={watched}
            onAddWatchedMovie={handleAddWatchedMovie}
            KEY={KEY}
            onCloseMovie={handleCloseMovie}
            selectedId={selectedId}
          />
        )}
      </section>

      {toggleWatchList && (
        <section className="text-white relative">
          <button
            onClick={handleToggleWatchlistFromButton}
            className="bg-white text-black px-2 py-1 rounded-full">
            &larr;
          </button>
          {watched.length >= 1 ? (
            <ul className="flex flex-col gap-3">
              {watched.map((movie) => (
                <WatchedMovie
                  handleDeleteWatchedMovie={handleDeleteWatchedMovie}
                  movie={movie}
                  key={movie.imdbID}
                />
              ))}
            </ul>
          ) : (
            <p>No movies watched yet...</p>
          )}
        </section>
      )}
    </section>
  );
}

export default App;
