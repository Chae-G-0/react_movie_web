import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Movie from "../component/Movie";

const Detail = () => {
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div className="Dtail">
      <h2>Detail</h2>
      <div className="inner">
        <img src={Movie.coverImg} alt="" />
      </div>
    </div>
  );
};

export default Detail;
