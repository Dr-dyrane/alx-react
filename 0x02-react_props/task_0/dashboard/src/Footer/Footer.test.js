// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Footer />);
    expect(container).toBeInTheDocument();
  });

  it('renders the text "Copyright"', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Copyright')).toBeInTheDocument();
  });
});
