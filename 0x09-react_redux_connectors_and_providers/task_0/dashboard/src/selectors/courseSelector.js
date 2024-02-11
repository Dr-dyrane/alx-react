import { createSelector } from 'reselect';

const courseSelector = state => state.courses;

export const getCourses = createSelector(
  courseSelector,
  courses => courses.valueSeq().toList()
);
