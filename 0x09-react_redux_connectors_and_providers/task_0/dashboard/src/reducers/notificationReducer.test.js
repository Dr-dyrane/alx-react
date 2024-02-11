import notificationReducer from "./notificationReducer";
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from "../actions/notificationActionTypes";

describe("notificationReducer", () => {
  // Test: Default state returns the initial state
  it("should return the initial state when no action is passed", () => {
    const initialState = notificationReducer(undefined, {});
    expect(initialState).toEqual({
      filter: "DEFAULT",
      notifications: [],
      loading: false // Ensure loading attribute is present in initial state
    });
  });

  // Test: FETCH_NOTIFICATIONS_SUCCESS returns the data passed
  it("should handle FETCH_NOTIFICATIONS_SUCCESS correctly", () => {
    const action = {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      payload: [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", value: "New data available" },
      ],
    };
    const newState = notificationReducer(undefined, action);
    expect(newState).toEqual({
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
      loading: false
    });
  });

  // Test: MARK_AS_READ returns the data with the right item updated
  it("should handle MARK_AS_READ correctly", () => {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
      loading: false
    };
    const action = { type: MARK_AS_READ, index: 2 };
    const newState = notificationReducer(initialState, action);
    expect(newState).toEqual({
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: true, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
      loading: false
    });
  });

  // Test: SET_TYPE_FILTER returns the data with the right filter updated
  it("should handle SET_TYPE_FILTER correctly", () => {
    const initialState = {
      filter: "DEFAULT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
      loading: false
    };
    const action = { type: SET_TYPE_FILTER, filter: "URGENT" };
    const newState = notificationReducer(initialState, action);
    expect(newState).toEqual({
      filter: "URGENT",
      notifications: [
        { id: 1, isRead: false, type: "default", value: "New course available" },
        { id: 2, isRead: false, type: "urgent", value: "New resume available" },
        { id: 3, isRead: false, type: "urgent", value: "New data available" },
      ],
      loading: false
    });
  });

  // Test: SET_LOADING_STATE updates the loading attribute correctly
  it("should handle SET_LOADING_STATE correctly", () => {
    const initialState = {
      filter: "DEFAULT",
      notifications: [],
      loading: false
    };
    const action = { type: SET_LOADING_STATE, payload: true };
    const newState = notificationReducer(initialState, action);
    expect(newState.loading).toEqual(true);
  });
});
