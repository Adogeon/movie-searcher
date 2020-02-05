import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.ul`
  list-style: none;
  display: flex;
`;

const PaginationBar = props => {
  const { handleOnPageClick } = props;

  const lastPage = parseInt(props.lastPage);
  const currentPage = parseInt(props.currentPage);

  if (lastPage <= 7) {
    let items = [];
    for (let i = 1; i <= lastPage; i++) {
      items.push(
        <li>
          <button
            className="pagination-item"
            key={i}
            id={i}
            active={i === currentPage}
            onClick={handleOnPageClick}
          >
            {i}
          </button>
        </li>
      );
    }
    return <PaginationWrapper>{items}</PaginationWrapper>;
  } else {
    return (
      <PaginationWrapper>
        {currentPage === 1 ? (
          <>
            <li className="pagination-item">
              <button active id={1} onClick={handleOnPageClick}>
                {1}
              </button>
            </li>
            <li className="pagination-item">
              <button id={2} onClick={handleOnPageClick}>
                {2}
              </button>
            </li>
            <li className="pagination-item">
              <button id={3} onClick={handleOnPageClick}>
                {3}
              </button>
            </li>
            <li className="pagination-item">
              <button disabled>...</button>
            </li>
            <li className="pagination-item">
              <button id={lastPage} onClick={handleOnPageClick}>
                {lastPage}
              </button>
            </li>
          </>
        ) : currentPage === 2 ? (
          <>
            <li className="pagination-item">
              <button id={1} onClick={handleOnPageClick}>
                {1}
              </button>
            </li>
            <li className="pagination-item">
              <button active id={2} onClick={handleOnPageClick}>
                {2}
              </button>
            </li>
            <li className="pagination-item">
              <button id={3} onClick={handleOnPageClick}>
                {3}
              </button>
            </li>
            <li className="pagination-item">
              <button disabled>...</button>
            </li>
            <li className="pagination-item">
              <button id={lastPage} onClick={handleOnPageClick}>
                {lastPage}
              </button>
            </li>
          </>
        ) : currentPage === lastPage - 1 ? (
          <>
            <li className="pagination-item">
              <button id={1} onClick={handleOnPageClick}>
                {1}
              </button>
            </li>
            <li className="pagination-item">
              <button disabled>...</button>
            </li>
            <li className="pagination-item">
              <button id={lastPage - 2} onClick={handleOnPageClick}>
                {lastPage - 2}
              </button>
            </li>
            <li className="pagination-item">
              <button active id={lastPage - 1} onClick={handleOnPageClick}>
                {lastPage - 1}
              </button>
            </li>
            <li className="pagination-item">
              <button id={lastPage} onClick={handleOnPageClick}>
                {lastPage}
              </button>
            </li>
          </>
        ) : currentPage === lastPage ? (
          <>
            <li className="pagination-item">
              <button id={1} onClick={handleOnPageClick}>
                {1}
              </button>
            </li>
            <li className="pagination-item">
              <button disabled>...</button>
            </li>
            <li className="pagination-item">
              <button id={lastPage - 2} onClick={handleOnPageClick}>
                {lastPage - 2}
              </button>
            </li>
            <li className="pagination-item">
              <button id={lastPage - 1} onClick={handleOnPageClick}>
                {lastPage - 1}
              </button>
            </li>
            <li className="pagination-item">
              <button active id={lastPage} onClick={handleOnPageClick}>
                {lastPage}
              </button>
            </li>
          </>
        ) : (
          <>
            <li className="pagination-item">
              <button id={1} onClick={handleOnPageClick}>
                {1}
              </button>
            </li>
            <li className="pagination-item">
              <button disabled>...</button>
            </li>
            <li className="pagination-item">
              <button id={currentPage - 1} onClick={handleOnPageClick}>
                {currentPage - 1}
              </button>
            </li>
            <li className="pagination-item">
              <button active id={currentPage} onClick={handleOnPageClick}>
                {currentPage}
              </button>
            </li>
            <li className="pagination-item">
              <button id={currentPage + 1} onClick={handleOnPageClick}>
                {currentPage + 1}
              </button>
            </li>
            <li className="pagination-item">
              <button disabled>...</button>
            </li>
            <li className="pagination-item">
              <button id={lastPage} onClick={handleOnPageClick}>
                {lastPage}
              </button>
            </li>
          </>
        )}
      </PaginationWrapper>
    );
  }
};

export default PaginationBar;
