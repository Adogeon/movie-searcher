import React from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: auto 20%;
  width: 80%;
  margin: auto;
  margin-bottom: 2rem;
`;

const StyledInput = styled.input`
  width: 100%;
  &:focus {
    outline-offset: 0px;
    outline: 0px;
  }
`;

const SearchForm = props => {
  return (
    <StyledForm onSubmit={props.handleSearchSubmit} className="search-form">
      <StyledInput
        value={props.data}
        onChange={props.handleInputChange}
        type="text"
        placeholder="Search"
      />
      <button variant="secondary" type="submit">
        Submit
      </button>
    </StyledForm>
  );
};

export default SearchForm;
