const sum = (a, b) => {
  if (isNaN(a) || isNaN(b)) {
    return undefined;
  }
  /*  if (a === null || b === null) {
    return undefined;
  }
  if (a === '' || b === '') {
    return undefined;
  } */

  return a + b;
};
export default sum;

/* import { render, screen } from '@testing-library/react';
import App from './App';
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
}) */
