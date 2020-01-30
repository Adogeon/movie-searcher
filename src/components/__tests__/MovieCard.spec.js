import React from "react";
import { shallow, mount, render } from "enzyme";
import { act } from "react-dom/test-utils";
import MovieCard from "../MovieCard";
jest.mock("../../util/API");

describe("[Unit Test]/{React Component} Search Form ", () => {
  it("should render without problem", () => {
    let wrapper;
    act(() => {
      wrapper = shallow(<MovieCard></MovieCard>);
    });
    expect(wrapper.exists("Card")).toBeTruthy();
  });

  it("should first render with loading screen", async () => {
    let wrapper;
    await act(async () => {
      wrapper = await mount(<MovieCard data={"test"} />);
    });

    expect(wrapper.find("CardBody").html()).toBe(
      '<div class="card-body">Loading ... </div>'
    );
  });

  it("should fetch data and display it correctly", async done => {
    let wrapper;

    await act(async () => {
      wrapper = await mount(<MovieCard data={"test"} />);
    });

    setTimeout(() => {
      wrapper.update();
      expect(wrapper.find("Card").exists()).toBeTruthy();
      expect(
        wrapper
          .find(".movie-title")
          .equals(<span className="movie-title">Test</span>)
      ).toBeTruthy();
      done();
    });
  });
});
