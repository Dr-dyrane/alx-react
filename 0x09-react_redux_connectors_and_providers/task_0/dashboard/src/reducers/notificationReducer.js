// Import notification action types
import {
  FETCH_NOTIFICATIONS_SUCCESS,
  MARK_AS_READ,
  SET_TYPE_FILTER,
  SET_LOADING_STATE,
} from "../actions/notificationActionTypes";
import { Map } from "immutable";

// Define the initial state for the notifications reducer
const initialState = {
  filter: "DEFAULT",
  notifications: [],
  loading: false, // Add loading attribute to the initial state
};

// Define the notifications reducer function
const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      // Update the state with the fetched notifications and set isRead to false for each
      return {
        ...state,
        notifications: action.data.map((notification) => ({
          ...notification,
          isRead: false,
        })),
        loading: false, // Set loading to false when notifications are fetched
      };
    case MARK_AS_READ:
      // Update the state by setting isRead to true for the marked notification
      return {
        ...state,
        notifications: state.notifications.map((notification) =>
          notification.id === action.index
            ? { ...notification, isRead: true }
            : notification
        ),
      };
    case SET_TYPE_FILTER:
      // Update the state by setting the filter attribute to the specified type
      return {
        ...state,
        filter: action.filter,
      };
    case SET_LOADING_STATE:
      // Update the state by setting the loading attribute
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

// Export the notification reducer function
export default notificationReducer;
