import { render } from '@testing-library/svelte';
import CartEmpty from './CartEmpty.svelte';

describe('CartEmpty component', () => {
  test('should render component correctly', () => {
    const { container } = render(CartEmpty);
    expect(container.querySelector('.empty-cart img').src).toBe(
      'http://localhost/assets/cart-icon.svg'
    );
  });
});
