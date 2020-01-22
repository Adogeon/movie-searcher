import React from "react";
import Pagination from "react-bootstrap/Pagination";

const PaginationBar = props => {
  const { handleOnPageClick } = props;

  const lastPage = parseInt(props.lastPage);
  const currentPage = parseInt(props.currentPage);

  if (lastPage <= 7) {
    let items = [];
    for (let i = 1; i <= lastPage; i++) {
      items.push(
        <Pagination.Item
          key={i}
          id={i}
          active={i === currentPage}
          onClick={handleOnPageClick}
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
            <Pagination.Item active id={1} onClick={handleOnPageClick}>
              {1}
            </Pagination.Item>
            <Pagination.Item id={2} onClick={handleOnPageClick}>
              {2}
            </Pagination.Item>
            <Pagination.Item id={3} onClick={handleOnPageClick}>
              {3}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={lastPage} onClick={handleOnPageClick}>
              {lastPage}
            </Pagination.Item>
          </>
        ) : currentPage === 2 ? (
          <>
            <Pagination.Item id={1} onClick={handleOnPageClick}>
              {1}
            </Pagination.Item>
            <Pagination.Item active id={2} onClick={handleOnPageClick}>
              {2}
            </Pagination.Item>
            <Pagination.Item id={3} onClick={handleOnPageClick}>
              {3}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={lastPage} onClick={handleOnPageClick}>
              {lastPage}
            </Pagination.Item>
          </>
        ) : currentPage === lastPage - 1 ? (
          <>
            <Pagination.Item id={1} onClick={handleOnPageClick}>
              {1}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={lastPage - 2} onClick={handleOnPageClick}>
              {lastPage - 2}
            </Pagination.Item>
            <Pagination.Item
              active
              id={lastPage - 1}
              onClick={handleOnPageClick}
            >
              {lastPage - 1}
            </Pagination.Item>
            <Pagination.Item id={lastPage} onClick={handleOnPageClick}>
              {lastPage}
            </Pagination.Item>
          </>
        ) : currentPage === lastPage ? (
          <>
            <Pagination.Item id={1} onClick={handleOnPageClick}>
              {1}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={lastPage - 2} onClick={handleOnPageClick}>
              {lastPage - 2}
            </Pagination.Item>
            <Pagination.Item id={lastPage - 1} onClick={handleOnPageClick}>
              {lastPage - 1}
            </Pagination.Item>
            <Pagination.Item active id={lastPage} onClick={handleOnPageClick}>
              {lastPage}
            </Pagination.Item>
          </>
        ) : (
          <>
            <Pagination.Item id={1} onClick={handleOnPageClick}>
              {1}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={currentPage - 1} onClick={handleOnPageClick}>
              {currentPage - 1}
            </Pagination.Item>
            <Pagination.Item
              active
              id={currentPage}
              onClick={handleOnPageClick}
            >
              {currentPage}
            </Pagination.Item>
            <Pagination.Item id={currentPage + 1} onClick={handleOnPageClick}>
              {currentPage + 1}
            </Pagination.Item>
            <Pagination.Ellipsis disabled></Pagination.Ellipsis>
            <Pagination.Item id={lastPage} onClick={handleOnPageClick}>
              {lastPage}
            </Pagination.Item>
          </>
        )}
      </Pagination>
    );
  }
};

export default PaginationBar;
