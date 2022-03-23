import { render, screen } from '@testing-library/react';
import App from './App';

test('renders an element with CarWallet', () => {
  render(<App />);
  const linkElement = screen.getByText(/CarWallet/i);
  expect(linkElement).toBeInTheDocument();
});
