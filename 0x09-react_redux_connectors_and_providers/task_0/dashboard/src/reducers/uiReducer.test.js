import { Map } from "immutable";
import uiReducer from "./uiReducer";
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

describe("uiReducer", () => {
  it("should return the initial state", () => {
    const initialState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle DISPLAY_NOTIFICATION_DRAWER", () => {
    const action = { type: DISPLAY_NOTIFICATION_DRAWER };
    const expectedState = Map({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: null,
    });
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle HIDE_NOTIFICATION_DRAWER", () => {
    const action = { type: HIDE_NOTIFICATION_DRAWER };
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle LOGIN_SUCCESS", () => {
    const user = { id: 1, username: "test" };
    const action = { type: LOGIN_SUCCESS, user };
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: true,
      user: user,
    });
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle LOGIN_FAILURE", () => {
    const action = { type: LOGIN_FAILURE };
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });

  it("should handle LOGOUT", () => {
    const action = { type: LOGOUT };
    const expectedState = Map({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: null,
    });
    expect(uiReducer(undefined, action)).toEqual(expectedState);
  });
});
