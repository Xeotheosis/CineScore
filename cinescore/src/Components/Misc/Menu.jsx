import React from "react";

const Menu = ({ handleToggleMenu, handleToggleWatchlistFromMenu }) => {
  return (
    <section className="h-screen bg-slate-800 relative w-2/4 flex flex-col items-center justify-start">
      <span
        onClick={handleToggleMenu}
        className="absolute top-10 right-2 ">
        <svg
          className="h-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 384 512">
          <path
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            fill="#fff"
          />
        </svg>
      </span>

      <ul className="flex flex-col gap-3 h-1/2 mx-0 my-auto">
        <li className="text-white text-2xl font-bold flex items-center gap-2">
          <span>
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512">
              <path
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
                fill="#fff"
              />
            </svg>
          </span>
          Profile
        </li>
        <li
          onClick={handleToggleWatchlistFromMenu}
          className="text-white text-2xl font-bold flex items-center gap-2">
          <span>
            <svg
              className="h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512">
              <path
                d="M40 48C26.7 48 16 58.7 16 72v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V72c0-13.3-10.7-24-24-24H40zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H192zM16 232v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V232c0-13.3-10.7-24-24-24H40c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24H88c13.3 0 24-10.7 24-24V392c0-13.3-10.7-24-24-24H40z"
                fill="#fff"
              />
            </svg>
          </span>
          Watchlist
        </li>
      </ul>
    </section>
  );
};

export default Menu;
