import { writable } from 'svelte/store';

export const products = writable([]);
export const order = writable('price');
export const cart = writable([]);

export const fetchProducts = () => {
  fetch('products.json')
    .then(response => response.json())
    .then(json => products.set(json));
};

products.subscribe(value => {
  console.log(value);
});
