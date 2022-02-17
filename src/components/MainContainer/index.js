import React, { useState, useEffect } from "react";
import axios from "../Axios/axios";
import ListItem from "../ListItem";
import "./index.css";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
// AiFillHome
import { BsSearch } from "react-icons/bs";

const MainContainer = ({ fetchUrl }) => {
  const [movies, setmovies] = useState([]);
  const [searchInput, setsearchInput] = useState("");

  const base_url = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  const onChangeSearchInput = (event) => {
    setsearchInput(event.target.value);
  };

  const searchResults = movies.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="nav">
        <div className="search-input-container">
          <input
            type="search"
            className="search-input"
            placeholder="Search"
            value={searchInput}
            onChange={onChangeSearchInput}
          />
          <BsSearch className="search-icon" />
        </div>
        <Link to="/">
          <AiFillHome className="logo" />
        </Link>
      </div>
      <div className="list-container">
        <ul className="poster-list">
          {searchResults.map((movie) => (
            <ListItem
              id={movie.id}
              key={movie.id}
              title={movie.original_title}
              rating={movie.vote_average}
              desc={movie.overview}
              imgUrl={`${base_url}${movie.poster_path}`}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MainContainer;
