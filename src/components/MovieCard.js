import React, { useEffect, useState } from "react";
import { getOneById } from "../util/API";
import styled from "styled-components";

const StyledCard = styled.div`
  background: #fff;
  border-radius: 2px;
  position: relative;
  display: grid;
  grid-template-rows: 20% auto 20%;
  margin: 1rem;
  maring-bottom: 2rem;
  height: 300px;
  width: 300px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

const CardTitle = styled.h2`
  display: block;
  font-size: 24px;
  color: #000;
  margin: 0;
  padding: 0 10px;
  padding-bottom: 5px;
  font-weight: 400;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  vertical-align: top;
  border-bottom: 1px solid grey;
`;

const CardBody = styled.div`
  font-size: 14px;
  display: grid;
  grid-template-rows: auto 20%;
  padding: 0 10px;
  margin: 0;
  line-height: 1.6;
  color: #000;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const CardSubTitle = styled.p`
  font-size: 14px;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #111;
  padding: 0 10px;
  opacity: 50;
  margin: 0;
`;

const MovieCard = props => {
  const { data } = props;
  const movieId = data;
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
    <StyledCard>
      {isLoading ? (
        <>
          <div className={"card-body"}>Loading ... </div>
        </>
      ) : movieInfo.errors ? (
        <>
          <CardTitle>Error</CardTitle>
          <CardBody>{movieInfo.errors}</CardBody>
        </>
      ) : (
        <>
          <CardTitle>{movieInfo.Title}</CardTitle>
          <CardBody>
            <div className="movie-plot">{movieInfo.Plot}</div>
            <div className="movie-metascore">
              Metascore: {movieInfo.Metascore}
            </div>
          </CardBody>
          <CardSubTitle>
            Released in <span className="movie-year">{movieInfo.Year}</span>
          </CardSubTitle>
        </>
      )}
    </StyledCard>
  );
};

export default MovieCard;
