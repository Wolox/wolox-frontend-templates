import { render, screen } from '@testing-library/react';

import Home from '.';

describe('Home screen', () => {
  beforeEach(() => {
    render(<Home foo="Example" />);
  });

  test('Home renders correctly', () => {
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  test('Home renders example link text correctly', () => {
    expect(screen.getByTestId('example-link')).toHaveTextContent('Example');
  });
});
