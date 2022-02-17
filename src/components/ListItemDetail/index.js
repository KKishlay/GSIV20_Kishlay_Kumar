import React from "react";
import axios from "../Axios/axios";
import requests from "../Requests/requests";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { AiFillHome } from "react-icons/ai";
import "./index.css";
const ListItemDetail = () => {
  const [movies, setmovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/w500";

  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.getDetails.replace("{id}", id));
      //   console.log(requests.getDetails.replace("{id}", id));
      console.log(request);
      setmovies(request.data);
      return request;
    }
    fetchData();
  }, [id]);

  console.log(movies);
  return (
    <div>
      <div className="top-header">
        <p className="text-styling">Movie Details</p>
        <Link to="/">
          <AiFillHome className="logo-home" />
        </Link>
      </div>
      <div className="details">
        <img
          src={`${base_url}${movies.poster_path}`}
          alt={movies.original_title}
          className="poster-image"
        />
        <div className="desc-title-desc">
          <div className="rating-title">
            <p className="text-styling">{movies.original_title}</p>
            <p className="text-styling rating">{movies.vote_average}</p>
          </div>
          <p className="text-styling">{movies.release_date}</p>
          <p className="text-styling"> Description: {movies.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default ListItemDetail;
