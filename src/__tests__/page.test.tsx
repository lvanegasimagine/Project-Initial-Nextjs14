import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('Page', () => {
  it('renders a heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('main');

    expect(heading).toBeInTheDocument();
  });
});
