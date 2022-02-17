import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const ListItem = ({ title, rating, desc, imgUrl, id }) => {
  return (
    <li className="list-item">
      <Link to={`/lists/${id}`}>
        <img src={imgUrl} alt={title} className="list-image" />
        <div className="title-rating">
          <p className="name">{title}</p>
          <p className="rating">{rating}</p>
        </div>
      </Link>
    </li>
  );
};

export default ListItem;
