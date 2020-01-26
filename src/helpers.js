export const by = {
  score: (a, b) => {
    if (b.score > a.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    return 0;
  },
  price: (a, b) => {
    if (b.price > a.price) {
      return -1;
    }
    if (a.price > b.price) {
      return 1;
    }
    return 0;
  },
  alpha: (a, b) => {
    if (b.name > a.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  }
};

export const brl = amount => {
  if (!amount) {
    return '0,00';
  }
  return amount.toFixed(2).split('.').join(',');
};