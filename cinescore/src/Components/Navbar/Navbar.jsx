import { React, useState } from "react";
import Logo from "./Logo";
import Search from "./Search";
import Menu from "../Misc/Menu";

const Navbar = ({ query, setQuery, handleToggleMenu }) => {
  return (
    <nav className="text-white">
      <Logo handleToggleMenu={handleToggleMenu} />
      <Search
        query={query}
        setQuery={setQuery}
      />
    </nav>
  );
};

export default Navbar;
