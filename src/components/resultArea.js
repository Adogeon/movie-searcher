import React from "react";
import Card from "react-bootstrap/Card";
import MovieCard from "./MovieCard";
import PaginationBar from "./PaginationBar";

const resultArea = props => {
  const {
    isValid,
    movieIdArray,
    isPagination,
    numberOfPages,
    handlePaginationClick,
    errors
  } = props;

  return (
    <Card>
      <Card.Body>
        {isValid ? (
          movieIdArray.map(movieId => {
            return <MovieCard data={movieId} key={movieId}></MovieCard>;
          })
        ) : (
          <div> {errors} </div>
        )}
      </Card.Body>
      {isPagination && (
        <Card.Footer>
          <PaginationBar
            handleOnPageClick={handlePaginationClick}
            items={numberOfPages}
          ></PaginationBar>
        </Card.Footer>
      )}
    </Card>
  );
};

export default resultArea;
