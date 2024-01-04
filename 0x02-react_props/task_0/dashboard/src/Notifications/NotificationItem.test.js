// NotificationItem.test.js
import React from 'react';
import { render } from '@testing-library/react';
import NotificationItem from './NotificationItem';

describe('NotificationItem Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<NotificationItem type="default" />);
    expect(container).toBeInTheDocument();
  });

  it('renders correct html with dummy type and value props', () => {
    const { getByText } = render(
      <NotificationItem type="default" value="test" />
    );
    expect(getByText('test')).toBeInTheDocument();
  });

  it('renders correct html with dummy html prop', () => {
    const { getByText } = render(
      <NotificationItem
        type="default"
        html={{ __html: '<u>test</u>' }}
        value="test"
      />
    );
    expect(getByText('test')).toBeInTheDocument();
  });
});
