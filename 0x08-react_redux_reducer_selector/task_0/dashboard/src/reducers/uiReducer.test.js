// Import the UI reducer and action types
import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

// Test suite for the UI reducer
describe("uiReducer", () => {
  // Test: State returned equals the initial state when no action is passed
  it("should return the initial state when no action is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });

  // Test: State returned equals the initial state when the action SELECT_COURSE is passed
  it("should return the initial state when the action SELECT_COURSE is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: "SELECT_COURSE" };
    const newState = uiReducer(initialState, action);
    expect(newState).toEqual(initialState);
  });

  // Test: State returned changes correctly when the action DISPLAY_NOTIFICATION_DRAWER is passed
  it("should change the state correctly when the action DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const initialState = {
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    };
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = {
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    };
    const newState = uiReducer(initialState, action);
    expect(newState).toEqual(expectedState);
  });

  // Add more tests as needed for other actions...
});
