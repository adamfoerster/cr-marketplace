<style>
  .container {
    border-radius: 0.3rem;
    border: 1px solid var(--light-gray);
    margin: 0.3rem 0;
    padding: 1.5rem;
  }

  h2 {
    text-align: left;
  }
  .empty-cart {
    display: flex;
    flex-direction: column;
    margin: 3rem 1rem;
    color: var(--medium-gray);
  }
  .empty-cart img {
    margin: 0 0 1rem;
  }
</style>

<div class="container">
  <h2>Carrinho</h2>
  <div class="empty-cart">
    <img src="/assets/cart-icon.svg" alt="Carrinho vazio" />
    Até o momento o seu carrinho está vazio.
  </div>
</div>
