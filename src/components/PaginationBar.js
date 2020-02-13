import React from "react";
import styled from "styled-components";

const PaginationWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
`;

const PaginationItem = styled.li`
  background: #eee;
  font-size: 1.25rem;
  text-align: center;
  width: 2rem;
  border-right: 2px gray solid;
  &:hover {
    background: gray;
    color: white;
    cursor: pointer;
  }
  &:first-child {
    padding-left: 0px;
    border-left: 2px gray solid;
  }
`;

const PaginationItemActive = styled(PaginationItem)`
  background: gray;
  color: white;
`;

const PaginationLink = styled.a`
  display: block;
  color: inherit;
  text-decoration: none;
  width: 100%;
  text-align: center;
`;

const PaginationBar = props => {
  const { handleOnPageClick } = props;

  const lastPage = parseInt(props.lastPage);
  const currentPage = parseInt(props.currentPage);

  if (lastPage <= 7) {
    let items = [];
    for (let i = 1; i <= lastPage; i++) {
      items.push(
        i === currentPage ? (
          <PaginationItemActive>
            <PaginationLink
              key={i}
              id={i}
              active={i === currentPage}
              onClick={handleOnPageClick}
            >
              {i}
            </PaginationLink>
          </PaginationItemActive>
        ) : (
          <PaginationItem>
            <PaginationLink key={i} id={i} onClick={handleOnPageClick}>
              {i}
            </PaginationLink>
          </PaginationItem>
        )
      );
    }
    return <PaginationWrapper>{items}</PaginationWrapper>;
  } else {
    return (
      <PaginationWrapper>
        {currentPage === 1 ? (
          <>
            <PaginationItemActive>
              <PaginationLink id={1} onClick={handleOnPageClick} href="#">
                {1}
              </PaginationLink>
            </PaginationItemActive>
            <PaginationItem>
              <PaginationLink id={2} onClick={handleOnPageClick} href="#">
                {2}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink id={3} onClick={handleOnPageClick} href="#">
                {3}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink disabled>...</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                id={lastPage}
                onClick={handleOnPageClick}
                href="#"
              >
                {lastPage}
              </PaginationLink>
            </PaginationItem>
          </>
        ) : currentPage === 2 ? (
          <>
            <PaginationItem>
              <PaginationLink id={1} onClick={handleOnPageClick} href="#">
                {1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItemActive>
              <PaginationLink id={2} onClick={handleOnPageClick} href="#">
                {2}
              </PaginationLink>
            </PaginationItemActive>
            <PaginationItem>
              <PaginationLink id={3} onClick={handleOnPageClick} href="#">
                {3}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink disabled>...</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                id={lastPage}
                onClick={handleOnPageClick}
                href="#"
              >
                {lastPage}
              </PaginationLink>
            </PaginationItem>
          </>
        ) : currentPage === lastPage - 1 ? (
          <>
            <PaginationItem>
              <PaginationLink id={1} onClick={handleOnPageClick} href="#">
                {1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink disabled>...</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                id={lastPage - 2}
                onClick={handleOnPageClick}
                href="#"
              >
                {lastPage - 2}
              </PaginationLink>
            </PaginationItem>
            <PaginationItemActive>
              <PaginationLink
                id={lastPage - 1}
                onClick={handleOnPageClick}
                href="#"
              >
                {lastPage - 1}
              </PaginationLink>
            </PaginationItemActive>
            <PaginationItem>
              <PaginationLink
                id={lastPage}
                onClick={handleOnPageClick}
                href="#"
              >
                {lastPage}
              </PaginationLink>
            </PaginationItem>
          </>
        ) : currentPage === lastPage ? (
          <>
            <PaginationItem>
              <PaginationLink id={1} onClick={handleOnPageClick} href="#">
                {1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink disabled>...</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                id={lastPage - 2}
                onClick={handleOnPageClick}
                href="#"
              >
                {lastPage - 2}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                id={lastPage - 1}
                onClick={handleOnPageClick}
                href="#"
              >
                {lastPage - 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItemActive>
              <PaginationLink
                id={lastPage}
                onClick={handleOnPageClick}
                href="#"
              >
                {lastPage}
              </PaginationLink>
            </PaginationItemActive>
          </>
        ) : (
          <>
            <PaginationItem>
              <PaginationLink id={1} onClick={handleOnPageClick} href="#">
                {1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink disabled>...</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                id={currentPage - 1}
                onClick={handleOnPageClick}
                href="#"
              >
                {currentPage - 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItemActive>
              <PaginationLink
                id={currentPage}
                onClick={handleOnPageClick}
                href="#"
              >
                {currentPage}
              </PaginationLink>
            </PaginationItemActive>
            <PaginationItem>
              <PaginationLink
                id={currentPage + 1}
                onClick={handleOnPageClick}
                href="#"
              >
                {currentPage + 1}
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink disabled>...</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                id={lastPage}
                onClick={handleOnPageClick}
                href="#"
              >
                {lastPage}
              </PaginationLink>
            </PaginationItem>
          </>
        )}
      </PaginationWrapper>
    );
  }
};

export default PaginationBar;
