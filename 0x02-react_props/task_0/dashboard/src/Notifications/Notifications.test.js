// Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Notifications />);
    expect(container).toBeInTheDocument();
  });

  it('renders NotificationItem elements', () => {
    const { getAllByTestId } = render(<Notifications />);
    const notificationItems = getAllByTestId('notification-item');
    expect(notificationItems.length).toBe(3);
  });

  it('verifies the first NotificationItem element renders the right html', () => {
    const { getByText } = render(<Notifications />);
    expect(getByText('New course available')).toBeInTheDocument();
  });
});
