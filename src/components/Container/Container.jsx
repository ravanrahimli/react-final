import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import List from "../List/List";
import Search from "../Search/Search";
import axios from "axios";

function Container({ setBasketActive, basket, setBasket }) {
  const [searchValue, setSearchValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [list, setList] = useState([]);

  const API_URL = "https://api.themoviedb.org/3/discover/movie";
  const SEARCH_URL =
    "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US";

  const fetchMovies = (query) => {
    axios
      .get(query ? `${SEARCH_URL}&query=${query}` : API_URL, {
        headers: {
          Authorization:
            "Bearer YOUR_API_KEY_HERE",
          Accept: "application/json",
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (searchQuery) {
      fetchMovies(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div className="movie-container">
      <div className="movie-list">
        <Search
          onSearch={setSearchQuery}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <div className="movie-cards">
          {movies
            .filter((movie) =>
              movie.title.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((movie) => (
              <Card
                key={movie.id}
                movie={movie}
                basket={basket}
                setList={setList}
                list={list}
              />
            ))}
        </div>
      </div>
      <div className="movie-cart">
        <List
          basket={basket}
          setBasket={setBasket}
          setBasketActive={setBasketActive}
          list={list}
          setList={setList}
        />
      </div>
    </div>
  );
}

export default Container;
