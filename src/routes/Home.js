import React from "react";
import { useEffect, useState } from "react";
import Movie from "../component/Movie";
import "./Home.scss";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  //   console.log(movies);
  return (
    <div>
      {loading ? (
        <span>Loading...</span>
      ) : (
        <div className="Wrap">
          <div className="Header">
            <h2>MOVIE</h2>
          </div>
          <div className="inner">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
