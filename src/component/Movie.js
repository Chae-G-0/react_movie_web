import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.scss";

const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <div className="Movie">
      <img src={coverImg} alt={title} />
      <div className="txt">
        <h3 className="mTitle">
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <p>{summary}</p>
        <ul>
          Genre
          {genres && genres.map((g, i) => <li key={i}>{g}</li>)}
        </ul>
      </div>
    </div>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
