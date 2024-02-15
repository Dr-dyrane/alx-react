import { fromJS } from 'immutable';
import {
  filterTypeSelected,
  getNotifications,
  getUnreadNotifications,
} from './notificationSelector';

// Test suite for notification selectors
describe('Notification Selectors', () => {
  // Test: filterTypeSelected works as expected
  it('should return the filter type selected', () => {
    const state = fromJS({
      entities: {
        notifications: {},
      },
      filter: 'DEFAULT',
    });

    expect(filterTypeSelected(state)).toEqual('DEFAULT');
  });

  // Test: getNotifications returns a list of the message entities within the reducer
  it('should return a list of notifications', () => {
    const state = fromJS({
      entities: {
        notifications: {
          1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
          2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
        },
      },
    });

    const expectedNotifications = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      2: { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    });

    expect(getNotifications(state)).toEqual(expectedNotifications);
  });

  // Test: getUnreadNotifications return a list of the message entities within the reducer
  it('should return a list of unread notifications', () => {
    const state = fromJS({
      entities: {
        notifications: {
          1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
          2: { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
          3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
        },
      },
    });

    const expectedUnreadNotifications = fromJS({
      1: { id: 1, isRead: false, type: 'default', value: 'New course available' },
      3: { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
    });

    expect(getUnreadNotifications(state)).toEqual(expectedUnreadNotifications);
  });
});
