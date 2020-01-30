import React from "react";

const SearchForm = props => {
  return (
    <form onSubmit={props.handleSearchSubmit} className="search-form">
      <input
        value={props.data}
        onChange={props.handleInputChange}
        type="text"
        placeholder="Search"
      />
      <button variant="secondary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default SearchForm;
