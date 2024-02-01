// Import UI action types
import {
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT,
  } from "../actions/uiActionTypes";
  
  // Define the initial state for the UI reducer
  const initialState = {
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
    user: {},
  };
  
  // Define the UI reducer function
  const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      case DISPLAY_NOTIFICATION_DRAWER:
        return {
          ...state,
          isNotificationDrawerVisible: true,
        };
      case HIDE_NOTIFICATION_DRAWER:
        return {
          ...state,
          isNotificationDrawerVisible: false,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          isUserLoggedIn: true,
        };
      case LOGIN_FAILURE:
      case LOGOUT:
        return {
          ...state,
          isUserLoggedIn: false,
        };
      default:
        return state;
    }
  };
  
  // Export the UI reducer function
  export default uiReducer;
  