import { render } from '@testing-library/svelte';
import CartCosts from './CartCosts.svelte';

describe('CartCosts component', () => {
  test('should render component correctly', () => {
    const { container } = render(CartCosts);

    expect(container).toBeInTheDocument('<div>subtotal</div>');
  });
});
