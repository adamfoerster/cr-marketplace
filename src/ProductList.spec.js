import { render } from '@testing-library/svelte';
import ProductItem from './ProductItem.svelte';

describe('ProductItem component', () => {
  test('should render component correctly', () => {
    const { container } = render(ProductItem);
    expect(!!container.querySelector('.container')).toBe(true);
  });
});