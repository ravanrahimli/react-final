import React from "react";
import { BiSolidMoviePlay } from "react-icons/bi";


function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="movie-icon">
        <BiSolidMoviePlay />
        </div>
        <h1>Movies</h1>
        <div></div>
      </div>
    </header>
  );
}

export default Header;
