// Import UI action types
import {
  DISPLAY_NOTIFICATION_DRAWER,
  HIDE_NOTIFICATION_DRAWER,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "../actions/uiActionTypes";

// Import Map from Immutable.js
import { Map } from "immutable";

// Define the initial state for the UI reducer as an Immutable Map
const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null, // Change user to null initially
});

// Define the UI reducer function using Immutable.js
const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true);
    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false);
    case LOGIN_SUCCESS:
      return state
        .set("isUserLoggedIn", true)
        .set("user", action.user); // Set the user to the one passed within the action
    case LOGIN_FAILURE:
    case LOGOUT:
      return state
        .set("isUserLoggedIn", false)
        .set("user", null); // Reset the user to null on logout
    default:
      return state;
  }
};

// Export the UI reducer function
export default uiReducer;
