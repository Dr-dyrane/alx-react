// Header.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it('renders img and h1 tags', () => {
    const { getByAltText, getByText } = render(<Header />);
    expect(getByAltText('logo')).toBeInTheDocument();
    expect(getByText('School dashboard')).toBeInTheDocument();
  });
});
