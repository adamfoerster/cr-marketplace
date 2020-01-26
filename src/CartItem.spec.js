import { render } from '@testing-library/svelte';
import CartItem from './CartItem.svelte';

const example = {
  id: '123abc',
  name: 'teste',
  price: 1.23,
  image: 'asd'
};

describe('CartItem component', () => {
  test('should render component correctly', () => {
    const { container } = render(CartItem, {
      props: example
    });
    expect(!!container.querySelector('.container')).toBe(true);
  });
});

describe('CartItem component', () => {
  test('should display correct name', () => {
    const { container } = render(CartItem, {
      props: example
    });
    expect(container.querySelector('.name').outerHTML.substr(18, 5)).toBe('teste');
  });
});

describe('CartItem component', () => {
  test('should display correct price', () => {
    const { container } = render(CartItem, {
      props: example
    });
    expect(container.querySelector('.name span').innerHTML).toBe('R$ 1,23');
  });
});