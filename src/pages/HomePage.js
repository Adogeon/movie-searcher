import React from "react";
import MovieSearch from "../components/MovieSearch";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <>
      <HeaderWrapper>
        <h1>Movie Search</h1>
      </HeaderWrapper>
      <MovieSearch></MovieSearch>
    </>
  );
};

export default HomePage;
