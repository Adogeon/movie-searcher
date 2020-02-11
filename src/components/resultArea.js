import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import PaginationBar from "./PaginationBar";
import { searchWithPagination } from "../util/API";
import styled from "styled-components";

const ResultCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%
  padding: 0.5rem;
`;

const ResultAreaWrapper = styled.div`
  width: 90vw;
  margin: auto;
  background: #fff;
  border-radius: 2px;
  border: 0px;
`;

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
    <ResultAreaWrapper>
      {pagination && (
        <PaginationBar
          handleOnPageClick={handlePaginationClick}
          lastPage={numberOfPages}
          currentPage={pageNumber}
        ></PaginationBar>
      )}
      <ResultCard>
        {movieArray.map(movieData => {
          return (
            <MovieCard data={movieData} key={movieData.imdbID}></MovieCard>
          );
        })}
      </ResultCard>
    </ResultAreaWrapper>
  );
};

export default ResultArea;
