import React from "react";
import MovieSearch from "./components/MovieSearch";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
`;

function App() {
  return (
    <div className="App">
      <HeaderWrapper>
        <h1>Movie Search</h1>
      </HeaderWrapper>
      <MovieSearch></MovieSearch>
    </div>
  );
}

export default App;
