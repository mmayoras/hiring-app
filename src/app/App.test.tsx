import { render, screen } from '@testing-library/react';

import App from './App';

test('renders page header text', () => {
  render(<App />);
  const pageHeaderText = screen.getByText('Applicants');
  expect(pageHeaderText).toBeInTheDocument();
});

describe('App', () => {
  it('renders', () => {
    render(<App />);
  });
});
