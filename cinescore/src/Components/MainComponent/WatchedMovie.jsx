import { React, useState } from "react";

const WatchedMovie = ({ movie, handleDeleteWatchedMovie }) => {
  const [popover, setPopover] = useState(false);

  const handlePopOver = () => {
    setPopover(!popover);
  };
  return (
    <li className="text-white flex gap-5 border-white border-b py-3 relative">
      <svg
        onClick={handlePopOver}
        className="h-4 absolute top-3 right-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 128 512">
        <path
          d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"
          fill="#fff"
        />
      </svg>
      {popover && (
        <button
          onClick={() => handleDeleteWatchedMovie(movie.imdbID)}
          className="px-2 py-1 absolute -top-6 right-2 bg-white text-black">
          Delete
        </button>
      )}
      <img
        className="w-1/3 rounded-lg"
        src={movie.poster}
        alt={`${movie.title} poster`}
      />

      <div className="flex flex-col justify-between">
        <h3 className="font-bold text-lg">{movie.title}</h3>

        <div>
          <p className="flex items-start justify-start gap-2 text-sm">
            <span>
              <svg
                className="h-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512">
                <path
                  d="M353.8 54.1L330.2 6.3c-3.9-8.3-16.1-8.6-20.4 0L286.2 54.1l-52.3 7.5c-9.3 1.4-13.3 12.9-6.4 19.8l38 37-9 52.1c-1.4 9.3 8.2 16.5 16.8 12.2l46.9-24.8 46.6 24.4c8.6 4.3 18.3-2.9 16.8-12.2l-9-52.1 38-36.6c6.8-6.8 2.9-18.3-6.4-19.8l-52.3-7.5zM256 256c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H384c17.7 0 32-14.3 32-32V288c0-17.7-14.3-32-32-32H256zM32 320c-17.7 0-32 14.3-32 32V480c0 17.7 14.3 32 32 32H160c17.7 0 32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zm416 96v64c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32V416c0-17.7-14.3-32-32-32H480c-17.7 0-32 14.3-32 32z"
                  fill="#fff"
                />
              </svg>
            </span>
            <span>{movie.imdbRating}</span>
          </p>
          <p className="flex items-center gap-2  text-sm">
            <span>
              <svg
                className="h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512">
                <path
                  d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                  fill="#fff"
                />
              </svg>
            </span>
            {movie.userRating}
          </p>
          <p className="flex justify-start gap-2 text-sm">
            <span>
              <svg
                className="inline-block h-3"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512">
                <path
                  d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z"
                  fill="#FFF"
                />
              </svg>
            </span>
            {movie.runtime} min
          </p>
        </div>
      </div>
    </li>
  );
};

export default WatchedMovie;
