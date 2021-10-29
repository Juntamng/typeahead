import { render, screen } from '@testing-library/react';
import App from './App';

/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/search/i);
  expect(linkElement).toBeInTheDocument();
});
*/

describe('addition', () => {
  it('know 2 + 2 = 4', ()=> {
    expect(2+2).toBe(4);
  })
})

test('know 2 + 2 = 4', ()=> {
  expect(2+2).toBe(4);
})
