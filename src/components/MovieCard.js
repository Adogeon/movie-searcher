import React, { useEffect, useState } from "react";
import { getOneById } from "../util/API";

const MovieCard = props => {
  const { data } = props;
  const [movieId, setMovieId] = useState(data);
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async data => {
      setIsLoading(true);
      try {
        const result = await getOneById(data);
        setMovieInfo(result);
      } catch (error) {
        setMovieInfo({ errors: error });
      } finally {
        setIsLoading(false);
      }
    };
    if (movieId) {
      fetchData(movieId);
    } else {
      setMovieInfo({ errors: "Don't have movie id" });
    }
  }, [movieId]);

  return (
    <div className="card" style={{ margin: "0.5rem" }}>
      {isLoading ? (
        <>
          <div className={"card-body"}>Loading ... </div>
        </>
      ) : movieInfo.errors ? (
        <>
          <div className="card-header">Error</div>
          <div className="card-body">{movieInfo.errors}</div>
        </>
      ) : (
        <>
          <div className="card-header">
            <span className="movie-title">{movieInfo.Title}</span>
          </div>
          <div className="card-body">
            <div className="movie-plot">{movieInfo.Plot}</div>
            <div className="movie-metascore">{movieInfo.Metascore}</div>
          </div>
          <div className="card-footer">
            Released in <span className="movie-year">{movieInfo.Year}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieCard;
