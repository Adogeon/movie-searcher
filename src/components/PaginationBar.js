import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationBar = props => {
  const { numberOfPages, handleOnPageClick } = props;

  const [state, setState] = useState({
    currentPage: 1,
    lastPage: numberOfPages
  });

  const { currentPage, lastPage } = state;

  const handleOnClick = event => {
    setState({
      currentPage: event.target.id
    });
    handleOnPageClick(state.currentPage);
  };

  if (lastPage <= 7) {
    let items = [];
    for (let i = 1; i <= lastPage; i++) {
      items.push(
        <Pagination.Item
          key={i}
          id={i}
          active={i === currentPage}
          onClick={handleOnClick}
        >
          {i}
        </Pagination.Item>
      );
    }
    return <Pagination>{items}</Pagination>;
  } else {
    return (
      <Pagination>
        {currentPage === 1 ? (
          <>
            <Pagination.Item active id={1} onClick={handleOnClick}>
              {1}
            </Pagination.Item>
            <Pagination.Item id={2} onClick={handleOnClick}>
              {2}
            </Pagination.Item>
            <Pagination.Item id={3} onClick={handleOnClick}>
              {3}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={lastPage} onClick={handleOnClick}>
              {lastPage}
            </Pagination.Item>
          </>
        ) : currentPage === 2 ? (
          <>
            <Pagination.Item id={1} onClick={handleOnClick}>
              {1}
            </Pagination.Item>
            <Pagination.Item active id={2} onClick={handleOnClick}>
              {2}
            </Pagination.Item>
            <Pagination.Item id={3} onClick={handleOnClick}>
              {3}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={lastPage} onClick={handleOnClick}>
              {lastPage}
            </Pagination.Item>
          </>
        ) : currentPage === lastPage - 1 ? (
          <>
            <Pagination.Item id={1} onClick={handleOnClick}>
              {1}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={lastPage - 2} onClick={handleOnClick}>
              {lastPage - 2}
            </Pagination.Item>
            <Pagination.Item active id={lastPage - 1} onClick={handleOnClick}>
              {lastPage - 1}
            </Pagination.Item>
            <Pagination.Item id={lastPage} onClick={handleOnClick}>
              {lastPage}
            </Pagination.Item>
          </>
        ) : currentPage === lastPage ? (
          <>
            <Pagination.Item id={1} onClick={handleOnClick}>
              {1}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={lastPage - 2} onClick={handleOnClick}>
              {lastPage - 2}
            </Pagination.Item>
            <Pagination.Item id={lastPage - 1} onClick={handleOnClick}>
              {lastPage - 1}
            </Pagination.Item>
            <Pagination.Item active id={lastPage} onClick={handleOnClick}>
              {lastPage}
            </Pagination.Item>
          </>
        ) : (
          <>
            <Pagination.Item id={1} onClick={handleOnClick}>
              {1}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={currentPage - 1} onClick={handleOnClick}>
              {currentPage - 1}
            </Pagination.Item>
            <Pagination.Item active id={currentPage} onClick={handleOnClick}>
              {currentPage}
            </Pagination.Item>
            <Pagination.Item id={currentPage + 1} onClick={handleOnClick}>
              {currentPage + 1}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={lastPage} onClick={handleOnClick}>
              {lastPage}
            </Pagination.Item>
          </>
        )}
      </Pagination>
    );
  }
};

export default PaginationBar;
