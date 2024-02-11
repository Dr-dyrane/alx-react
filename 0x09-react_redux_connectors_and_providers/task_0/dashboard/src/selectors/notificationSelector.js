// Import necessary functions from 'immutable'
import { createSelector } from 'reselect';

// Selector to get the filter type selected
export const filterTypeSelected = (state) => state.getIn(['filter']);

// Selector to get all notifications
export const getNotifications = (state) => state.getIn(['entities', 'notifications']);

// Selector to get unread notifications
export const getUnreadNotifications = createSelector(
  [getNotifications],
  (notifications) => notifications.filter((notification) => !notification.get('isRead'))
);

// New memoized selector to get unread notifications by type
export const getUnreadNotificationsByType = createSelector(
  [getUnreadNotifications, filterTypeSelected],
  (unreadNotifications, filterType) => {
    if (filterType === 'urgent') {
      return unreadNotifications.filter((notification) => notification.get('type') === 'urgent');
    }
    // Default case: filterType === 'default'
    return unreadNotifications;
  }
);
