import React from "react";
import { shallow } from "enzyme";
import SearchForm from "../SearchForm";

describe("[Unit Test]/{React Component} Search Form ", () => {
  it("should render without crashing with parent class 'search-form'", () => {
    expect(shallow(<SearchForm />).hasClass("search-form")).toEqual(true);
  });
});
