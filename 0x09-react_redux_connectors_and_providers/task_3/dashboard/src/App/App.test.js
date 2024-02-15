import React from "react";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { App } from "./App";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import { fromJS } from "immutable";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

// Mocking mapStateToProps function
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  connect: (mapStateToProps, mapDispatchToProps) => (Component) => (props) =>
    <Component {...mapStateToProps(props)} {...mapDispatchToProps} />,
}));

describe("rendering components", () => {
  it("renders App component without crashing", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });

  it("contains Notifications component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Notifications)).toHaveLength(1);
  });

  it("contains Header component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Header />)).toBe(true);
  });

  it("contains Login component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Login)).toHaveLength(1);
  });

  it("contains Footer component", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<Footer />)).toBe(true);
  });

  it("checks CourseList is not rendered", () => {
    const wrapper = shallow(<App />);

    expect(wrapper.contains(<CourseList />)).toBe(false);
  });
});

describe("when isLoggedIn is true", () => {
  it("checks Login is not rendered", () => {
    const wrapper = shallow(<App isLoggedIn={true} user={user} />);
    expect(wrapper.contains(<Login />)).toBe(false);
  });

  it("checks CourseList is rendered", () => {
    const wrapper = shallow(<App isLoggedIn={true} user={user} />);
    expect(wrapper.find(CourseList)).toHaveLength(1); // Change from 0 to 1
  });
});

describe("testing state of App.js", () => {
  it("displayDrawer initial value should be set to false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.prop("displayDrawer")).toBe(false);
  });
});

// Remove the test for markNotificationAsRead since it's no longer relevant

// Test mapStateToProps function
describe("mapStateToProps", () => {
  it("returns the right object when passing the state with isUserLoggedIn as true", () => {
    const state = fromJS({
      ui: {
        isUserLoggedIn: true,
      },
    });

    // Call mapStateToProps function with the state
    const props = mapStateToProps(state);

    // Assert that the returned props object contains isLoggedIn as true
    expect(props).toEqual({ isLoggedIn: true });
  });
});
