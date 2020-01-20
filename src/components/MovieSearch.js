import React, { useState } from "react";
import { searchAndCheckForPagination } from "../util/API";
import SearchForm from "./SearchForm";
import ResultArea from "./ResultArea";
//import ErrorArea from "./ErrorArea";

const MovieSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = event => {
    setSearchTerm(event.target.value);
  };

  const [searchResult, setSearchResult] = useState({});
  const handleSearchSubmit = event => {
    event.preventDefault();
    searchAndCheckForPagination(searchTerm).then(resultObject => {
      if (resultObject.errors) {
        setSearchResult(resultObject);
      } else {
        setSearchResult(resultObject);
        setIsValid(true);
      }
    });
  };

  return (
    <main>
      <SearchForm
        data={searchTerm}
        handleInputChange={handleInputChange}
        handleSearchSubmit={handleSearchSubmit}
      ></SearchForm>
      {isValid ? (
        <ResultArea data={searchResult}></ResultArea>
      ) : (
        <></>
        //<ErrorArea data={searchResult}></ErrorArea>
      )}
    </main>
  );
};

export default MovieSearch;
