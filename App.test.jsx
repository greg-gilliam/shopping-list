import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './src/App';

test('renders shopping list', () => {
  render(<App />);
  const linkElement = screen.getByText(/Shopping/i);
  expect(linkElement).toBeInTheDocument();
});
