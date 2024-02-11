import React from "react";
import { shallow } from "enzyme";
import { CourseList } from "./CourseList";
import CourseListRow from "./CourseListRow";

describe("CourseList component tests", () => {
  let mockFetchCourses;
  let mockSelectCourse;
  let mockUnSelectCourse;

  beforeEach(() => {
    mockFetchCourses = jest.fn();
    mockSelectCourse = jest.fn();
    mockUnSelectCourse = jest.fn();
  });

  it("should render without crashing", () => {
    const wrapper = shallow(<CourseList fetchCourses={mockFetchCourses} />);
    expect(wrapper.exists()).toBe(true);
  });

  it("should fetch courses on mount", () => {
    shallow(<CourseList fetchCourses={mockFetchCourses} />);
    expect(mockFetchCourses).toHaveBeenCalled();
  });

  it("should call selectCourse when onChangeRow is called with checked as true", () => {
    const wrapper = shallow(
      <CourseList fetchCourses={mockFetchCourses} selectCourse={mockSelectCourse} unSelectCourse={mockUnSelectCourse} />
    );
    wrapper.find(CourseListRow).props().onChangeRow(1, true);
    expect(mockSelectCourse).toHaveBeenCalledWith(1);
    expect(mockUnSelectCourse).not.toHaveBeenCalled();
  });

  it("should call unSelectCourse when onChangeRow is called with checked as false", () => {
    const wrapper = shallow(
      <CourseList fetchCourses={mockFetchCourses} selectCourse={mockSelectCourse} unSelectCourse={mockUnSelectCourse} />
    );
    wrapper.find(CourseListRow).props().onChangeRow(1, false);
    expect(mockUnSelectCourse).toHaveBeenCalledWith(1);
    expect(mockSelectCourse).not.toHaveBeenCalled();
  });
});
