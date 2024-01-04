// Notifications.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Notifications from './Notifications';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<Notifications />);
    expect(getByTestId('notifications')).toBeInTheDocument();
  });

  it('renders the notification message', () => {
    const { getByText } = render(<Notifications />);
    expect(getByText('Here is the list of notifications')).toBeInTheDocument();
  });

  it('renders the close button', () => {
    const { getByLabelText } = render(<Notifications />);
    expect(getByLabelText('Close')).toBeInTheDocument();
  });

  it('renders the list items', () => {
    const { getByText } = render(<Notifications />);
    expect(getByText('New course available')).toBeInTheDocument();
    expect(getByText('New resume available')).toBeInTheDocument();
    // Add more expectations based on your actual list items
  });

  it('renders the latest notification with dangerouslySetInnerHTML', () => {
    const { getByText } = render(<Notifications />);
    expect(getByText('Urgent requirement - complete by EOD')).toBeInTheDocument();
  });
});
