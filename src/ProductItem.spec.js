import { render } from '@testing-library/svelte';
import ProductItem from './ProductItem.svelte';

const sample = {
  id: '123abc',
  name: 'teste',
  price: 1.23,
  image: 'qwerty.png',
  score: 100
}

describe('ProductItem component', () => {
  test('should render component correctly', () => {
    const { container } = render(ProductItem, {
      props: sample
    });
    expect(!!container.querySelector('.container .img-bg')).toBe(true);
  });
});

describe('ProductItem component', () => {
  test('should display name correctly', () => {
    const { container } = render(ProductItem, {
      props: sample
    });
    expect(container.querySelector('.container h3').innerHTML).toBe('teste');
  });
});

describe('ProductItem component', () => {
  test('should display price correctly', () => {
    const { container } = render(ProductItem, {
      props: sample
    });
    expect(container.querySelector('.container span').innerHTML).toBe('R$ 1,23');
  });
});