import React from "react";
import PaginationBar from "../PaginationBar";
import { shallow } from "enzyme";

describe("[UNIT Test] Pagination Bar", () => {
  it("should render without crashing", () => {
    const wrapper = shallow(<PaginationBar />);
    expect(wrapper.find("PageItem").exists()).toBeTruthy();
  });

  describe("1. When the amount of page is less than or equal 7", () => {
    const wrapper = shallow(<PaginationBar />);
    it("should display as many PageItem as lastPage", () => {
      wrapper.setProps({
        lastPage: 2
      });
      expect(wrapper.find("PageItem")).toHaveLength(2);

      wrapper.setProps({
        lastPage: 7
      });
      expect(wrapper.find("PageItem")).toHaveLength(7);
    });

    it("should set the correct PageItem to be active", () => {
      wrapper.setProps({
        lastPage: 7,
        currentPage: 3
      });
      expect(
        wrapper
          .find("PageItem")
          .at(1)
          .prop("active")
      ).toBeFalsy();
      expect(
        wrapper
          .find("PageItem")
          .at(6)
          .prop("active")
      ).toBeFalsy();
      expect(
        wrapper
          .find("PageItem")
          .at(2)
          .prop("active")
      ).toBeTruthy();
    });
  });

  describe("2. When the page amount is more than 7", () => {
    const wrapper = shallow(<PaginationBar></PaginationBar>);
    wrapper.setProps({
      lastPage: 20
    });
    it("should not set the amount of PageItem equal to page amount", () => {
      expect(wrapper.find("PageItem")).not.toHaveLength(20);
    });
    it("should display the correctly the active page", () => {
      wrapper.setProps({
        currentPage: 2
      });
      expect(
        wrapper
          .find("PageItem")
          .at(1)
          .prop("active")
      ).toBeTruthy();
    });
    it("should place Elipse correctly", () => {
      wrapper.setProps({
        currentPage: 2
      });
      expect(
        wrapper
          .find("ForwardRef")
          .children()
          .at(3)
          .is("Ellipsis")
      ).toBeTruthy();

      wrapper.setProps({
        currentPage: 19
      });
      expect(
        wrapper
          .find("ForwardRef")
          .children()
          .at(1)
          .is("Ellipsis")
      ).toBeTruthy();

      wrapper.setProps({
        currentPage: 13
      });
      expect(wrapper.find("Ellipsis")).toHaveLength(2);
      expect(
        wrapper
          .find("ForwardRef")
          .children()
          .at(1)
          .is("Ellipsis")
      ).toBeTruthy();
      expect(
        wrapper
          .find("ForwardRef")
          .children()
          .at(5)
          .is("Ellipsis")
      ).toBeTruthy();
    });
  });
});
