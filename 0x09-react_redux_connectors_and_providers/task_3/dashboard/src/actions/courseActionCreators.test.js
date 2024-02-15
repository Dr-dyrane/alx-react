import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { fetchCourses, setCourses } from './courseActionCreators';
import { SET_COURSES } from './courseActionTypes';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchCourses', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches SET_COURSES action when fetching courses is successful', () => {
    const courses = [
      { id: 1, name: 'Math' },
      { id: 2, name: 'Science' }
    ];
    fetchMock.getOnce('/dashboard/dist/courses.json', {
      body: courses,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: SET_COURSES, courses }
    ];

    const store = mockStore({});

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('handles errors when fetching courses', () => {
    fetchMock.getOnce('/dashboard/dist/courses.json', {
      status: 404
    });

    const store = mockStore({});

    return store.dispatch(fetchCourses()).then(() => {
      expect(store.getActions()).toEqual([]);
    });
  });
});
