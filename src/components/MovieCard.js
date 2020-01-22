import React, { useEffect, useState } from "react";
import { getOneById } from "../util/API";
import Card from "react-bootstrap/Card";

const MovieCard = props => {
  const { movieId } = props;
  const [movieInfo, setMovieInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
    <Card>
      {isLoading ? (
        <>
          <Card.Body>Loading ... </Card.Body>
        </>
      ) : movieInfo.errors ? (
        <>
          <Card.Header>Error</Card.Header>
          <Card.Body>{movieInfo.errors}</Card.Body>
        </>
      ) : (
        <>
          <Card.Header>
            <span className="movie-title">{movieInfo.Title}</span>
          </Card.Header>
          <Card.Body>
            <div className="movie-plot">{movieInfo.Plot}</div>
            <div className="movie-metascore">{movieInfo.Metascore}</div>
          </Card.Body>
          <Card.Footer>
            Released in <span className="movie-year">{movieInfo.Year}</span>
          </Card.Footer>
        </>
      )}
    </Card>
  );
};

export default MovieCard;
