import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import MovieCard from "./MovieCard";
import PaginationBar from "./PaginationBar";
import { searchWithPagination } from "../util/API";

const ResultArea = props => {
  const { pagination, numberOfPages, searchURL } = props.data;

  const [pageNumber, setPageNumber] = useState(1);
  const [movieArray, setMovieArray] = useState([]);

  useEffect(() => {
    const fetchPageMovieId = async () => {
      const result = await searchWithPagination(searchURL, pageNumber);
      setMovieArray(result);
    };
    fetchPageMovieId();
  }, [pageNumber, searchURL]);

  const handlePaginationClick = event => {
    setPageNumber(event.target.id);
  };

  return (
    <Card>
      <Card.Body>
        {movieArray.map(movieId => {
          return <MovieCard data={movieId} key={movieId}></MovieCard>;
        })}
      </Card.Body>
      {pagination && (
        <Card.Footer>
          <PaginationBar
            handleOnPageClick={handlePaginationClick}
            lastPage={numberOfPages}
            currentPage={pageNumber}
          ></PaginationBar>
        </Card.Footer>
      )}
    </Card>
  );
};

export default ResultArea;
