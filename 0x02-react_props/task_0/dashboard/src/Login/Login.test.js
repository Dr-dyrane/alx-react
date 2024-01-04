// Login.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Login from './Login';

describe('Login Component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Login />);
    expect(container).toBeInTheDocument();
  });

  it('renders 2 input tags and 2 label tags', () => {
    const { getAllByLabelText, getAllByRole } = render(<Login />);
    expect(getAllByLabelText(/password|email/i).length).toBe(2);
    expect(getAllByRole('textbox').length).toBe(2);
  });
});
