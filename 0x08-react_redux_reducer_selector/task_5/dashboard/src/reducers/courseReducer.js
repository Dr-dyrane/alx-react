// Import course action types
import {
    FETCH_COURSE_SUCCESS,
    SELECT_COURSE,
    UNSELECT_COURSE,
  } from "../actions/courseActionTypes";
  
  // Define the initial state for the course reducer as an empty array
  const initialState = [];
  
  // Define the course reducer function
  const courseReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COURSE_SUCCESS:
        // Update the state with the fetched courses and set isSelected to false for each
        return action.data.map(course => ({ ...course, isSelected: false }));
      case SELECT_COURSE:
        // Update the state by setting isSelected to true for the selected course
        return state.map(course =>
          course.id === action.index ? { ...course, isSelected: true } : course
        );
      case UNSELECT_COURSE:
        // Update the state by setting isSelected to false for the unselected course
        return state.map(course =>
          course.id === action.index ? { ...course, isSelected: false } : course
        );
      default:
        return state;
    }
  };
  
  // Export the course reducer function
  export default courseReducer;
  