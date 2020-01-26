import { render } from '@testing-library/svelte';
import Header from './Header.svelte';

describe('Header component', () => {
  test('should render component correctly', () => {
    const { container } = render(Header);
    expect(container.querySelector('h1').innerHTML).toBe('Games');
  });
});