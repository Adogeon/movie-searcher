import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import PaginationBar from "./PaginationBar";
import { searchWithPagination } from "../util/API";

const ResultArea = props => {
  const { pagination, numberOfPages, searchURL } = props.data;

  const [pageNumber, setPageNumber] = useState(1);
  const [movieArray, setMovieArray] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPageMovieId = async () => {
      setIsLoading(true);
      try {
        const result = await searchWithPagination(searchURL, pageNumber);
        console.log(result);
        setMovieArray(result);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPageMovieId();
  }, [pageNumber, searchURL]);

  const handlePaginationClick = event => {
    setPageNumber(event.target.id);
  };

  return isLoading ? (
    <div className="card">Loading ... </div>
  ) : (
    <div className="card">
      <div
        className="card-body"
        style={{
          "max-height": "83vh",
          overflow: "scroll"
        }}
      >
        {movieArray.map(movieId => {
          return <MovieCard data={movieId} key={movieId}></MovieCard>;
        })}
      </div>
      {pagination && (
        <div className="card-footer">
          <PaginationBar
            handleOnPageClick={handlePaginationClick}
            lastPage={numberOfPages}
            currentPage={pageNumber}
          ></PaginationBar>
        </div>
      )}
    </div>
  );
};

export default ResultArea;
