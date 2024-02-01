// Import the UI reducer and action types
import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

// Test suite for the UI reducer with Immutable.js
describe("uiReducer", () => {
  // Test: State returned equals the initial state when no action is passed
  it("should return the initial state when no action is passed", () => {
    const initialState = uiReducer(undefined, {});
    expect(initialState.toJS()).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  // Test: State returned equals the initial state when the action SELECT_COURSE is passed
  it("should return the initial state when the action SELECT_COURSE is passed", () => {
    const initialState = uiReducer(undefined, {});
    const action = { type: "SELECT_COURSE" };
    const newState = uiReducer(initialState, action);
    expect(newState.toJS()).toEqual(initialState.toJS());
  });

  // Test: State returned changes correctly when the action DISPLAY_NOTIFICATION_DRAWER is passed
  it("should change the state correctly when the action DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const initialState = uiReducer(undefined, {});
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = initialState.set("isNotificationDrawerVisible", true);
    const newState = uiReducer(initialState, action);
    expect(newState.toJS()).toEqual(expectedState.toJS());
  });

  // Add more tests as needed for other actions...
});
