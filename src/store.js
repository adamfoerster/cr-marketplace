import { writable, get } from 'svelte/store';

let globalStore = null;

export const getStore = () => {
  if (!globalStore) {
    globalStore = createStore();
  }
  return globalStore;
};

const createStore = () => {
  const environment = writable('dev');
  const products = writable([]);
  const sorting = writable('score');
  const cart = writable([]);
  let env;

  return {
    environment$: environment.subscribe,
    products$: products.subscribe,
    sorting$: sorting.subscribe,
    cart$: cart.subscribe,

    fetchProducts: () => {
      fetch(`${get(environment).api || '/'}products.json`)
        .then(response => response.json())
        .then(json => products.set(json))
        .catch(error => console.log(error));
    },

    addToCart: newProduct => {
      if (get(cart).find(item => item.id === newProduct.id)) {
        return;
      }
      cart.update(p => [...p, newProduct]);
    },

    removeFromCart: id => {
      cart.set(get(cart).filter(item => item.id !== id));
    },

    setSorting: sortingMethod => sorting.set(sortingMethod),

    setEnv: tenv => {
      env = tenv;
      environment.set(tenv);
    }
  };
};
