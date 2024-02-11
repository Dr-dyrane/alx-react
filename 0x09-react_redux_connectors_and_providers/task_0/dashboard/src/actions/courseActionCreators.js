import { SET_COURSES } from "./courseActionTypes";

export function fetchCourses() {
  return dispatch => {
    fetch("/dashboard/dist/courses.json")
      .then(response => response.json())
      .then(data => dispatch(setCourses(data)))
      .catch(error => console.error("Error fetching courses:", error));
  };
}

export function setCourses(courses) {
  return {
    type: SET_COURSES,
    courses: courses
  };
}
