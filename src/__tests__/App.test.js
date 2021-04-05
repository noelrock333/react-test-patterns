import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders Valor del contador: link', () => {
  render(<App />);
  const counterLabel = screen.getAllByText(/Valor del contador: 0/i);
  expect(counterLabel).toHaveLength(2)
});

test('Increment counter value', () => {
  render(<App />);
  screen.getByTestId('add-btn').click();
  const counterLabel = screen.getAllByTestId('counter-label')[0];
  expect(counterLabel).toHaveTextContent(/Valor del contador: 1/i)
})
