import { render } from '@testing-library/svelte';
import Cart from './Cart.svelte';

describe('Cart component', () => {
  test('should render component correctly', () => {
    const { container } = render(Cart);

    expect(container).toBeInTheDocument('<h2>Carrinho</h2>');
  });
});
