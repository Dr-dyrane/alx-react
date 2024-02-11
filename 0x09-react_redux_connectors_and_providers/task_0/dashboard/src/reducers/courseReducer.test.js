// Import the course reducer and action types
import courseReducer from "./courseReducer";
import {
  FETCH_COURSE_SUCCESS,
  SELECT_COURSE,
  UNSELECT_COURSE,
} from "../actions/courseActionTypes";

// Test suite for the course reducer
describe("courseReducer", () => {
  // Test: Default state returns an empty array
  it("should return the initial state when no action is passed", () => {
    const initialState = courseReducer(undefined, {});
    expect(initialState).toEqual([]);
  });

  // Test: FETCH_COURSE_SUCCESS returns the data passed
  it("should handle FETCH_COURSE_SUCCESS correctly", () => {
    const action = {
      type: FETCH_COURSE_SUCCESS,
      data: [
        { id: 1, name: "ES6", credit: 60 },
        { id: 2, name: "Webpack", credit: 20 },
        { id: 3, name: "React", credit: 40 },
      ],
    };
    const newState = courseReducer(undefined, action);
    expect(newState).toEqual([
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ]);
  });

  // Test: SELECT_COURSE returns the data with the right item updated
  it("should handle SELECT_COURSE correctly", () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];
    const action = { type: SELECT_COURSE, index: 2 };
    const newState = courseReducer(initialState, action);
    expect(newState).toEqual([
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ]);
  });

  // Test: UNSELECT_COURSE returns the data with the right item updated
  it("should handle UNSELECT_COURSE correctly", () => {
    const initialState = [
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: true, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ];
    const action = { type: UNSELECT_COURSE, index: 2 };
    const newState = courseReducer(initialState, action);
    expect(newState).toEqual([
      { id: 1, name: "ES6", isSelected: false, credit: 60 },
      { id: 2, name: "Webpack", isSelected: false, credit: 20 },
      { id: 3, name: "React", isSelected: false, credit: 40 },
    ]);
  });
});
