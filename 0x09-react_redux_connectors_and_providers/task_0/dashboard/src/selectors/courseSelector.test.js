import { getCourses } from './courseSelector';
import { fromJS } from 'immutable';

describe('courseSelector', () => {
  it('should return empty list when no courses are available', () => {
    const state = { courses: fromJS({}) };
    expect(getCourses(state)).toEqual([]);
  });

  it('should return list of courses', () => {
    const state = {
      courses: fromJS({
        1: { id: 1, name: 'Math' },
        2: { id: 2, name: 'Science' }
      })
    };
    expect(getCourses(state)).toEqual([
      { id: 1, name: 'Math' },
      { id: 2, name: 'Science' }
    ]);
  });
});
