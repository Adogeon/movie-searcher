import React from "react";
import { shallow, mount, render } from "enzyme";
import MovieCard from "../MovieCard";
jest.mock("../../util/API");

describe("[Unit Test]/{React Component} Search Form ", () => {
  it("should render without crashing with parent class 'card'", () => {
    const wrapper = render(<MovieCard />);
    wrapper.setProps({
      data: "tt3896198"
    });
    expect(wrapper.hasClass("card")).toEqual(true);
  });
});
